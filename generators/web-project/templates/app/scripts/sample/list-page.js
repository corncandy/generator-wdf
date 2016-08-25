'use strict';
// Constants
var PAGE_SIZE = 20;
var META = {
  id: { label: '用户ID' },
  name: { label: '用户姓名', required: true, maxLength: 20 },
  email: { label: 'Email', type: 'email', required: true, maxLength: 11 },
  age: { label: '年龄', required: true, type: 'number' },
  birthday: { label: '生日', type: 'date', format: 'YYYY-DD-MM' },
  status: {
    label: '用户状态',
    type: 'select',
    options: [{
      label: '未开户',
      value: 0
    }, {
      label: '未激活',
      value: 1
    }, {
      label: '正常',
      value: 2
    }, {
      label: '已销户',
      value: 3
    }]
  }
};
var TABLE_FIELDS = ['id', 'name', 'age', 'birthday', 'email', 'status'];
var FILTER_FIELDS = ['name', 'age', 'birthday', 'status'];
var EDIT_FIELDS = ['name', 'age', 'birthday', 'email', 'status'];
// Callback functions
var createData = function () {
  var createDialog = WUI.dataDialog.create({
    dialogPop: true,
    dialogPopTitle: '新增用户',
    meta: META,
    list: {},
    fields: EDIT_FIELDS,
    onConfirm: function (itemInfo) {
      console.log(itemInfo);
      createDialog.hide();
    }
  });
};

var editData = function (item) {
  window.open('detail-page.html?id=' + item.id);
};

var deleteData = function (item) {
  var confirmDialog = WUI.ModalDialog.create({
    title: '请确认',
    message: '是否删除此用户数据？',
    onConfirm: function () {
      confirmDialog.hide();
    }
  });
};

var activeData = function (items) {
  console.log('active: ' + items);
};

var deactiveData = function (items) {
  console.log('deactive: ' + items);
};

var queryData = function (options) {
  var editResource = WUI.getResource('/edit');
  var deleteResource = WUI.getResource('/delete');

  WUI.ajax({
    url: '/sample/web/v1/users',
    method: 'GET',
    jsonData: {
      currentPage: options.currentPage,
      pageSize: options.pageSize
    }
  }).then(function (resp) {
    WUI.DataTable.create({
      $el: $('.data-table'),
      meta: META,
      fields: TABLE_FIELDS,
      list: resp.list,
      operations: [{
        name: editResource && editResource.resourceDisplayName,
        callback: editData
      }, {
        name: deleteResource && deleteResource.resourceDisplayName,
        callback: deleteData
      }],
      groups: [{
        name: '启用',
        className: 'btn btn-xs btn-success',
        id: 'btn-success',
        callback: activeData
      }, {
        name: '停用',
        className: 'btn btn-xs btn-danger',
        id: 'btn-danger',
        callback: deactiveData
      }]
    });

    WUI.DataPaginator.create({
      $el: $('.data-paginator'),
      currentPage: options.currentPage,
      total: resp.total,
      pageSize: options.pageSize,
      onSwitchPage: function (currentPage) {
        queryData({
          currentPage: currentPage,
          pageSize: options.pageSize
        });
      }
    });
  });
};
// Load Page
WUI.ready = function () {
  var queryResource = WUI.getResource('/query');
  var addResource = WUI.getResource('/add');

  WUI.ContentHeader.create({
    $el: $('.content-header'),
    meta: [{
      name: '列表页面'
    }]
  });

  WUI.DataFilter.create({
    $el: $('.data-filter'),
    meta: META,
    fields: FILTER_FIELDS,
    queryButton: queryResource && queryResource.resourceDisplayName,
    onFilter: function (params) {
      queryData($.extend(params, {
        currentPage: 0,
        pageSize: PAGE_SIZE
      }));
    },
    addButton: addResource && addResource.resourceDisplayName,
    addFunc: createData
  });

  queryData({
    currentPage: 0,
    pageSize: 20
  });
}
// Keep this function
$(function () {
  WUI.init({
    system: 'sample'
  });
});
