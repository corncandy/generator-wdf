'use strict';

WUI.ready = function () {
  $('.content-header').html(WUI.templates['content-header']({
    paths: [{
      name: '列表页面',
      url: 'list-page.html'
    }, {
      name: '编辑'
    }]
  }));

  var meta = {
    id: {
      label: '用户ID'
    },
    name: {
      label: '用户姓名',
      required: true,
      maxLength: 20,
      edit: true
    },
    email: {
      label: 'Email',
      type: 'email',
      required: true,
      maxLength: 11,
      edit: true
    },
    age: {
      label: '年龄',
      required: true,
      type: 'number',
      edit: true
    },
    birthday: {
      label: '生日',
      type: 'date',
      edit: true
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
      }]
    }
  };

  WUI.ajax({
    url: '/sample/web/v1/users/' + WUI.link().id,
    method: 'GET'
  }).done(function (resp) {
    var user = resp.data;

    WUI.dataDialog.create({
      $el: $('#detail-info'),
      meta: meta,
      list: user,
      fields: ['name', 'email', 'age', 'birthday', 'status'],
      onConfirm: function (userInfo) {
        console.log(userInfo);
      },
      onCancel: function () {
        window.close();
      }
    });
  });
};

$(function () {
  WUI.init({
    system: 'sample'
  });
});
