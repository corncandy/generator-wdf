'use strict';
var t = WUI.t;
// Constants
var PAGE_SIZE = 20;
// For i18n
var META = {};
var TABLE_FIELDS = ['id', 'name', 'age', 'birthday', 'email', 'status'];
var FILTER_FIELDS = ['name', 'age', 'birthday', 'status'];
var EDIT_FIELDS = ['name', 'age', 'birthday', 'email', 'status'];

// Load Page
WUI.ready = function () {
  // For i18n
  META = {
    id: { label: t('用户ID') },
    name: { label: t('用户姓名'), required: true, maxLength: 20 },
    email: { label: 'Email', type: 'email', required: true, maxLength: 11 },
    age: { label: t('年龄'), required: true, type: 'number' },
    birthday: { label: t('生日'), type: 'date', format: 'YYYY-DD-MM' },
    status: {
      label: t('用户状态'),
      type: 'select',
      options: [{
        label: t('未开户'),
        value: 0
      }, {
          label: t('未激活'),
          value: 1
        }, {
          label: t('正常'),
          value: 2
        }, {
          label: t('已销户'),
          value: 3
        }]
    }
  };

  WUI.ContentHeader.create({
    $el: $('.content-header'),
    meta: [{
      name: t('树形页面')
    }]
  });

  //list tree data

  var defaultData = [
    {
      text: 'Parent 1',
      href: '#parent1',
      tags: ['4'],
      nodes: [
        {
          text: 'Child 1',
          href: '#child1',
          tags: ['2'],
          nodes: [
            {
              text: 'Grandchild 1',
              href: '#grandchild1',
              tags: ['0']
            },
            {
              text: 'Grandchild 2',
              href: '#grandchild2',
              tags: ['0']
            }
          ]
        },
        {
          text: 'Child 2',
          href: '#child2',
          tags: ['0']
        }
      ]
    },
    {
      text: 'Parent 2',
      href: '#parent2',
      tags: ['0']
    },
    {
      text: 'Parent 3',
      href: '#parent3',
      tags: ['0']
    },
    {
      text: 'Parent 4',
      href: '#parent4',
      tags: ['0']
    },
    {
      text: 'Parent 5',
      href: '#parent5'  ,
      tags: ['0']
    }
  ];
  $('#treeview1').treeview({
    data: defaultData
  });
  $('#treeview4').treeview({
    color: "#428bca",
    data: defaultData
  });

}

// Keep this function
$(function () {
  WUI.init({
    system: 'sample',
    // locale: 'en'
  });
});
