'use strict';

WUI.ready = function () {
  $('.content-header').html(WUI.templates['content-header']({
    paths: [{
      name: '列表页面'
    }]
  }));

  var meta = {
    id: {
      label: '用户ID'
    },
    name: {
      label: '用户姓名',
      required: true,
      maxLength: 20
    },
    email: {
      label: 'Email',
      type: 'email',
      required: true,
      maxLength: 11
    },
    age: {
      label: '年龄',
      required: true,
      type: 'number'
    },
    birthday: {
      label: '生日',
      type: 'date',
      format: 'YYYY-DD-MM'
    },
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
      }],
      createHide: true
    }
  };

  var editData = function(item) {
    window.open('detail-page.html?id=' + item.id);
  };

  var resetPassword = function(item) {
    console.log('reset', item);
  };

  var queryData = function(options) {
    WUI.ajax({
      url: '/sample/web/v1/users?_start=' + options.currentPage * options.pageSize + '&_limit=' + options.pageSize,
      method: 'GET',
      jsonData: {
        currentPage: options.currentPage,
        pageSize: options.pageSize
      }
    }).then(function(resp) {
      WUI.DataTable.create({
        $el: $('.data-table'),
        meta: meta,
        fields: ['id', 'name', 'age', 'birthday', 'email', 'status'],
        list: resp.list,
        operations: [{
          name: '编辑',
          callback: editData
        }, {
          name: '重置密码',
          callback: resetPassword
        }],
        groups: [{
          name: '启用',
          className:'btn btn-xs btn-success',
          id:'btn-success',
          callback: editData
        }, {
          name: '停用',
          className:'btn btn-xs btn-danger',
          id:'btn-danger',
          callback: resetPassword
        }]
      });

      WUI.DataPaginator.create({
        $el: $('.data-paginator'),
        currentPage: options.currentPage,
        total: resp.total,
        pageSize: options.pageSize,
        onSwitchPage: function(currentPage) {
          queryData({
            currentPage: currentPage,
            pageSize: options.pageSize
          });
        }
      });
    });
  };

  WUI.DataFilter.create({
    $el: $('.data-filter'),
    meta: meta,
    fields: ['mobile', 'userName', 'status'],
    onFilter: function(params) {
      queryData($.extend(params, {
        currentPage: 0,
        pageSize: 1
      }));
    }
  });

  queryData({
    currentPage: 0,
    pageSize: 20
  });
};

$(function () {
  WUI.init({
    system: 'sample'
  });
});
