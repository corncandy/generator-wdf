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

//var WUI = window.WUI || {};

WUI.init = function(options) {
  // init global config
  WUI.config = WUI.config || {};
  WUI.config.system = options.system;

  var menus = [];
  var initSiteHeader = function(resp) {
    var channelId = WUI.link().id;
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
      url: '/' + WUI.config.system + '/web/v1/sso/getResources',
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

WUI.typeItem =  function(sub,info){
  var list = []
  info.map(function(item){
    if(item.codeType == sub){
      list.push(item);
    }
  })
  return list
}


