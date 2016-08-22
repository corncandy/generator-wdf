var DOMAIN = '';

var API = {
  SMART_ROUT_INFO: DOMAIN + '/upp/web/v1/routes', // 获取全部智能路由接口
  SEARCH_SMART_ROUT : DOMAIN+'/upp/web/v1/feeRoute', //查询一条智能路由
  SMART_ROUT: DOMAIN + '/upp/web/v1/route', //智能路由
  STATIC_ROUT_INFO: DOMAIN + '/upp/web/v1/staticRoutes', // 获取全部静态路由接口
  STATIC_ROUT:DOMAIN + '/upp/web/v1/staticRoute', //静态路由接口
  ALL_TYPE_INFO:DOMAIN+'/upp/web/v1/allCodetables', //获取全部的类型接口
  ROUT : DOMAIN + '/upp/web/v1/route', //路由
  ACCOUNT_INFO: DOMAIN+ '/upp/web/v1/accounts', //本方账户信息
  CHANNEL_INFO: DOMAIN+'/upp/web/v1/channelAbilitys',//查询通道信息
  CHANNEL_ITEM: DOMAIN+'/upp/web/v1/channelAbility',//查询单挑通道信息
  QUERY_INFO_CHANGE: DOMAIN+'/upp/web/v1/uppTodos',//查询信息变更
  QUERY_ITEM_CHANNEL: DOMAIN + '/upp/web/v1/maintainDetail', //查询单条通道信息
  QUERY_FEES_INFO: DOMAIN+'/upp/web/v1/channelFees',//查询所有计费信息
  QUERY_FEE_ITEM: DOMAIN+'/upp/web/v1/channelFee',//查询单个计费信息
  SAVE_CHANGE_INFO: DOMAIN+'/upp/web/v1/uppTodo' //保存审核信息
}

var initHandlerbars = function() {
  Handlebars.registerHelper('compare', function(v1, v2, options) {
    if (v1 > v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper('equal', function(v1, v2, options) {
    if (v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
};

var WUI = window.WUI || {};

WUI.init = function(options) {
  // init global config
  WUI.config = WUI.config || {};
  WUI.config.system = options.system;

  var menus = [];
  var initSiteHeader = function(resp) {
    var channelId = WUI.getParams().id;
      console.log('1231221',channelId);
    WUI.SiteHeader.create({
      $el: $('.main-header'),
      name: resp.aasUserPrincipal.ssoUserName,
      roles: resp.aasUserPrincipal.aasUserResources.roles[0].roleName
    })
  };

  var initSiteMenu = function(resp) {
    var resources = resp.aasUserPrincipal.aasUserResources.resources;
    var isHome = window.location.href.indexOf('/home.html') >= 0;

    for (var i = 0; i < resources.length; i++) {
      var resource = resources[i];
      if (resource.linkUrl && resource.linkUrl.indexOf('trade-monitor') > 0) {
        resource.newPage = true;
      }
      if (resource.resourceType === 'menu') {
        var linkUrl = resource.linkUrl;
        var address = window.location.href;

        if (!isHome && address.indexOf(linkUrl) >= 0) {
          resource.isActive = true;
        }

        var level = resource.levelStructure.split('.');

        if (level[1] === '0') {
          resource.subs = [];
          for (var j = 0; j < resources.length; j++) {
            var sub = resources[j];

            if (sub.resourceType === 'menu' &&
              sub.parentLevelStructure === resource.levelStructure) {
              //sub.linkUrl += '.html';
              sub.subs = [];
              for (var k = 0; k < resources.length; k++) {
                var third = resources[k];

                if (third.resourceType === 'menu' &&
                  third.parentLevelStructure === sub.levelStructure) {
                  sub.subs.push(third);
                }
              }
              resource.subs.push(sub);
            }
          }
          menus.push(resource);
        }
      }
    }

    $('.main-sidebar').replaceWith(WUI.templates['site-menu']({
      menus: menus,
      isHome: isHome
    }));
  };

  var initConfigInfo = '';

  var initContentHeader = function(resp) {
    $('.content-header').replaceWith(WUI.templates['page-header'](resp));
  };

  var initSiteFooter = function(resp) {
    $('.main-footer').replaceWith(WUI.templates['site-footer'](resp));
  };

  WUI.getResource =  function(url,a) {
    var la= a ? a : window.location.pathname;
    var url = la + url;
    for (var i = 0; i < initConfigInfo.length; i++) {
      var _link = initConfigInfo[i].linkUrl;
      if(url == _link){
        var info =  initConfigInfo[i];
      }
    }
    return info
  }

  var initSystem = function() {
    WUI.ajax({
      url: '/upp/web/v1/sso/getResources',
      method:'POST'
    }).done(function(resp) {
      initSiteHeader(resp);
      initSiteMenu(resp);
      // initContentHeader(resp);
      initSiteFooter(resp);
      initConfigInfo = resp.aasUserPrincipal.aasUserResources.resources;
      $.AdminLTE.init();
      WUI.ready();
    });
  };

  initHandlerbars();
  initSystem(options);
};

WUI.ready = WUI.ready || function() {
    console.error('WUI: Please provide WUI.ready function.');
  };

WUI.ajax = function(options) {
  WUI.loading.create();
  var data = $.extend({}, options.jsonData || {}, {
    reqHeader: {
      entityId: 'upp',
      appId: WUI.config.system,
      sessionId: '1462461678582',
      reqId: (new Date()).getTime(),
      accessToken: 'accessTokenTest'
    }
  });
  var params = $.extend({}, options, {
    method: options.method ? options.method : 'POST',
    contentType: 'application/json;charset=utf-8',
    data: (options.method === 'GET' || options.method === 'get') ? 'jsonString=' + JSON.stringify(data) : JSON.stringify(data)
  });

  return $.ajax(params)
    .then(function(resp, textStatus, jqXHR) {
      $('#loading-pop').remove();
      var code = resp.respHeader.respCode;
      if (code === 'UPP-10000' || code === 'UPP-10000' || code === 'AAS-10000') {
        return resp;
      } else if (code === 'AAS-920001' || code === 'AAS-920006') {
        window.location.href = resp.loginUrl;
      } else {
        var errorMessage = resp.respHeader.resMessageExt;

        if (!errorMessage) {
          errorMessage = resp.respHeader.respMessage || '';
        }
        WUI.alert.create({
          message:errorMessage,
          fail: true
        });
        return $.Deferred().reject(jqXHR, resp, errorMessage).promise();
      }
    }).fail(function(resp, jqXHR, errorMessage) {
      WUI.alert.create({
        message: errorMessage || 'Ajax Failed!',
        fail: true
      });
    });
};

WUI.DataTable = (function() {
  var create = function(options) {
    var $el = options.$el;
    var meta = options.meta;
    var fields = options.fields;
    var operations = options.operations;
    var groups = options.groups;
    var titles = fields.map(function(field) {
      return {
        title: meta[field].label,
        width: meta[field].width ? meta[field].width : ''
      };
    });
    var list = options.list.map(function(item) {
      return fields.map(function(field) {
        return item[field] == null ? '' : item[field];
      });
    });
    var ops = operations && operations.map(function(operation, index) {
        return {
          name: operation.name,
          className: 'operation-' + index,
          dialog: operation.dialog
        };
      });

    var groupList = groups && groups.map(function(group, index) {
        return {
          name: group.name,
          className: group.className,
          id: group.id
        };
      });

    $el.html(WUI.templates['data-table']({
      titles: titles,
      list: list,
      operations: ops,
      groups: groupList
    }));

    operations && operations.forEach(function(operation, i) {
      $el.find('.operation-' + i).each(function(j) {
        $(this).click(operation.callback.bind(null, options.list[j]));
      });
    });
    var checkItem = function() {
      var itemList = []
      $el.find("input[name='checkBox']:checked").each(function() {
        var item = options.list[$(this).index()];
        itemList.push(item)
      })
      return itemList;
    }
    groups && groups.forEach(function(group, i) {
      //$el.find("input[name='checkBox']").each(function(j) {
      //  $(this).click(group.callidback.bind(null, options.list[j]));
      //});
      $el.find('#' + group.id).click(group.callback.bind(null, checkItem));
    });
    var buttonStatus = function() {
      groups.forEach(function(group, i) {
        $el.find("input[name='checkBox']:checked").length > 0 ? $el.find('#' + group.id).removeAttr("disabled") : $el.find('#' + group.id).attr('disabled', 'true')
      });

    }
    $el.find("#checkAll").click(function() {
      $el.find('input[name="checkBox"]').prop("checked", this.checked);
      buttonStatus();
    });

    $el.find("input[name='checkBox']").click(function() {
      $el.find("#checkAll").prop("checked", $el.find("input[name='checkBox']").length == $el.find("input[name='checkBox']:checked").length ? true : false);
      buttonStatus();
    });

  };

  return {
    create: create
  };
})();

WUI.DataPaginator = (function() {
  var calPaginators = function(totalPage, currentPage) {
    var paginators = [];
    var i;

    if (totalPage > 9) {
      if (currentPage < 5) {
        for (i = 0; i < 9; i++) {
          paginators.push(i + 1);
        }
      } else if (currentPage > (totalPage - 5)) {
        for (i = 0; i < 9; i++) {
          paginators.push(totalPage - 9 + i + 1);
        }
      } else {
        for (i = 0; i < 9; i++) {
          paginators.push(currentPage - 4 + i + 1);
        }
      }
    } else {
      for (i = 0; i < totalPage; i++) {
        paginators.push(i + 1);
      }
    }

    return paginators;
  };

  var create = function(options) {
    var $el = options.$el;
    var total = options.total;
    var currentPage = options.currentPage + 1;
    var pageSize = options.pageSize;
    var offset = currentPage * pageSize;
    var totalPage = (total % pageSize) ? (parseInt(total / pageSize, 10) + 1) :
      parseInt(total / pageSize, 10);
    var start = (currentPage - 1) * pageSize + 1;
    var end = offset > total ? total : offset;
    var onSwitchPage = options.onSwitchPage;

    $el.html(WUI.templates['data-paginator']({
      currentPage: currentPage,
      pageSize: pageSize,
      total: total,
      totalPage: totalPage,
      start: start,
      end: end,
      paginators: calPaginators(totalPage, currentPage)
    }));

    $el.find('.paginator').click(function() {
      var target = $(this).data('role');

      switch (target) {
        case 'first':
          if (currentPage !== 1) {
            onSwitchPage(0);
          }
          break;
        case 'last':
          if (currentPage !== totalPage) {
            onSwitchPage(totalPage - 1);
          }
          break;
        case 'prev':
          if (currentPage > 1) {
            onSwitchPage(currentPage - 2);
          }
          break;
        case 'next':
          if (currentPage < totalPage) {
            onSwitchPage(currentPage);
          }
          break;
        default:
          var targetPage = parseInt(target, 10);
          if (targetPage !== currentPage) {
            onSwitchPage(targetPage - 1);
          }
          break;
      }
    });
  };

  return {
    create: create
  };
})();

WUI.DataFilter = (function() {
  var create = function(options) {
    var $el = options.$el;
    var onFilter = options.onFilter;
    var addFunc = options.addFunc;
    var meta = options.meta;
    var fields = options.fields.map(function(field) {
      var target = $.extend({}, meta[field], {
        name: field
      });

      switch (target.type) {
        case 'text':
          target.text = true;
          break;
        case 'select':
          target.select = true;
          break;
        case 'number':
          target.number = true;
          break;
        default:
          target.text = true;
          break;
      }

      return target;
    });

    $el.html(WUI.templates['data-filter']({
      fields: fields,
      addButton: options.addButton ? options.addButton : false,
      queryButton : options.queryButton ? options.queryButton : false
    }));

    $el.find('.filter').click(function() {
      var paramArray = $el.find('form').serializeArray();
      var paramObj = {};

      paramArray.forEach(function(param) {
        paramObj[param.name] = param.value;
      });

      onFilter(paramObj);
    });

    $el.find('.add').click(function() {
      var paramArray = $el.find('form').serializeArray();
      var paramObj = {};

      paramArray.forEach(function(param) {
        paramObj[param.name] = param.value;
      });

      addFunc(paramObj);
    });

  };

  return {
    create: create
  };
})();


WUI.dataDialog = (function() {
  var create = function(options) {
    var $el = options.$el;
    var meta = options.meta;
    var onConfirm = options.onConfirm;
    var cancelFunc = options.onCancel;
    var fields = options.fields.map(function(field) {
      var target = $.extend({}, meta[field], {
        name: field,
        value: options.list[field] ? options.list[field] : ''
      });
      switch (target.type) {
        case 'text':
          target.text = true;
          break;
        case 'select':
          target.select = true;
          break;
        case 'number':
          target.number = true;
          break;
        default:
          target.text = true;
          break;
      }

      return target;
    });
    if($el){
      var parentdiv = $el;
    }else{
      var parentdiv=$('<div></div>');
      parentdiv.attr('id','table-body');
      parentdiv.addClass('row');
      parentdiv.appendTo('.data-table');
    }
    parentdiv.html(WUI.templates['data-dialog']({
      fields: fields,
      onConfirm: options.onConfirm ? true : false,
      cancelFunc: cancelFunc ? true : false,
      textInfo: options.textInfo ? options.textInfo : false,
      textInfoShow:options.textInfoShow ? options.textInfoShow : false,
      buttonHide: options.buttonHide ? true : false
    }));

    $('#modal').click(function() {
      var paramArray = parentdiv.find('form').serializeArray();
      var paramObj = {};
      paramArray.forEach(function(param) {
        paramObj[param.name] = param.value;
      });
      onConfirm(paramObj);
    });

    $('#cancelButton').click(function() {
      var paramArray = parentdiv.find('form').serializeArray();
      var paramObj = {};
      paramArray.forEach(function(param) {
        paramObj[param.name] = param.value;
      });
      cancelFunc(paramObj);
    });
  };


  return {
    create: create
  };
})();

//通过URL获取参数
WUI.URL = function(uri){
  var doc = document;

  var elem =  doc.createElement('a');

  elem.href = uri;

  return {
    source: uri,
    protocol: elem.protocol.replace(':',''),
    host: elem.hostname,
    port: elem.port,
    query: elem.search,
    params: (function(){
      var ret = {},
        seg = elem.search.replace(/^\?/,'').split('&'),
        len = seg.length, i = 0, s;
      for (;i<len;i++) {
        if (!seg[i]) { continue; }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
      }
      return ret;
    })(),
    file: (elem.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
    hash: elem.hash.replace('#',''),
    path: elem.pathname.replace(/^([^\/])/,'/$1'),
    relative: (elem.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
    segments: elem.pathname.replace(/^\//,'').split('/')
  };

};

//获取URL具体参数
WUI.link = function(){
  var _url = WUI.URL(window.location.href),
    _params = _url.params;
  return _params;
};


WUI.alert = (function() {
  var create = function(options) {
    var message = options.message;
    var parentdiv=$('<div></div>');
    parentdiv.attr('id','alert-pop');
    parentdiv.appendTo('.main-header');

    parentdiv.html(WUI.templates['page-alert']({
      message: message,
      success: options.success ? true : false,
      fail: options.fail ? true : false
    }));

    setTimeout(function () {
      $('#alert-pop').remove();
    }, 2000);

  };
  return {
    create: create
  };
})();

WUI.loading = (function() {
  var create = function() {
    var parentdiv=$('<div></div>');
    parentdiv.attr('id','loadingPop');
    parentdiv.appendTo('body');
    $('#loadingPop').html(WUI.templates['page-loading']());
  };
  return {
    create: create
  };
})();

WUI.typeItem =  function(sub,info){
  var list = []
  info.map(function(item){
    if(item.codeType == sub){
      list.push(item);
    }
  })
  return list
}

//时间格式

var format = function(time, format){
  if(time == null){
    return '';
  }else {
    var t = new Date(time);
    var tf = function (i) {
      return (i < 10 ? '0' : '') + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear());
          break;
        case 'MM':
          return tf(t.getMonth() + 1);
          break;
        case 'mm':
          return tf(t.getMinutes());
          break;
        case 'dd':
          return tf(t.getDate());
          break;
        case 'HH':
          return tf(t.getHours());
          break;
        case 'ss':
          return tf(t.getSeconds());
          break;
      }
      ;
    });
  }
};
