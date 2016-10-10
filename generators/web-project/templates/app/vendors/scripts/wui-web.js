(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WUI"] = factory();
	else
		root["WUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// var Handlebars = require('handlebars');
	// require('../templates/templates.js');
	
	__webpack_require__(1);
	__webpack_require__(10);
	__webpack_require__(11);
	var SiteHeader = __webpack_require__(12);
	var tools = __webpack_require__(14);
	var alert = __webpack_require__(25);
	var DataTable = __webpack_require__(27);
	var DataFilter = __webpack_require__(28);
	var DataPaginator = __webpack_require__(29);
	var PageLoading = __webpack_require__(26);
	var DataDialog = __webpack_require__(30);
	var ContentHeader = __webpack_require__(31);
	var ModalDialog = __webpack_require__(32);
	var ConfirmDialog = __webpack_require__(33);
	var HelpTools = __webpack_require__(34);
	module.exports = {
	  SiteHeader: SiteHeader,
	  getUrl: tools.getUrl,
	  link: tools.getParams,
	  ajax: tools.ajax,
	  format: tools.getFormat,
	  t: tools.t,
	  alert: alert,
	  DataTable: DataTable,
	  DataFilter: DataFilter,
	  DataPaginator: DataPaginator,
	  loading: PageLoading,
	  dataDialog: DataDialog,
	  ContentHeader: ContentHeader,
	  ModalDialog: ModalDialog,
	  ConfirmDialog: ConfirmDialog,
	  HelpDialog: HelpTools,
	  templates: Handlebars.templates
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Handlebars = __webpack_require__(2);
	
	Handlebars.registerHelper('compare', function (v1, v2, options) {
	  if (v1 > v2) {
	    return options.fn(this);
	  }
	  return options.inverse(this);
	});
	
	Handlebars.registerHelper('equal', function (v1, v2, options) {
	  if (v1 === v2) {
	    return options.fn(this);
	  }
	  return options.inverse(this);
	});
	
	Handlebars.registerHelper('dividedIndex', function (v1, v2, options) {
	  var v3 = (v1 + 1) % v2;
	  if (v3 === 0) {
	    return options.fn(this);
	  }
	  return options.inverse(this);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(3)['default'];


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	exports.__esModule = true;
	
	var _import = __webpack_require__(4);
	
	var base = _interopRequireWildcard(_import);
	
	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	
	var _SafeString = __webpack_require__(7);
	
	var _SafeString2 = _interopRequireWildcard(_SafeString);
	
	var _Exception = __webpack_require__(6);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var _import2 = __webpack_require__(5);
	
	var Utils = _interopRequireWildcard(_import2);
	
	var _import3 = __webpack_require__(8);
	
	var runtime = _interopRequireWildcard(_import3);
	
	var _noConflict = __webpack_require__(9);
	
	var _noConflict2 = _interopRequireWildcard(_noConflict);
	
	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();
	
	  Utils.extend(hb, base);
	  hb.SafeString = _SafeString2['default'];
	  hb.Exception = _Exception2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;
	
	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };
	
	  return hb;
	}
	
	var inst = create();
	inst.create = create;
	
	_noConflict2['default'](inst);
	
	inst['default'] = inst;
	
	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;
	
	var _import = __webpack_require__(5);
	
	var Utils = _interopRequireWildcard(_import);
	
	var _Exception = __webpack_require__(6);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var VERSION = '3.0.1';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 6;
	
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1'
	};
	
	exports.REVISION_CHANGES = REVISION_CHANGES;
	var isArray = Utils.isArray,
	    isFunction = Utils.isFunction,
	    toString = Utils.toString,
	    objectType = '[object Object]';
	
	function HandlebarsEnvironment(helpers, partials) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	
	  registerDefaultHelpers(this);
	}
	
	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,
	
	  logger: logger,
	  log: log,
	
	  registerHelper: function registerHelper(name, fn) {
	    if (toString.call(name) === objectType) {
	      if (fn) {
	        throw new _Exception2['default']('Arg not supported with multiple helpers');
	      }
	      Utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },
	
	  registerPartial: function registerPartial(name, partial) {
	    if (toString.call(name) === objectType) {
	      Utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _Exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  }
	};
	
	function registerDefaultHelpers(instance) {
	  instance.registerHelper('helperMissing', function () {
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} constuct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;
	
	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }
	
	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }
	
	      return fn(context, options);
	    }
	  });
	
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _Exception2['default']('Must pass iterator to #each');
	    }
	
	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;
	
	    if (options.data && options.ids) {
	      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }
	
	    if (isFunction(context)) {
	      context = context.call(this);
	    }
	
	    if (options.data) {
	      data = createFrame(options.data);
	    }
	
	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;
	
	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }
	
	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }
	
	    if (context && typeof context === 'object') {
	      if (isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        var priorKey = undefined;
	
	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }
	
	    if (i === 0) {
	      ret = inverse(this);
	    }
	
	    return ret;
	  });
	
	  instance.registerHelper('if', function (conditional, options) {
	    if (isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }
	
	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });
	
	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	
	  instance.registerHelper('with', function (context, options) {
	    if (isFunction(context)) {
	      context = context.call(this);
	    }
	
	    var fn = options.fn;
	
	    if (!Utils.isEmpty(context)) {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
	        options = { data: data };
	      }
	
	      return fn(context, options);
	    } else {
	      return options.inverse(this);
	    }
	  });
	
	  instance.registerHelper('log', function (message, options) {
	    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
	    instance.log(level, message);
	  });
	
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	}
	
	var logger = {
	  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },
	
	  // State enum
	  DEBUG: 0,
	  INFO: 1,
	  WARN: 2,
	  ERROR: 3,
	  level: 1,
	
	  // Can be overridden in the host environment
	  log: function log(level, message) {
	    if (typeof console !== 'undefined' && logger.level <= level) {
	      var method = logger.methodMap[level];
	      (console[method] || console.log).call(console, message); // eslint-disable-line no-console
	    }
	  }
	};
	
	exports.logger = logger;
	var log = logger.log;
	
	exports.log = log;
	
	function createFrame(object) {
	  var frame = Utils.extend({}, object);
	  frame._parent = object;
	  return frame;
	}
	
	/* [args, ]options */

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.extend = extend;
	
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  '\'': '&#x27;',
	  '`': '&#x60;'
	};
	
	var badChars = /[&<>"'`]/g,
	    possible = /[&<>"'`]/;
	
	function escapeChar(chr) {
	  return escape[chr];
	}
	
	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	var toString = Object.prototype.toString;
	
	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	var isFunction;
	exports.isFunction = isFunction;
	/*eslint-enable func-style, no-var */
	
	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};exports.isArray = isArray;
	
	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }
	
	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }
	
	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}
	
	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}
	
	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}
	
	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
	
	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;
	
	    message += ' - ' + line + ':' + column;
	  }
	
	  var tmp = Error.prototype.constructor.call(this, message);
	
	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }
	
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }
	
	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}
	
	Exception.prototype = new Error();
	
	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	// Build out our basic SafeString type
	function SafeString(string) {
	  this.string = string;
	}
	
	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};
	
	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	
	// TODO: Remove this line and break up compilePartial
	
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	
	var _import = __webpack_require__(5);
	
	var Utils = _interopRequireWildcard(_import);
	
	var _Exception = __webpack_require__(6);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(4);
	
	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;
	
	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
	          compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
	      throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}
	
	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _Exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }
	
	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);
	
	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	    }
	
	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);
	
	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }
	
	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }
	
	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },
	
	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,
	
	    fn: function fn(i) {
	      return templateSpec[i];
	    },
	
	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },
	
	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;
	
	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }
	
	      return obj;
	    },
	
	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };
	
	  function ret(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];
	
	    var data = options.data;
	
	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      depths = options.depths ? [context].concat(options.depths) : [context];
	    }
	
	    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
	  }
	  ret.isTop = true;
	
	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);
	
	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	    }
	  };
	
	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _Exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _Exception2['default']('must pass parent depths');
	    }
	
	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}
	
	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];
	
	    return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
	  }
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}
	
	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    partial = options.partials[options.name];
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}
	
	function invokePartial(partial, context, options) {
	  options.partial = true;
	
	  if (partial === undefined) {
	    throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}
	
	function noop() {
	  return '';
	}
	
	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	exports.__esModule = true;
	/*global window */
	
	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports) {

	/* jqBootstrapValidation
	 * A plugin for automating validation on Twitter Bootstrap formatted forms.
	 *
	 * v1.3.6
	 *
	 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
	 *
	 * http://ReactiveRaven.github.com/jqBootstrapValidation/
	 */
	
	(function( $ ){
	
		var createdElements = [];
	
		var defaults = {
			options: {
				prependExistingHelpBlock: false,
				sniffHtml: true, // sniff for 'required', 'maxlength', etc
				preventSubmit: true, // stop the form submit event from firing if validation fails
				submitError: false, // function called if there is an error when trying to submit
				submitSuccess: false, // function called just before a successful submit event is sent to the server
	            semanticallyStrict: false, // set to true to tidy up generated HTML output
				autoAdd: {
					helpBlocks: true
				},
	            filter: function () {
	                // return $(this).is(":visible"); // only validate elements you can see
	                return true; // validate everything
	            }
			},
	    methods: {
	      init : function( options ) {
	
	        var settings = $.extend(true, {}, defaults);
	
	        settings.options = $.extend(true, settings.options, options);
	
	        var $siblingElements = this;
	
	        var uniqueForms = $.unique(
	          $siblingElements.map( function () {
	            return $(this).parents("form")[0];
	          }).toArray()
	        );
	
	        $(uniqueForms).bind("submit", function (e) {
	          var $form = $(this);
	          var warningsFound = 0;
	          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
	          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");
	
	          $inputs.each(function (i, el) {
	            var $this = $(el),
	              $controlGroup = $this.parents(".control-group").first();
	            if (
	              $controlGroup.hasClass("warning")
	            ) {
	              $controlGroup.removeClass("warning").addClass("error");
	              warningsFound++;
	            }
	          });
	
	          $inputs.trigger("validationLostFocus.validation");
	
	          if (warningsFound) {
	            if (settings.options.preventSubmit) {
	              e.preventDefault();
	            }
	            $form.addClass("error");
	            if ($.isFunction(settings.options.submitError)) {
	              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
	            }
	          } else {
	            $form.removeClass("error");
	            if ($.isFunction(settings.options.submitSuccess)) {
	              settings.options.submitSuccess($form, e);
	            }
	          }
	        });
	
	        return this.each(function(){
	
	          // Get references to everything we're interested in
	          var $this = $(this),
	            $controlGroup = $this.parents(".control-group").first(),
	            $helpBlock = $controlGroup.find(".help-block").first(),
	            $form = $this.parents("form").first(),
	            validatorNames = [];
	
	          // create message container if not exists
	          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
	              $helpBlock = $('<div class="help-block" />');
	              $controlGroup.find('.controls').append($helpBlock);
								createdElements.push($helpBlock[0]);
	          }
	
	          // =============================================================
	          //                                     SNIFF HTML FOR VALIDATORS
	          // =============================================================
	
	          // *snort sniff snuffle*
	
	          if (settings.options.sniffHtml) {
	            var message = "";
	            // ---------------------------------------------------------
	            //                                                   PATTERN
	            // ---------------------------------------------------------
	            if ($this.attr("pattern") !== undefined) {
	              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
	              if ($this.data("validationPatternMessage")) {
	                message = $this.data("validationPatternMessage");
	              }
	              $this.data("validationPatternMessage", message);
	              $this.data("validationPatternRegex", $this.attr("pattern"));
	            }
	            // ---------------------------------------------------------
	            //                                                       MAX
	            // ---------------------------------------------------------
	            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
	              var max = ($this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax"));
	              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
	              if ($this.data("validationMaxMessage")) {
	                message = $this.data("validationMaxMessage");
	              }
	              $this.data("validationMaxMessage", message);
	              $this.data("validationMaxMax", max);
	            }
	            // ---------------------------------------------------------
	            //                                                       MIN
	            // ---------------------------------------------------------
	            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
	              var min = ($this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin"));
	              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
	              if ($this.data("validationMinMessage")) {
	                message = $this.data("validationMinMessage");
	              }
	              $this.data("validationMinMessage", message);
	              $this.data("validationMinMin", min);
	            }
	            // ---------------------------------------------------------
	            //                                                 MAXLENGTH
	            // ---------------------------------------------------------
	            if ($this.attr("maxlength") !== undefined) {
	              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
	              if ($this.data("validationMaxlengthMessage")) {
	                message = $this.data("validationMaxlengthMessage");
	              }
	              $this.data("validationMaxlengthMessage", message);
	              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
	            }
	            // ---------------------------------------------------------
	            //                                                 MINLENGTH
	            // ---------------------------------------------------------
	            if ($this.attr("minlength") !== undefined) {
	              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
	              if ($this.data("validationMinlengthMessage")) {
	                message = $this.data("validationMinlengthMessage");
	              }
	              $this.data("validationMinlengthMessage", message);
	              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
	            }
	            // ---------------------------------------------------------
	            //                                                  REQUIRED
	            // ---------------------------------------------------------
	            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
	              message = settings.builtInValidators.required.message;
	              if ($this.data("validationRequiredMessage")) {
	                message = $this.data("validationRequiredMessage");
	              }
	              $this.data("validationRequiredMessage", message);
	            }
	            // ---------------------------------------------------------
	            //                                                    NUMBER
	            // ---------------------------------------------------------
	            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
	              message = settings.builtInValidators.number.message;
	              if ($this.data("validationNumberMessage")) {
	                message = $this.data("validationNumberMessage");
	              }
	              $this.data("validationNumberMessage", message);
	            }
	            // ---------------------------------------------------------
	            //                                                     EMAIL
	            // ---------------------------------------------------------
	            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
	              message = "Not a valid email address<!-- data-validation-validemail-message to override -->";
	              if ($this.data("validationValidemailMessage")) {
	                message = $this.data("validationValidemailMessage");
	              } else if ($this.data("validationEmailMessage")) {
	                message = $this.data("validationEmailMessage");
	              }
	              $this.data("validationValidemailMessage", message);
	            }
	            // ---------------------------------------------------------
	            //                                                MINCHECKED
	            // ---------------------------------------------------------
	            if ($this.attr("minchecked") !== undefined) {
	              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
	              if ($this.data("validationMincheckedMessage")) {
	                message = $this.data("validationMincheckedMessage");
	              }
	              $this.data("validationMincheckedMessage", message);
	              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
	            }
	            // ---------------------------------------------------------
	            //                                                MAXCHECKED
	            // ---------------------------------------------------------
	            if ($this.attr("maxchecked") !== undefined) {
	              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
	              if ($this.data("validationMaxcheckedMessage")) {
	                message = $this.data("validationMaxcheckedMessage");
	              }
	              $this.data("validationMaxcheckedMessage", message);
	              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
	            }
	          }
	
	          // =============================================================
	          //                                       COLLECT VALIDATOR NAMES
	          // =============================================================
	
	          // Get named validators
	          if ($this.data("validation") !== undefined) {
	            validatorNames = $this.data("validation").split(",");
	          }
	
	          // Get extra ones defined on the element's data attributes
	          $.each($this.data(), function (i, el) {
	            var parts = i.replace(/([A-Z])/g, ",$1").split(",");
	            if (parts[0] === "validation" && parts[1]) {
	              validatorNames.push(parts[1]);
	            }
	          });
	
	          // =============================================================
	          //                                     NORMALISE VALIDATOR NAMES
	          // =============================================================
	
	          var validatorNamesToInspect = validatorNames;
	          var newValidatorNamesToInspect = [];
	
	          do // repeatedly expand 'shortcut' validators into their real validators
	          {
	            // Uppercase only the first letter of each name
	            $.each(validatorNames, function (i, el) {
	              validatorNames[i] = formatValidatorName(el);
	            });
	
	            // Remove duplicate validator names
	            validatorNames = $.unique(validatorNames);
	
	            // Pull out the new validator names from each shortcut
	            newValidatorNamesToInspect = [];
	            $.each(validatorNamesToInspect, function(i, el) {
	              if ($this.data("validation" + el + "Shortcut") !== undefined) {
	                // Are these custom validators?
	                // Pull them out!
	                $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) {
	                  newValidatorNamesToInspect.push(el2);
	                });
	              } else if (settings.builtInValidators[el.toLowerCase()]) {
	                // Is this a recognised built-in?
	                // Pull it out!
	                var validator = settings.builtInValidators[el.toLowerCase()];
	                if (validator.type.toLowerCase() === "shortcut") {
	                  $.each(validator.shortcut.split(","), function (i, el) {
	                    el = formatValidatorName(el);
	                    newValidatorNamesToInspect.push(el);
	                    validatorNames.push(el);
	                  });
	                }
	              }
	            });
	
	            validatorNamesToInspect = newValidatorNamesToInspect;
	
	          } while (validatorNamesToInspect.length > 0)
	
	          // =============================================================
	          //                                       SET UP VALIDATOR ARRAYS
	          // =============================================================
	
	          var validators = {};
	
	          $.each(validatorNames, function (i, el) {
	            // Set up the 'override' message
	            var message = $this.data("validation" + el + "Message");
	            var hasOverrideMessage = (message !== undefined);
	            var foundValidator = false;
	            message =
	              (
	                message
	                  ? message
	                  : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->"
	              )
	            ;
	
	            $.each(
	              settings.validatorTypes,
	              function (validatorType, validatorTemplate) {
	                if (validators[validatorType] === undefined) {
	                  validators[validatorType] = [];
	                }
	                if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
	                  validators[validatorType].push(
	                    $.extend(
	                      true,
	                      {
	                        name: formatValidatorName(validatorTemplate.name),
	                        message: message
	                      },
	                      validatorTemplate.init($this, el)
	                    )
	                  );
	                  foundValidator = true;
	                }
	              }
	            );
	
	            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {
	
	              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
	              if (hasOverrideMessage) {
	                validator.message = message;
	              }
	              var validatorType = validator.type.toLowerCase();
	
	              if (validatorType === "shortcut") {
	                foundValidator = true;
	              } else {
	                $.each(
	                  settings.validatorTypes,
	                  function (validatorTemplateType, validatorTemplate) {
	                    if (validators[validatorTemplateType] === undefined) {
	                      validators[validatorTemplateType] = [];
	                    }
	                    if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
	                      $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
	                      validators[validatorType].push(
	                        $.extend(
	                          validator,
	                          validatorTemplate.init($this, el)
	                        )
	                      );
	                      foundValidator = true;
	                    }
	                  }
	                );
	              }
	            }
	
	            if (! foundValidator) {
	              $.error("Cannot find validation info for '" + el + "'");
	            }
	          });
	
	          // =============================================================
	          //                                         STORE FALLBACK VALUES
	          // =============================================================
	
	          $helpBlock.data(
	            "original-contents",
	            (
	              $helpBlock.data("original-contents")
	                ? $helpBlock.data("original-contents")
	                : $helpBlock.html()
	            )
	          );
	
	          $helpBlock.data(
	            "original-role",
	            (
	              $helpBlock.data("original-role")
	                ? $helpBlock.data("original-role")
	                : $helpBlock.attr("role")
	            )
	          );
	
	          $controlGroup.data(
	            "original-classes",
	            (
	              $controlGroup.data("original-clases")
	                ? $controlGroup.data("original-classes")
	                : $controlGroup.attr("class")
	            )
	          );
	
	          $this.data(
	            "original-aria-invalid",
	            (
	              $this.data("original-aria-invalid")
	                ? $this.data("original-aria-invalid")
	                : $this.attr("aria-invalid")
	            )
	          );
	
	          // =============================================================
	          //                                                    VALIDATION
	          // =============================================================
	
	          $this.bind(
	            "validation.validation",
	            function (event, params) {
	
	              var value = getValue($this);
	
	              // Get a list of the errors to apply
	              var errorsFound = [];
	
	              $.each(validators, function (validatorType, validatorTypeArray) {
	                if (value || value.length || (params && params.includeEmpty) || (!!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting)) {
	                  $.each(validatorTypeArray, function (i, validator) {
	                    if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
	                      errorsFound.push(validator.message);
	                    }
	                  });
	                }
	              });
	
	              return errorsFound;
	            }
	          );
	
	          $this.bind(
	            "getValidators.validation",
	            function () {
	              return validators;
	            }
	          );
	
	          // =============================================================
	          //                                             WATCH FOR CHANGES
	          // =============================================================
	          $this.bind(
	            "submit.validation",
	            function () {
	              return $this.triggerHandler("change.validation", {submitting: true});
	            }
	          );
	          $this.bind(
	            [
	              "keyup",
	              "focus",
	              "blur",
	              "click",
	              "keydown",
	              "keypress",
	              "change"
	            ].join(".validation ") + ".validation",
	            function (e, params) {
	
	              var value = getValue($this);
	
	              var errorsFound = [];
	
	              $controlGroup.find("input,textarea,select").each(function (i, el) {
	                var oldCount = errorsFound.length;
	                $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
	                  errorsFound.push(message);
	                });
	                if (errorsFound.length > oldCount) {
	                  $(el).attr("aria-invalid", "true");
	                } else {
	                  var original = $this.data("original-aria-invalid");
	                  $(el).attr("aria-invalid", (original !== undefined ? original : false));
	                }
	              });
	
	              $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");
	
	              errorsFound = $.unique(errorsFound.sort());
	
	              // Were there any errors?
	              if (errorsFound.length) {
	                // Better flag it up as a warning.
	                $controlGroup.removeClass("success error").addClass("warning");
	
	                // How many errors did we find?
	                if (settings.options.semanticallyStrict && errorsFound.length === 1) {
	                  // Only one? Being strict? Just output it.
	                  $helpBlock.html(errorsFound[0] +
	                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
	                } else {
	                  // Multiple? Being sloppy? Glue them together into an UL.
	                  $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" +
	                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
	                }
	              } else {
	                $controlGroup.removeClass("warning error success");
	                if (value.length > 0) {
	                  $controlGroup.addClass("success");
	                }
	                $helpBlock.html($helpBlock.data("original-contents"));
	              }
	
	              if (e.type === "blur") {
	                $controlGroup.removeClass("success");
	              }
	            }
	          );
	          $this.bind("validationLostFocus.validation", function () {
	            $controlGroup.removeClass("success");
	          });
	        });
	      },
	      destroy : function( ) {
	
	        return this.each(
	          function() {
	
	            var
	              $this = $(this),
	              $controlGroup = $this.parents(".control-group").first(),
	              $helpBlock = $controlGroup.find(".help-block").first();
	
	            // remove our events
	            $this.unbind('.validation'); // events are namespaced.
	            // reset help text
	            $helpBlock.html($helpBlock.data("original-contents"));
	            // reset classes
	            $controlGroup.attr("class", $controlGroup.data("original-classes"));
	            // reset aria
	            $this.attr("aria-invalid", $this.data("original-aria-invalid"));
	            // reset role
	            $helpBlock.attr("role", $this.data("original-role"));
							// remove all elements we created
							if (createdElements.indexOf($helpBlock[0]) > -1) {
								$helpBlock.remove();
							}
	
	          }
	        );
	
	      },
	      collectErrors : function(includeEmpty) {
	
	        var errorMessages = {};
	        this.each(function (i, el) {
	          var $el = $(el);
	          var name = $el.attr("name");
	          var errors = $el.triggerHandler("validation.validation", {includeEmpty: true});
	          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
	        });
	
	        $.each(errorMessages, function (i, el) {
	          if (el.length === 0) {
	            delete errorMessages[i];
	          }
	        });
	
	        return errorMessages;
	
	      },
	      hasErrors: function() {
	
	        var errorMessages = [];
	
	        this.each(function (i, el) {
	          errorMessages = errorMessages.concat(
	            $(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {submitting: true}) : []
	          );
	        });
	
	        return (errorMessages.length > 0);
	      },
	      override : function (newDefaults) {
	        defaults = $.extend(true, defaults, newDefaults);
	      }
	    },
			validatorTypes: {
	      callback: {
	        name: "callback",
	        init: function ($this, name) {
	          return {
	            validatorName: name,
	            callback: $this.data("validation" + name + "Callback"),
	            lastValue: $this.val(),
	            lastValid: true,
	            lastFinished: true
	          };
	        },
	        validate: function ($this, value, validator) {
	          if (validator.lastValue === value && validator.lastFinished) {
	            return !validator.lastValid;
	          }
	
	          if (validator.lastFinished === true)
	          {
	            validator.lastValue = value;
	            validator.lastValid = true;
	            validator.lastFinished = false;
	
	            var rrjqbvValidator = validator;
	            var rrjqbvThis = $this;
	            executeFunctionByName(
	              validator.callback,
	              window,
	              $this,
	              value,
	              function (data) {
	                if (rrjqbvValidator.lastValue === data.value) {
	                  rrjqbvValidator.lastValid = data.valid;
	                  if (data.message) {
	                    rrjqbvValidator.message = data.message;
	                  }
	                  rrjqbvValidator.lastFinished = true;
	                  rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
	                  // Timeout is set to avoid problems with the events being considered 'already fired'
	                  setTimeout(function () {
	                    rrjqbvThis.trigger("change.validation");
	                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
	                }
	              }
	            );
	          }
	
	          return false;
	
	        }
	      },
	      ajax: {
	        name: "ajax",
	        init: function ($this, name) {
	          return {
	            validatorName: name,
	            url: $this.data("validation" + name + "Ajax"),
	            lastValue: $this.val(),
	            lastValid: true,
	            lastFinished: true
	          };
	        },
	        validate: function ($this, value, validator) {
	          if (""+validator.lastValue === ""+value && validator.lastFinished === true) {
	            return validator.lastValid === false;
	          }
	
	          if (validator.lastFinished === true)
	          {
	            validator.lastValue = value;
	            validator.lastValid = true;
	            validator.lastFinished = false;
	            $.ajax({
	              url: validator.url,
	              data: "value=" + value + "&field=" + $this.attr("name"),
	              dataType: "json",
	              success: function (data) {
	                if (""+validator.lastValue === ""+data.value) {
	                  validator.lastValid = !!(data.valid);
	                  if (data.message) {
	                    validator.message = data.message;
	                  }
	                  validator.lastFinished = true;
	                  $this.data("validation" + validator.validatorName + "Message", validator.message);
	                  // Timeout is set to avoid problems with the events being considered 'already fired'
	                  setTimeout(function () {
	                    $this.trigger("change.validation");
	                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
	                }
	              },
	              failure: function () {
	                validator.lastValid = true;
	                validator.message = "ajax call failed";
	                validator.lastFinished = true;
	                $this.data("validation" + validator.validatorName + "Message", validator.message);
	                // Timeout is set to avoid problems with the events being considered 'already fired'
	                setTimeout(function () {
	                  $this.trigger("change.validation");
	                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
	              }
	            });
	          }
	
	          return false;
	
	        }
	      },
				regex: {
					name: "regex",
					init: function ($this, name) {
						return {regex: regexFromString($this.data("validation" + name + "Regex"))};
					},
					validate: function ($this, value, validator) {
						return (!validator.regex.test(value) && ! validator.negative)
							|| (validator.regex.test(value) && validator.negative);
					}
				},
				required: {
					name: "required",
					init: function ($this, name) {
						return {};
					},
					validate: function ($this, value, validator) {
						return !!(value.length === 0  && ! validator.negative)
							|| !!(value.length > 0 && validator.negative);
					},
	        blockSubmit: true
				},
				match: {
					name: "match",
					init: function ($this, name) {
						var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
						element.bind("validation.validation", function () {
							$this.trigger("change.validation", {submitting: true});
						});
						return {"element": element};
					},
					validate: function ($this, value, validator) {
						return (value !== validator.element.val() && ! validator.negative)
							|| (value === validator.element.val() && validator.negative);
					},
	        blockSubmit: true
				},
				max: {
					name: "max",
					init: function ($this, name) {
						return {max: $this.data("validation" + name + "Max")};
					},
					validate: function ($this, value, validator) {
						return (parseFloat(value, 10) > parseFloat(validator.max, 10) && ! validator.negative)
							|| (parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative);
					}
				},
				min: {
					name: "min",
					init: function ($this, name) {
						return {min: $this.data("validation" + name + "Min")};
					},
					validate: function ($this, value, validator) {
						return (parseFloat(value) < parseFloat(validator.min) && ! validator.negative)
							|| (parseFloat(value) >= parseFloat(validator.min) && validator.negative);
					}
				},
				maxlength: {
					name: "maxlength",
					init: function ($this, name) {
						return {maxlength: $this.data("validation" + name + "Maxlength")};
					},
					validate: function ($this, value, validator) {
						return ((value.length > validator.maxlength) && ! validator.negative)
							|| ((value.length <= validator.maxlength) && validator.negative);
					}
				},
				minlength: {
					name: "minlength",
					init: function ($this, name) {
						return {minlength: $this.data("validation" + name + "Minlength")};
					},
					validate: function ($this, value, validator) {
						return ((value.length < validator.minlength) && ! validator.negative)
							|| ((value.length >= validator.minlength) && validator.negative);
					}
				},
				maxchecked: {
					name: "maxchecked",
					init: function ($this, name) {
						var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
						elements.bind("click.validation", function () {
							$this.trigger("change.validation", {includeEmpty: true});
						});
						return {maxchecked: $this.data("validation" + name + "Maxchecked"), elements: elements};
					},
					validate: function ($this, value, validator) {
						return (validator.elements.filter(":checked").length > validator.maxchecked && ! validator.negative)
							|| (validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative);
					},
	        blockSubmit: true
				},
				minchecked: {
					name: "minchecked",
					init: function ($this, name) {
						var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
						elements.bind("click.validation", function () {
							$this.trigger("change.validation", {includeEmpty: true});
						});
						return {minchecked: $this.data("validation" + name + "Minchecked"), elements: elements};
					},
					validate: function ($this, value, validator) {
						return (validator.elements.filter(":checked").length < validator.minchecked && ! validator.negative)
							|| (validator.elements.filter(":checked").length >= validator.minchecked && validator.negative);
					},
	        blockSubmit: true
				}
			},
			builtInValidators: {
				email: {
					name: "Email",
					type: "shortcut",
					shortcut: "validemail"
				},
				validemail: {
					name: "Validemail",
					type: "regex",
					regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}",
					message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
				},
				passwordagain: {
					name: "Passwordagain",
					type: "match",
					match: "password",
					message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
				},
				positive: {
					name: "Positive",
					type: "shortcut",
					shortcut: "number,positivenumber"
				},
				negative: {
					name: "Negative",
					type: "shortcut",
					shortcut: "number,negativenumber"
				},
				number: {
					name: "Number",
					type: "regex",
					regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
					message: "Must be a number<!-- data-validator-number-message to override -->"
				},
				integer: {
					name: "Integer",
					type: "regex",
					regex: "[+-]?\\\d+",
					message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
				},
				positivenumber: {
					name: "Positivenumber",
					type: "min",
					min: 0,
					message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
				},
				negativenumber: {
					name: "Negativenumber",
					type: "max",
					max: 0,
					message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
				},
				required: {
					name: "Required",
					type: "required",
					message: "This is required<!-- data-validator-required-message to override -->"
				},
				checkone: {
					name: "Checkone",
					type: "minchecked",
					minchecked: 1,
					message: "Check at least one option<!-- data-validation-checkone-message to override -->"
				}
			}
		};
	
		var formatValidatorName = function (name) {
			return name
				.toLowerCase()
				.replace(
					/(^|\s)([a-z])/g ,
					function(m,p1,p2) {
						return p1+p2.toUpperCase();
					}
				)
			;
		};
	
		var getValue = function ($this) {
			// Extract the value we're talking about
			var value = $this.val();
			var type = $this.attr("type");
			if (type === "checkbox") {
				value = ($this.is(":checked") ? value : "");
			}
			if (type === "radio") {
				value = ($('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "");
			}
			return value;
		};
	
	  function regexFromString(inputstring) {
			return new RegExp("^" + inputstring + "$");
		}
	
	  /**
	   * Thanks to Jason Bunting via StackOverflow.com
	   *
	   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
	   * Short link: http://tinyurl.com/executeFunctionByName
	  **/
	  function executeFunctionByName(functionName, context /*, args*/) {
	    var args = Array.prototype.slice.call(arguments).splice(2);
	    var namespaces = functionName.split(".");
	    var func = namespaces.pop();
	    for(var i = 0; i < namespaces.length; i++) {
	      context = context[namespaces[i]];
	    }
	    return context[func].apply(this, args);
	  }
	
		$.fn.jqBootstrapValidation = function( method ) {
	
			if ( defaults.methods[method] ) {
				return defaults.methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} else if ( typeof method === 'object' || ! method ) {
				return defaults.methods.init.apply( this, arguments );
			} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.jqBootstrapValidation' );
				return null;
			}
	
		};
	
	  $.jqBootstrapValidation = function (options) {
	    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments);
	  };
	
	})( jQuery );


/***/ },
/* 11 */
/***/ function(module, exports) {

	/* =========================================================
	 * bootstrap-treeview.js v1.2.0
	 * =========================================================
	 * Copyright 2013 Jonathan Miles
	 * Project URL : http://www.jondmiles.com/bootstrap-treeview
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 * ========================================================= */
	
	;(function ($, window, document, undefined) {
	
		/*global jQuery, console*/
	
		'use strict';
	
		var pluginName = 'treeview';
	
		var _default = {};
	
		_default.settings = {
	
			injectStyle: true,
	
			levels: 2,
	
			expandIcon: 'glyphicon glyphicon-plus',
			collapseIcon: 'glyphicon glyphicon-minus',
			emptyIcon: 'glyphicon',
			nodeIcon: '',
			selectedIcon: '',
			checkedIcon: 'glyphicon glyphicon-check',
			uncheckedIcon: 'glyphicon glyphicon-unchecked',
	
			color: undefined, // '#000000',
			backColor: undefined, // '#FFFFFF',
			borderColor: undefined, // '#dddddd',
			onhoverColor: '#F5F5F5',
			selectedColor: '#FFFFFF',
			selectedBackColor: '#428bca',
			searchResultColor: '#D9534F',
			searchResultBackColor: undefined, //'#FFFFFF',
	
			enableLinks: false,
			highlightSelected: true,
			highlightSearchResults: true,
			showBorder: true,
			showIcon: true,
			showCheckbox: false,
			showTags: false,
			multiSelect: false,
	
			// Event handlers
			onNodeChecked: undefined,
			onNodeCollapsed: undefined,
			onNodeDisabled: undefined,
			onNodeEnabled: undefined,
			onNodeExpanded: undefined,
			onNodeSelected: undefined,
			onNodeUnchecked: undefined,
			onNodeUnselected: undefined,
			onSearchComplete: undefined,
			onSearchCleared: undefined
		};
	
		_default.options = {
			silent: false,
			ignoreChildren: false
		};
	
		_default.searchOptions = {
			ignoreCase: true,
			exactMatch: false,
			revealResults: true
		};
	
		var Tree = function (element, options) {
	
			this.$element = $(element);
			this.elementId = element.id;
			this.styleId = this.elementId + '-style';
	
			this.init(options);
	
			return {
	
				// Options (public access)
				options: this.options,
	
				// Initialize / destroy methods
				init: $.proxy(this.init, this),
				remove: $.proxy(this.remove, this),
	
				// Get methods
				getNode: $.proxy(this.getNode, this),
				getParent: $.proxy(this.getParent, this),
				getSiblings: $.proxy(this.getSiblings, this),
				getSelected: $.proxy(this.getSelected, this),
				getUnselected: $.proxy(this.getUnselected, this),
				getExpanded: $.proxy(this.getExpanded, this),
				getCollapsed: $.proxy(this.getCollapsed, this),
				getChecked: $.proxy(this.getChecked, this),
				getUnchecked: $.proxy(this.getUnchecked, this),
				getDisabled: $.proxy(this.getDisabled, this),
				getEnabled: $.proxy(this.getEnabled, this),
	
				// Select methods
				selectNode: $.proxy(this.selectNode, this),
				unselectNode: $.proxy(this.unselectNode, this),
				toggleNodeSelected: $.proxy(this.toggleNodeSelected, this),
	
				// Expand / collapse methods
				collapseAll: $.proxy(this.collapseAll, this),
				collapseNode: $.proxy(this.collapseNode, this),
				expandAll: $.proxy(this.expandAll, this),
				expandNode: $.proxy(this.expandNode, this),
				toggleNodeExpanded: $.proxy(this.toggleNodeExpanded, this),
				revealNode: $.proxy(this.revealNode, this),
	
				// Expand / collapse methods
				checkAll: $.proxy(this.checkAll, this),
				checkNode: $.proxy(this.checkNode, this),
				uncheckAll: $.proxy(this.uncheckAll, this),
				uncheckNode: $.proxy(this.uncheckNode, this),
				toggleNodeChecked: $.proxy(this.toggleNodeChecked, this),
	
				// Disable / enable methods
				disableAll: $.proxy(this.disableAll, this),
				disableNode: $.proxy(this.disableNode, this),
				enableAll: $.proxy(this.enableAll, this),
				enableNode: $.proxy(this.enableNode, this),
				toggleNodeDisabled: $.proxy(this.toggleNodeDisabled, this),
	
				// Search methods
				search: $.proxy(this.search, this),
				clearSearch: $.proxy(this.clearSearch, this)
			};
		};
	
		Tree.prototype.init = function (options) {
	
			this.tree = [];
			this.nodes = [];
	
			if (options.data) {
				if (typeof options.data === 'string') {
					options.data = $.parseJSON(options.data);
				}
				this.tree = $.extend(true, [], options.data);
				delete options.data;
			}
			this.options = $.extend({}, _default.settings, options);
	
			this.destroy();
			this.subscribeEvents();
			this.setInitialStates({ nodes: this.tree }, 0);
			this.render();
		};
	
		Tree.prototype.remove = function () {
			this.destroy();
			$.removeData(this, pluginName);
			$('#' + this.styleId).remove();
		};
	
		Tree.prototype.destroy = function () {
	
			if (!this.initialized) return;
	
			this.$wrapper.remove();
			this.$wrapper = null;
	
			// Switch off events
			this.unsubscribeEvents();
	
			// Reset this.initialized flag
			this.initialized = false;
		};
	
		Tree.prototype.unsubscribeEvents = function () {
	
			this.$element.off('click');
			this.$element.off('nodeChecked');
			this.$element.off('nodeCollapsed');
			this.$element.off('nodeDisabled');
			this.$element.off('nodeEnabled');
			this.$element.off('nodeExpanded');
			this.$element.off('nodeSelected');
			this.$element.off('nodeUnchecked');
			this.$element.off('nodeUnselected');
			this.$element.off('searchComplete');
			this.$element.off('searchCleared');
		};
	
		Tree.prototype.subscribeEvents = function () {
	
			this.unsubscribeEvents();
	
			this.$element.on('click', $.proxy(this.clickHandler, this));
	
			if (typeof (this.options.onNodeChecked) === 'function') {
				this.$element.on('nodeChecked', this.options.onNodeChecked);
			}
	
			if (typeof (this.options.onNodeCollapsed) === 'function') {
				this.$element.on('nodeCollapsed', this.options.onNodeCollapsed);
			}
	
			if (typeof (this.options.onNodeDisabled) === 'function') {
				this.$element.on('nodeDisabled', this.options.onNodeDisabled);
			}
	
			if (typeof (this.options.onNodeEnabled) === 'function') {
				this.$element.on('nodeEnabled', this.options.onNodeEnabled);
			}
	
			if (typeof (this.options.onNodeExpanded) === 'function') {
				this.$element.on('nodeExpanded', this.options.onNodeExpanded);
			}
	
			if (typeof (this.options.onNodeSelected) === 'function') {
				this.$element.on('nodeSelected', this.options.onNodeSelected);
			}
	
			if (typeof (this.options.onNodeUnchecked) === 'function') {
				this.$element.on('nodeUnchecked', this.options.onNodeUnchecked);
			}
	
			if (typeof (this.options.onNodeUnselected) === 'function') {
				this.$element.on('nodeUnselected', this.options.onNodeUnselected);
			}
	
			if (typeof (this.options.onSearchComplete) === 'function') {
				this.$element.on('searchComplete', this.options.onSearchComplete);
			}
	
			if (typeof (this.options.onSearchCleared) === 'function') {
				this.$element.on('searchCleared', this.options.onSearchCleared);
			}
		};
	
		/*
			Recurse the tree structure and ensure all nodes have
			valid initial states.  User defined states will be preserved.
			For performance we also take this opportunity to
			index nodes in a flattened structure
		*/
		Tree.prototype.setInitialStates = function (node, level) {
	
			if (!node.nodes) return;
			level += 1;
	
			var parent = node;
			var _this = this;
			$.each(node.nodes, function checkStates(index, node) {
	
				// nodeId : unique, incremental identifier
				node.nodeId = _this.nodes.length;
	
				// parentId : transversing up the tree
				node.parentId = parent.nodeId;
	
				// if not provided set selectable default value
				if (!node.hasOwnProperty('selectable')) {
					node.selectable = true;
				}
	
				// where provided we should preserve states
				node.state = node.state || {};
	
				// set checked state; unless set always false
				if (!node.state.hasOwnProperty('checked')) {
					node.state.checked = false;
				}
	
				// set enabled state; unless set always false
				if (!node.state.hasOwnProperty('disabled')) {
					node.state.disabled = false;
				}
	
				// set expanded state; if not provided based on levels
				if (!node.state.hasOwnProperty('expanded')) {
					if (!node.state.disabled &&
							(level < _this.options.levels) &&
							(node.nodes && node.nodes.length > 0)) {
						node.state.expanded = true;
					}
					else {
						node.state.expanded = false;
					}
				}
	
				// set selected state; unless set always false
				if (!node.state.hasOwnProperty('selected')) {
					node.state.selected = false;
				}
	
				// index nodes in a flattened structure for use later
				_this.nodes.push(node);
	
				// recurse child nodes and transverse the tree
				if (node.nodes) {
					_this.setInitialStates(node, level);
				}
			});
		};
	
		Tree.prototype.clickHandler = function (event) {
	
			if (!this.options.enableLinks) event.preventDefault();
	
			var target = $(event.target);
			var node = this.findNode(target);
			if (!node || node.state.disabled) return;
			
			var classList = target.attr('class') ? target.attr('class').split(' ') : [];
			if ((classList.indexOf('expand-icon') !== -1)) {
	
				this.toggleExpandedState(node, _default.options);
				this.render();
			}
			else if ((classList.indexOf('check-icon') !== -1)) {
				
				this.toggleCheckedState(node, _default.options);
				this.render();
			}
			else {
				
				if (node.selectable) {
					this.toggleSelectedState(node, _default.options);
				} else {
					this.toggleExpandedState(node, _default.options);
				}
	
				this.render();
			}
		};
	
		// Looks up the DOM for the closest parent list item to retrieve the
		// data attribute nodeid, which is used to lookup the node in the flattened structure.
		Tree.prototype.findNode = function (target) {
	
			var nodeId = target.closest('li.list-group-item').attr('data-nodeid');
			var node = this.nodes[nodeId];
	
			if (!node) {
				console.log('Error: node does not exist');
			}
			return node;
		};
	
		Tree.prototype.toggleExpandedState = function (node, options) {
			if (!node) return;
			this.setExpandedState(node, !node.state.expanded, options);
		};
	
		Tree.prototype.setExpandedState = function (node, state, options) {
	
			if (state === node.state.expanded) return;
	
			if (state && node.nodes) {
	
				// Expand a node
				node.state.expanded = true;
				if (!options.silent) {
					this.$element.trigger('nodeExpanded', $.extend(true, {}, node));
				}
			}
			else if (!state) {
	
				// Collapse a node
				node.state.expanded = false;
				if (!options.silent) {
					this.$element.trigger('nodeCollapsed', $.extend(true, {}, node));
				}
	
				// Collapse child nodes
				if (node.nodes && !options.ignoreChildren) {
					$.each(node.nodes, $.proxy(function (index, node) {
						this.setExpandedState(node, false, options);
					}, this));
				}
			}
		};
	
		Tree.prototype.toggleSelectedState = function (node, options) {
			if (!node) return;
			this.setSelectedState(node, !node.state.selected, options);
		};
	
		Tree.prototype.setSelectedState = function (node, state, options) {
	
			if (state === node.state.selected) return;
	
			if (state) {
	
				// If multiSelect false, unselect previously selected
				if (!this.options.multiSelect) {
					$.each(this.findNodes('true', 'g', 'state.selected'), $.proxy(function (index, node) {
						this.setSelectedState(node, false, options);
					}, this));
				}
	
				// Continue selecting node
				node.state.selected = true;
				if (!options.silent) {
					this.$element.trigger('nodeSelected', $.extend(true, {}, node));
				}
			}
			else {
	
				// Unselect node
				node.state.selected = false;
				if (!options.silent) {
					this.$element.trigger('nodeUnselected', $.extend(true, {}, node));
				}
			}
		};
	
		Tree.prototype.toggleCheckedState = function (node, options) {
			if (!node) return;
			this.setCheckedState(node, !node.state.checked, options);
		};
	
		Tree.prototype.setCheckedState = function (node, state, options) {
	
			if (state === node.state.checked) return;
	
			if (state) {
	
				// Check node
				node.state.checked = true;
	
				if (!options.silent) {
					this.$element.trigger('nodeChecked', $.extend(true, {}, node));
				}
			}
			else {
	
				// Uncheck node
				node.state.checked = false;
				if (!options.silent) {
					this.$element.trigger('nodeUnchecked', $.extend(true, {}, node));
				}
			}
		};
	
		Tree.prototype.setDisabledState = function (node, state, options) {
	
			if (state === node.state.disabled) return;
	
			if (state) {
	
				// Disable node
				node.state.disabled = true;
	
				// Disable all other states
				this.setExpandedState(node, false, options);
				this.setSelectedState(node, false, options);
				this.setCheckedState(node, false, options);
	
				if (!options.silent) {
					this.$element.trigger('nodeDisabled', $.extend(true, {}, node));
				}
			}
			else {
	
				// Enabled node
				node.state.disabled = false;
				if (!options.silent) {
					this.$element.trigger('nodeEnabled', $.extend(true, {}, node));
				}
			}
		};
	
		Tree.prototype.render = function () {
	
			if (!this.initialized) {
	
				// Setup first time only components
				this.$element.addClass(pluginName);
				this.$wrapper = $(this.template.list);
	
				this.injectStyle();
	
				this.initialized = true;
			}
	
			this.$element.empty().append(this.$wrapper.empty());
	
			// Build tree
			this.buildTree(this.tree, 0);
		};
	
		// Starting from the root node, and recursing down the
		// structure we build the tree one node at a time
		Tree.prototype.buildTree = function (nodes, level) {
	
			if (!nodes) return;
			level += 1;
	
			var _this = this;
			$.each(nodes, function addNodes(id, node) {
	
				var treeItem = $(_this.template.item)
					.addClass('node-' + _this.elementId)
					.addClass(node.state.checked ? 'node-checked' : '')
					.addClass(node.state.disabled ? 'node-disabled': '')
					.addClass(node.state.selected ? 'node-selected' : '')
					.addClass(node.searchResult ? 'search-result' : '') 
					.attr('data-nodeid', node.nodeId)
					.attr('style', _this.buildStyleOverride(node));
	
				// Add indent/spacer to mimic tree structure
				for (var i = 0; i < (level - 1); i++) {
					treeItem.append(_this.template.indent);
				}
	
				// Add expand, collapse or empty spacer icons
				var classList = [];
				if (node.nodes) {
					classList.push('expand-icon');
					if (node.state.expanded) {
						classList.push(_this.options.collapseIcon);
					}
					else {
						classList.push(_this.options.expandIcon);
					}
				}
				else {
					classList.push(_this.options.emptyIcon);
				}
	
				treeItem
					.append($(_this.template.icon)
						.addClass(classList.join(' '))
					);
	
	
				// Add node icon
				if (_this.options.showIcon) {
					
					var classList = ['node-icon'];
	
					classList.push(node.icon || _this.options.nodeIcon);
					if (node.state.selected) {
						classList.pop();
						classList.push(node.selectedIcon || _this.options.selectedIcon || 
										node.icon || _this.options.nodeIcon);
					}
	
					treeItem
						.append($(_this.template.icon)
							.addClass(classList.join(' '))
						);
				}
	
				// Add check / unchecked icon
				if (_this.options.showCheckbox) {
	
					var classList = ['check-icon'];
					if (node.state.checked) {
						classList.push(_this.options.checkedIcon); 
					}
					else {
						classList.push(_this.options.uncheckedIcon);
					}
	
					treeItem
						.append($(_this.template.icon)
							.addClass(classList.join(' '))
						);
				}
	
				// Add text
				if (_this.options.enableLinks) {
					// Add hyperlink
					treeItem
						.append($(_this.template.link)
							.attr('href', node.href)
							.append(node.text)
						);
				}
				else {
					// otherwise just text
					treeItem
						.append(node.text);
				}
	
				// Add tags as badges
				if (_this.options.showTags && node.tags) {
					$.each(node.tags, function addTag(id, tag) {
						treeItem
							.append($(_this.template.badge)
								.append(tag)
							);
					});
				}
	
				// Add item to the tree
				_this.$wrapper.append(treeItem);
	
				// Recursively add child ndoes
				if (node.nodes && node.state.expanded && !node.state.disabled) {
					return _this.buildTree(node.nodes, level);
				}
			});
		};
	
		// Define any node level style override for
		// 1. selectedNode
		// 2. node|data assigned color overrides
		Tree.prototype.buildStyleOverride = function (node) {
	
			if (node.state.disabled) return '';
	
			var color = node.color;
			var backColor = node.backColor;
	
			if (this.options.highlightSelected && node.state.selected) {
				if (this.options.selectedColor) {
					color = this.options.selectedColor;
				}
				if (this.options.selectedBackColor) {
					backColor = this.options.selectedBackColor;
				}
			}
	
			if (this.options.highlightSearchResults && node.searchResult && !node.state.disabled) {
				if (this.options.searchResultColor) {
					color = this.options.searchResultColor;
				}
				if (this.options.searchResultBackColor) {
					backColor = this.options.searchResultBackColor;
				}
			}
	
			return 'color:' + color +
				';background-color:' + backColor + ';';
		};
	
		// Add inline style into head
		Tree.prototype.injectStyle = function () {
	
			if (this.options.injectStyle && !document.getElementById(this.styleId)) {
				$('<style type="text/css" id="' + this.styleId + '"> ' + this.buildStyle() + ' </style>').appendTo('head');
			}
		};
	
		// Construct trees style based on user options
		Tree.prototype.buildStyle = function () {
	
			var style = '.node-' + this.elementId + '{';
	
			if (this.options.color) {
				style += 'color:' + this.options.color + ';';
			}
	
			if (this.options.backColor) {
				style += 'background-color:' + this.options.backColor + ';';
			}
	
			if (!this.options.showBorder) {
				style += 'border:none;';
			}
			else if (this.options.borderColor) {
				style += 'border:1px solid ' + this.options.borderColor + ';';
			}
			style += '}';
	
			if (this.options.onhoverColor) {
				style += '.node-' + this.elementId + ':not(.node-disabled):hover{' +
					'background-color:' + this.options.onhoverColor + ';' +
				'}';
			}
	
			return this.css + style;
		};
	
		Tree.prototype.template = {
			list: '<ul class="list-group"></ul>',
			item: '<li class="list-group-item"></li>',
			indent: '<span class="indent"></span>',
			icon: '<span class="icon"></span>',
			link: '<a href="#" style="color:inherit;"></a>',
			badge: '<span class="badge"></span>'
		};
	
		Tree.prototype.css = '.treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}'
	
	
		/**
			Returns a single node object that matches the given node id.
			@param {Number} nodeId - A node's unique identifier
			@return {Object} node - Matching node
		*/
		Tree.prototype.getNode = function (nodeId) {
			return this.nodes[nodeId];
		};
	
		/**
			Returns the parent node of a given node, if valid otherwise returns undefined.
			@param {Object|Number} identifier - A valid node or node id
			@returns {Object} node - The parent node
		*/
		Tree.prototype.getParent = function (identifier) {
			var node = this.identifyNode(identifier);
			return this.nodes[node.parentId];
		};
	
		/**
			Returns an array of sibling nodes for a given node, if valid otherwise returns undefined.
			@param {Object|Number} identifier - A valid node or node id
			@returns {Array} nodes - Sibling nodes
		*/
		Tree.prototype.getSiblings = function (identifier) {
			var node = this.identifyNode(identifier);
			var parent = this.getParent(node);
			var nodes = parent ? parent.nodes : this.tree;
			return nodes.filter(function (obj) {
					return obj.nodeId !== node.nodeId;
				});
		};
	
		/**
			Returns an array of selected nodes.
			@returns {Array} nodes - Selected nodes
		*/
		Tree.prototype.getSelected = function () {
			return this.findNodes('true', 'g', 'state.selected');
		};
	
		/**
			Returns an array of unselected nodes.
			@returns {Array} nodes - Unselected nodes
		*/
		Tree.prototype.getUnselected = function () {
			return this.findNodes('false', 'g', 'state.selected');
		};
	
		/**
			Returns an array of expanded nodes.
			@returns {Array} nodes - Expanded nodes
		*/
		Tree.prototype.getExpanded = function () {
			return this.findNodes('true', 'g', 'state.expanded');
		};
	
		/**
			Returns an array of collapsed nodes.
			@returns {Array} nodes - Collapsed nodes
		*/
		Tree.prototype.getCollapsed = function () {
			return this.findNodes('false', 'g', 'state.expanded');
		};
	
		/**
			Returns an array of checked nodes.
			@returns {Array} nodes - Checked nodes
		*/
		Tree.prototype.getChecked = function () {
			return this.findNodes('true', 'g', 'state.checked');
		};
	
		/**
			Returns an array of unchecked nodes.
			@returns {Array} nodes - Unchecked nodes
		*/
		Tree.prototype.getUnchecked = function () {
			return this.findNodes('false', 'g', 'state.checked');
		};
	
		/**
			Returns an array of disabled nodes.
			@returns {Array} nodes - Disabled nodes
		*/
		Tree.prototype.getDisabled = function () {
			return this.findNodes('true', 'g', 'state.disabled');
		};
	
		/**
			Returns an array of enabled nodes.
			@returns {Array} nodes - Enabled nodes
		*/
		Tree.prototype.getEnabled = function () {
			return this.findNodes('false', 'g', 'state.disabled');
		};
	
	
		/**
			Set a node state to selected
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.selectNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setSelectedState(node, true, options);
			}, this));
	
			this.render();
		};
	
		/**
			Set a node state to unselected
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.unselectNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setSelectedState(node, false, options);
			}, this));
	
			this.render();
		};
	
		/**
			Toggles a node selected state; selecting if unselected, unselecting if selected.
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.toggleNodeSelected = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.toggleSelectedState(node, options);
			}, this));
	
			this.render();
		};
	
	
		/**
			Collapse all tree nodes
			@param {optional Object} options
		*/
		Tree.prototype.collapseAll = function (options) {
			var identifiers = this.findNodes('true', 'g', 'state.expanded');
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setExpandedState(node, false, options);
			}, this));
	
			this.render();
		};
	
		/**
			Collapse a given tree node
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.collapseNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setExpandedState(node, false, options);
			}, this));
	
			this.render();
		};
	
		/**
			Expand all tree nodes
			@param {optional Object} options
		*/
		Tree.prototype.expandAll = function (options) {
			options = $.extend({}, _default.options, options);
	
			if (options && options.levels) {
				this.expandLevels(this.tree, options.levels, options);
			}
			else {
				var identifiers = this.findNodes('false', 'g', 'state.expanded');
				this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
					this.setExpandedState(node, true, options);
				}, this));
			}
	
			this.render();
		};
	
		/**
			Expand a given tree node
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.expandNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setExpandedState(node, true, options);
				if (node.nodes && (options && options.levels)) {
					this.expandLevels(node.nodes, options.levels-1, options);
				}
			}, this));
	
			this.render();
		};
	
		Tree.prototype.expandLevels = function (nodes, level, options) {
			options = $.extend({}, _default.options, options);
	
			$.each(nodes, $.proxy(function (index, node) {
				this.setExpandedState(node, (level > 0) ? true : false, options);
				if (node.nodes) {
					this.expandLevels(node.nodes, level-1, options);
				}
			}, this));
		};
	
		/**
			Reveals a given tree node, expanding the tree from node to root.
			@param {Object|Number|Array} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.revealNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				var parentNode = this.getParent(node);
				while (parentNode) {
					this.setExpandedState(parentNode, true, options);
					parentNode = this.getParent(parentNode);
				};
			}, this));
	
			this.render();
		};
	
		/**
			Toggles a nodes expanded state; collapsing if expanded, expanding if collapsed.
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.toggleNodeExpanded = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.toggleExpandedState(node, options);
			}, this));
			
			this.render();
		};
	
	
		/**
			Check all tree nodes
			@param {optional Object} options
		*/
		Tree.prototype.checkAll = function (options) {
			var identifiers = this.findNodes('false', 'g', 'state.checked');
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setCheckedState(node, true, options);
			}, this));
	
			this.render();
		};
	
		/**
			Check a given tree node
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.checkNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setCheckedState(node, true, options);
			}, this));
	
			this.render();
		};
	
		/**
			Uncheck all tree nodes
			@param {optional Object} options
		*/
		Tree.prototype.uncheckAll = function (options) {
			var identifiers = this.findNodes('true', 'g', 'state.checked');
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setCheckedState(node, false, options);
			}, this));
	
			this.render();
		};
	
		/**
			Uncheck a given tree node
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.uncheckNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setCheckedState(node, false, options);
			}, this));
	
			this.render();
		};
	
		/**
			Toggles a nodes checked state; checking if unchecked, unchecking if checked.
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.toggleNodeChecked = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.toggleCheckedState(node, options);
			}, this));
	
			this.render();
		};
	
	
		/**
			Disable all tree nodes
			@param {optional Object} options
		*/
		Tree.prototype.disableAll = function (options) {
			var identifiers = this.findNodes('false', 'g', 'state.disabled');
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setDisabledState(node, true, options);
			}, this));
	
			this.render();
		};
	
		/**
			Disable a given tree node
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.disableNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setDisabledState(node, true, options);
			}, this));
	
			this.render();
		};
	
		/**
			Enable all tree nodes
			@param {optional Object} options
		*/
		Tree.prototype.enableAll = function (options) {
			var identifiers = this.findNodes('true', 'g', 'state.disabled');
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setDisabledState(node, false, options);
			}, this));
	
			this.render();
		};
	
		/**
			Enable a given tree node
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.enableNode = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setDisabledState(node, false, options);
			}, this));
	
			this.render();
		};
	
		/**
			Toggles a nodes disabled state; disabling is enabled, enabling if disabled.
			@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
			@param {optional Object} options
		*/
		Tree.prototype.toggleNodeDisabled = function (identifiers, options) {
			this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
				this.setDisabledState(node, !node.state.disabled, options);
			}, this));
	
			this.render();
		};
	
	
		/**
			Common code for processing multiple identifiers
		*/
		Tree.prototype.forEachIdentifier = function (identifiers, options, callback) {
	
			options = $.extend({}, _default.options, options);
	
			if (!(identifiers instanceof Array)) {
				identifiers = [identifiers];
			}
	
			$.each(identifiers, $.proxy(function (index, identifier) {
				callback(this.identifyNode(identifier), options);
			}, this));	
		};
	
		/*
			Identifies a node from either a node id or object
		*/
		Tree.prototype.identifyNode = function (identifier) {
			return ((typeof identifier) === 'number') ?
							this.nodes[identifier] :
							identifier;
		};
	
		/**
			Searches the tree for nodes (text) that match given criteria
			@param {String} pattern - A given string to match against
			@param {optional Object} options - Search criteria options
			@return {Array} nodes - Matching nodes
		*/
		Tree.prototype.search = function (pattern, options) {
			options = $.extend({}, _default.searchOptions, options);
	
			this.clearSearch({ render: false });
	
			var results = [];
			if (pattern && pattern.length > 0) {
	
				if (options.exactMatch) {
					pattern = '^' + pattern + '$';
				}
	
				var modifier = 'g';
				if (options.ignoreCase) {
					modifier += 'i';
				}
	
				results = this.findNodes(pattern, modifier);
	
				// Add searchResult property to all matching nodes
				// This will be used to apply custom styles
				// and when identifying result to be cleared
				$.each(results, function (index, node) {
					node.searchResult = true;
				})
			}
	
			// If revealResults, then render is triggered from revealNode
			// otherwise we just call render.
			if (options.revealResults) {
				this.revealNode(results);
			}
			else {
				this.render();
			}
	
			this.$element.trigger('searchComplete', $.extend(true, {}, results));
	
			return results;
		};
	
		/**
			Clears previous search results
		*/
		Tree.prototype.clearSearch = function (options) {
	
			options = $.extend({}, { render: true }, options);
	
			var results = $.each(this.findNodes('true', 'g', 'searchResult'), function (index, node) {
				node.searchResult = false;
			});
	
			if (options.render) {
				this.render();	
			}
			
			this.$element.trigger('searchCleared', $.extend(true, {}, results));
		};
	
		/**
			Find nodes that match a given criteria
			@param {String} pattern - A given string to match against
			@param {optional String} modifier - Valid RegEx modifiers
			@param {optional String} attribute - Attribute to compare pattern against
			@return {Array} nodes - Nodes that match your criteria
		*/
		Tree.prototype.findNodes = function (pattern, modifier, attribute) {
	
			modifier = modifier || 'g';
			attribute = attribute || 'text';
	
			var _this = this;
			return $.grep(this.nodes, function (node) {
				var val = _this.getNodeValue(node, attribute);
				if (typeof val === 'string') {
					return val.match(new RegExp(pattern, modifier));
				}
			});
		};
	
		/**
			Recursive find for retrieving nested attributes values
			All values are return as strings, unless invalid
			@param {Object} obj - Typically a node, could be any object
			@param {String} attr - Identifies an object property using dot notation
			@return {String} value - Matching attributes string representation
		*/
		Tree.prototype.getNodeValue = function (obj, attr) {
			var index = attr.indexOf('.');
			if (index > 0) {
				var _obj = obj[attr.substring(0, index)];
				var _attr = attr.substring(index + 1, attr.length);
				return this.getNodeValue(_obj, _attr);
			}
			else {
				if (obj.hasOwnProperty(attr)) {
					return obj[attr].toString();
				}
				else {
					return undefined;
				}
			}
		};
	
		var logError = function (message) {
			if (window.console) {
				window.console.error(message);
			}
		};
	
		// Prevent against multiple instantiations,
		// handle updates and method calls
		$.fn[pluginName] = function (options, args) {
	
			var result;
	
			this.each(function () {
				var _this = $.data(this, pluginName);
				if (typeof options === 'string') {
					if (!_this) {
						logError('Not initialized, can not call method : ' + options);
					}
					else if (!$.isFunction(_this[options]) || options.charAt(0) === '_') {
						logError('No such method : ' + options);
					}
					else {
						if (!(args instanceof Array)) {
							args = [ args ];
						}
						result = _this[options].apply(_this, args);
					}
				}
				else if (typeof options === 'boolean') {
					result = _this;
				}
				else {
					$.data(this, pluginName, new Tree(this, $.extend(true, {}, options)));
				}
			});
	
			return result || this;
		};
	
	})(jQuery, window, document);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var create = function create(options) {
	  var $el = options.$el;
	
	  $el.html(Handlebars.templates['site-header'](options));
	
	  $el.find('#change-password').click(function () {
	    WUI.ajax({
	      url: '/upp/web/v1/sso/getResetPassword'
	    }).done(function (resp) {
	      window.location.href = resp.resetPasswordUrl;
	    });
	  });
	  $el.find('#logout').click(function () {
	    WUI.ajax({
	      url: '/upp/web/v1/sso/logout'
	    }).done(function (resp) {
	      window.location.href = resp.loginUrl;
	    });
	  });
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(2);  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
	templates['confirm-dialog'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "          <div class=\"col-sm-4 form-group\" >\n              <div class=\"col-sm-4 form-group\" >\n                  <span>"
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</span>\n              </div>\n              <div class=\"col-sm-8 form-group\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.number : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "              </div>\n          </div>\n";
	},"2":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.edit : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "");
	},"3":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "                      <input\n                              type=\"text\"\n                              maxlength=\"11\"\n                              class=\"form-control \"\n                              style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                              title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                              name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                      value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                              placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n                      </input>\n";
	},"5":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "                      <input\n                              type=\"text\"\n                              class=\"form-control \"\n                              readOnly\n                              style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                              title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                              name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                      value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                              placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n                      </input>\n";
	},"7":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "                    <input\n                            type=\"number\"\n                            maxlength=\"11\"\n                            class=\"form-control \"\n                            style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                            title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                            name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                    value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                            placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n                    </input>\n";
	},"9":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "                    <select\n                            name="
	    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n                                    class=\"form-control\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "                    </select>\n";
	},"10":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "");
	},"11":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                            <option value="
	    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
	    + " selected=\"selected\">"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</option>\n";
	},"13":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                            <option value="
	    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</option>\n";
	},"15":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "      <div class=\"row col-sm-12  form-group\">\n          <div class=\"col-sm-2 form-group\" >\n              <span>"
	    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.label : stack1), depth0))
	    + "</span>\n          </div>\n          <div class=\"col-sm-10 form-group\" id=\"reviewComment\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.textInfoShow : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.program(18, data, 0),"data":data})) != null ? stack1 : "")
	    + "          </div>\n\n      </div>\n";
	},"16":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=this.escapeExpression;
	
	  return "                <textarea class=\"form-control\"  readonly=\"readonly\" name=\""
	    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.name : stack1), depth0))
	    + "\">"
	    + alias1(((helper = (helper = helpers.textInfoShow || (depth0 != null ? depth0.textInfoShow : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"textInfoShow","hash":{},"data":data}) : helper)))
	    + "</textarea>\n";
	},"18":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "                <textarea class=\"form-control\"  name=\""
	    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.name : stack1), depth0))
	    + "\"></textarea>\n";
	},"20":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cancelButton : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.program(23, data, 0),"data":data})) != null ? stack1 : "");
	},"21":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "        <button id=\"cancelButton\"  class=\"btn btn-default cancel-button\">"
	    + this.escapeExpression(((helper = (helper = helpers.confirmButton || (depth0 != null ? depth0.confirmButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"confirmButton","hash":{},"data":data}) : helper)))
	    + "</button>\n";
	},"23":function(depth0,helpers,partials,data) {
	    return "        <button id=\"cancelButton\"  class=\"btn btn-default cancel-button\">取消</button>\n";
	},"25":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cancelButton : depth0),{"name":"if","hash":{},"fn":this.program(26, data, 0),"inverse":this.program(28, data, 0),"data":data})) != null ? stack1 : "");
	},"26":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "        <button id=\"cancelButton\" data-dismiss=\"modal\"  class=\"btn btn-default cancel-button\">"
	    + this.escapeExpression(((helper = (helper = helpers.confirmButton || (depth0 != null ? depth0.confirmButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"confirmButton","hash":{},"data":data}) : helper)))
	    + "</button>\n";
	},"28":function(depth0,helpers,partials,data) {
	    return "        <button id=\"cancelButton\" data-dismiss=\"modal\"  class=\"btn btn-default cancel-button\">取消</button>\n";
	},"30":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "      <button id=\"modal\"  class=\"btn btn-primary save-button\">"
	    + this.escapeExpression(((helper = (helper = helpers.confirmButton || (depth0 != null ? depth0.confirmButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"confirmButton","hash":{},"data":data}) : helper)))
	    + "</button>\n";
	},"32":function(depth0,helpers,partials,data) {
	    return "      <button id=\"modal\"  class=\"btn btn-primary save-button\">确定</button>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<form class=\"box-header\">\n    <div class=\"row\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </div>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.textInfo : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</form>\n<div style=\"text-align: right; margin-right: 20px;\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.onCancel : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0),"inverse":this.program(25, data, 0),"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.confirmButton : depth0),{"name":"if","hash":{},"fn":this.program(30, data, 0),"inverse":this.program(32, data, 0),"data":data})) != null ? stack1 : "")
	    + "</div>\n";
	},"useData":true});
	templates['content-header'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "");
	},"2":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "      <li><i class=\"fa fa-angle-right\" /></li>\n      <li><a href=\""
	    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
	    + "\">"
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</a></li>\n";
	},"4":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "      <li><i class=\"fa fa-angle-right\" /></li>\n      <li>"
	    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</li>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "<ul class=\"wui-breadcrumb\">\n  <li><a href=\"home.html\">"
	    + this.escapeExpression(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"home","hash":{},"data":data}) : helper)))
	    + "</a></li>\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.paths : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</ul>\n";
	},"useData":true});
	templates['data-dialog'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing;
	
	  return "    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group\" >\n      <div class=\"col-sm-3 form-group\" style=\"padding:7px 0;\">\n              <span>"
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</span>\n      </div>\n      <div class=\"col-sm-9 form-group\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.readOnly : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
	    + "      </div>\n    </div>\n\n"
	    + ((stack1 = (helpers.dividedIndex || (depth0 && depth0.dividedIndex) || alias1).call(depth0,(data && data.index),2,{"name":"dividedIndex","hash":{},"fn":this.program(26, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = (helpers.dividedIndex || (depth0 && depth0.dividedIndex) || alias1).call(depth0,(data && data.index),3,{"name":"dividedIndex","hash":{},"fn":this.program(28, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
	},"2":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "          <input\n                  type=\"text\"\n                  class=\"form-control \"\n                  readOnly\n                  style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                  title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                  name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                          value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                  placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n          </input>\n";
	},"4":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.number : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.email : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
	},"5":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "");
	},"6":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                        <div class=\"control-group\">\n                            <div class=\"controls\">\n                                <input\n                                        type=\"text\"\n                                        maxlength=\""
	    + alias3(((helper = (helper = helpers.maxLength || (depth0 != null ? depth0.maxLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxLength","hash":{},"data":data}) : helper)))
	    + "\"\n                                                class=\"form-control\"\n                                        style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                                        title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                                        required=\"required\"\n                                        name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                                value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                                        placeholder="
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "\n                                        data-validation-required-message='"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "字段不能为空'\n                                >\n                                </input>\n                                <p id=\""
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "help\" class=\"help-block\" style=\"color: red\"></p>\n                            </div>\n                        </div>\n";
	},"8":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                        <div class=\"control-group\">\n                            <div class=\"controls\">\n                                <input\n                                        type=\"text\"\n                                        maxlength=\""
	    + alias3(((helper = (helper = helpers.maxLength || (depth0 != null ? depth0.maxLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxLength","hash":{},"data":data}) : helper)))
	    + "\"\n                                                class=\"form-control\"\n                                        style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                                        title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                                        name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                                value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                                        placeholder="
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "\n                                >\n                                </input>\n                                <p id=\""
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "help\" class=\"help-block\" style=\"color: red\"></p>\n                            </div>\n                        </div>\n";
	},"10":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "");
	},"11":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                    <div class=\"control-group\">\n                        <div class=\"controls\">\n                            <input title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                                   maxlength=\""
	    + alias3(((helper = (helper = helpers.maxLength || (depth0 != null ? depth0.maxLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxLength","hash":{},"data":data}) : helper)))
	    + "\"\n                                   class=\"form-control \"\n                                   name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                   value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                                   placeholder="
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "\n                                   required=\"required\"\n                                   type=\"number\"\n                                   data-validation-Maxlength-message=\"请输入数字长度不能大于"
	    + alias3(((helper = (helper = helpers.maxLength || (depth0 != null ? depth0.maxLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxLength","hash":{},"data":data}) : helper)))
	    + "\"\n                                   data-validation-required-message='"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "字段不能为空'\n                                   id=\"number\" >\n                            <p id=\""
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "help\" class=\"help-block\" style=\"color: red\"></p>\n                        </div>\n                    </div>\n";
	},"13":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                    <div class=\"control-group\">\n                        <div class=\"controls\">\n                            <input title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                                   maxlength=\""
	    + alias3(((helper = (helper = helpers.maxLength || (depth0 != null ? depth0.maxLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxLength","hash":{},"data":data}) : helper)))
	    + "\"\n                                   class=\"form-control \"\n                                   name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                           value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                                   placeholder="
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "\n                                           type=\"number\"  data-validation-Maxlength-message=\n                                           \"请输入数字长度不能大于"
	    + alias3(((helper = (helper = helpers.maxLength || (depth0 != null ? depth0.maxLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxLength","hash":{},"data":data}) : helper)))
	    + "\" id=\"number\" >\n                            <p id=\""
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "help\" class=\"help-block\" style=\"color: red\"></p>\n                        </div>\n                    </div>\n\n";
	},"15":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.program(18, data, 0),"data":data})) != null ? stack1 : "");
	},"16":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "                <div class=\"control-group\">\n                    <div class=\"controls\">\n                        <input title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                               class=\"form-control \"\n                               name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                       value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                               placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "\n                                       type=\"email\"  data-validation-required-message=\n                                \"请填写邮箱地址\" data-validation-validemail-message=\"请输入正确的邮箱格式\" id=\"email\" required=\"\" >\n                        <p id=\""
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "help\" class=\"help-block\" style=\"color: red\"></p>\n                    </div>\n                </div>\n";
	},"18":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "                      <div class=\"control-group\">\n                          <div class=\"controls\">\n                              <input title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                                     class=\"form-control \"\n                                     name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                             value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                                     placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "\n                                             type=\"email\" data-validation-validemail-message=\"请输入正确的邮箱格式\" id=\"email\">\n                              <p id=\""
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "help\" class=\"help-block\" style=\"color: red\"></p>\n                          </div>\n                      </div>\n";
	},"20":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "                <select\n                        name="
	    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n                                class=\"form-control\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "                </select>\n";
	},"21":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(22, data, 0),"inverse":this.program(24, data, 0),"data":data})) != null ? stack1 : "");
	},"22":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                      <option value="
	    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
	    + " selected=\"selected\">"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</option>\n";
	},"24":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                      <option value="
	    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</option>\n";
	},"26":function(depth0,helpers,partials,data) {
	    return "      <div class=\"clearfix visible-sm-block\"></div>\n";
	},"28":function(depth0,helpers,partials,data) {
	    return "      <div class=\"clearfix visible-lg-block visible-md-block\"></div>\n";
	},"30":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "  <div class=\"row col-sm-12  form-group\">\n      <div class=\"col-sm-2 form-group\" >\n          <span>"
	    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.label : stack1), depth0))
	    + "</span>\n      </div>\n      <div class=\"col-sm-10 form-group\" id=\"reviewComment\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.textInfoShow : depth0),{"name":"if","hash":{},"fn":this.program(31, data, 0),"inverse":this.program(33, data, 0),"data":data})) != null ? stack1 : "")
	    + "      </div>\n\n  </div>\n";
	},"31":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=this.escapeExpression;
	
	  return "              <textarea class=\"form-control\"  readonly=\"readonly\" name=\""
	    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.name : stack1), depth0))
	    + "\">"
	    + alias1(((helper = (helper = helpers.textInfoShow || (depth0 != null ? depth0.textInfoShow : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"textInfoShow","hash":{},"data":data}) : helper)))
	    + "</textarea>\n";
	},"33":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "              <textarea class=\"form-control\"  name=\""
	    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.name : stack1), depth0))
	    + "\"></textarea>\n";
	},"35":function(depth0,helpers,partials,data) {
	    return "      <div class=\"row\">\n\n      </div>\n";
	},"37":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "      <div style=\"text-align: right; margin-right: 20px;\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.onCancel : depth0),{"name":"if","hash":{},"fn":this.program(38, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.onConfirm : depth0),{"name":"if","hash":{},"fn":this.program(43, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "      </div>\n";
	},"38":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cancelButton : depth0),{"name":"if","hash":{},"fn":this.program(39, data, 0),"inverse":this.program(41, data, 0),"data":data})) != null ? stack1 : "");
	},"39":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "              <button id=\"cancelButton\"  class=\"btn btn-default cancel-button\">"
	    + this.escapeExpression(((helper = (helper = helpers.confirmButton || (depth0 != null ? depth0.confirmButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"confirmButton","hash":{},"data":data}) : helper)))
	    + "</button>\n";
	},"41":function(depth0,helpers,partials,data) {
	    return "              <button id=\"cancelButton\"  class=\"btn btn-default cancel-button\">取消</button>\n";
	},"43":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.confirmButton : depth0),{"name":"if","hash":{},"fn":this.program(44, data, 0),"inverse":this.program(46, data, 0),"data":data})) != null ? stack1 : "");
	},"44":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "              <button id=\"modal\" type=\"submit\"  class=\"btn btn-primary save-button\">"
	    + this.escapeExpression(((helper = (helper = helpers.confirmButton || (depth0 != null ? depth0.confirmButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"confirmButton","hash":{},"data":data}) : helper)))
	    + "</button>\n";
	},"46":function(depth0,helpers,partials,data) {
	    return "              <button id=\"modal\" type=\"submit\" class=\"btn btn-primary save-button\">确定</button>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<form class=\"box-header\" novalidate>\n  <div class=\"row\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </div>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.textInfo : depth0),{"name":"if","hash":{},"fn":this.program(30, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n\n\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.buttonHide : depth0),{"name":"if","hash":{},"fn":this.program(35, data, 0),"inverse":this.program(37, data, 0),"data":data})) != null ? stack1 : "")
	    + "\n</form>\n";
	},"useData":true});
	templates['data-filter'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label>"
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</label>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.number : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </div>\n  </div>\n";
	},"2":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "        <input\n          type=\"text\"\n          class=\"form-control\"\n          name="
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n          placeholder="
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n        </input>\n";
	},"4":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "          <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  name="
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n                          placeholder="
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n          </input>\n";
	},"6":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "        <select\n          name="
	    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n          class=\"form-control\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "        </select>\n";
	},"7":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "          <option value="
	    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</option>\n";
	},"9":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "  <div class=\"col-sm-1\">\n    <input\n      type=\"button\"\n      style=\"margin-top: 24px;\"\n      class=\"btn btn-info filter\"\n      value="
	    + this.escapeExpression(((helper = (helper = helpers.queryButton || (depth0 != null ? depth0.queryButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"queryButton","hash":{},"data":data}) : helper)))
	    + ">\n    </input>\n  </div>\n";
	},"11":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "    <div class=\"col-sm-1\">\n        <input\n                type=\"button\"\n                style=\"margin-top: 24px;\"\n                class=\"btn btn-primary add\"\n                value="
	    + this.escapeExpression(((helper = (helper = helpers.addButton || (depth0 != null ? depth0.addButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"addButton","hash":{},"data":data}) : helper)))
	    + ">\n        </input>\n    </div>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<form class=\"box-header with-border\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.queryButton : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.addButton : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</form>\n";
	},"useData":true});
	templates['data-paginator'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1, alias1=helpers.helperMissing;
	
	  return "        <li class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.currentPage : depth0),1,{"name":"equal","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role=\"first\">\n            <i class=\"fa fa-fast-backward\" />\n          </a>\n        </li>\n        <li class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.currentPage : depth0),1,{"name":"equal","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role=\"prev\">\n            <i class=\"fa fa-backward\" />\n          </a>\n        </li>\n";
	},"2":function(depth0,helpers,partials,data) {
	    return "disabled";
	},"4":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=this.lambda, alias2=this.escapeExpression;
	
	  return "        <li class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].currentPage : depths[1]),depth0,{"name":"equal","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role="
	    + alias2(alias1(depth0, depth0))
	    + ">"
	    + alias2(alias1(depth0, depth0))
	    + "</a>\n        </li>\n";
	},"5":function(depth0,helpers,partials,data) {
	    return "active";
	},"7":function(depth0,helpers,partials,data) {
	    var stack1, alias1=helpers.helperMissing;
	
	  return "        <li class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.currentPage : depth0),(depth0 != null ? depth0.totalPage : depth0),{"name":"equal","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role=\"next\">\n            <i class=\"fa fa-forward\" />\n          </a>\n        </li>\n        <li\n          class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.currentPage : depth0),(depth0 != null ? depth0.totalPage : depth0),{"name":"equal","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role=\"last\">\n            <i class=\"fa fa-fast-forward\" />\n          </a>\n        </li>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "<div class=\"box-footer\">\n  <div class=\"row\" style=\"line-height: 35px\">\n    <div class=\"col-sm-5\">\n      当前显示 "
	    + alias3(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start","hash":{},"data":data}) : helper)))
	    + " 到 "
	    + alias3(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"end","hash":{},"data":data}) : helper)))
	    + " 条，共 "
	    + alias3(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"total","hash":{},"data":data}) : helper)))
	    + " 条\n    </div>\n    <div class=\"col-sm-7\">\n      <ul class=\"pagination pagination-sm pull-right\" style=\"margin: 0\">\n"
	    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.totalPage : depth0),1,{"name":"compare","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.paginators : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.totalPage : depth0),1,{"name":"compare","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "      </ul>\n    </div>\n  </div>\n</div>\n";
	},"useData":true,"useDepths":true});
	templates['data-table'] = template({"1":function(depth0,helpers,partials,data) {
	    return "      <th>选择</th>\n";
	},"3":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "        <th style=\"width: "
	    + alias3(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"width","hash":{},"data":data}) : helper)))
	    + "\">"
	    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
	    + "</th>\n";
	},"5":function(depth0,helpers,partials,data) {
	    return "        <th>操作</th>\n";
	},"7":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return "      <tr>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].groups : depths[1]),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].operations : depths[1]),{"name":"if","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "      </tr>\n";
	},"8":function(depth0,helpers,partials,data) {
	    return "          <td>\n                <input name=\"checkBox\" type='checkbox' />\n          </td>\n";
	},"10":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "                <td>"
	    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
	    + "</td>\n";
	},"12":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return "            <td>\n"
	    + ((stack1 = helpers.each.call(depth0,(depths[2] != null ? depths[2].operations : depths[2]),{"name":"each","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "            </td>\n";
	},"13":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dialog : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.program(16, data, 0),"data":data})) != null ? stack1 : "");
	},"14":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "              <a href=\"#\" data-toggle=\"modal\"\n                 data-target=\"#myModal\" class="
	    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"className","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</a>\n";
	},"16":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "              <a href=\"#\" class="
	    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"className","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</a>\n";
	},"18":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "        <div class='row'>\n          <label style='float: left; margin-left:30px; font-weight:normal'>\n              <input type='checkbox' id=\"checkAll\" style=\"margin-right: 5px\"/>\n              全选\n          </label>\n            <label style='float: left; margin-left:30px; font-weight:normal'>\n                <input type='checkbox' id=\"checkReverse\" style=\"margin-right: 5px\"/>\n                反选\n            </label>\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n    </div>\n";
	},"19":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "        <div class='col-sm-1 text-center'>\n            <button class='"
	    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"className","hash":{},"data":data}) : helper)))
	    + "' id='"
	    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
	    + "' disabled>\n                "
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n            </button>\n        </div>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return "<div class=\"box-body\">\n    <div class='row'>\n  <table class=\"table table-bordered table-hover text-center table-responsive\"  style=\"margin:10px;width:98%;minWidth:800px;\">\n    <thead>\n      <tr>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.titles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.operations : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "      </tr>\n    </thead>\n    <tbody>\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </tbody>\n  </table>\n      </div>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</div>\n";
	},"useData":true,"useDepths":true});
	templates['modal-dialog'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "                      "
	    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n";
	},"3":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "                  <span>"
	    + ((stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</span>\n";
	},"5":function(depth0,helpers,partials,data) {
	    return "                  <button id=\"cancelButton\" class=\"btn btn-default cancel-button\">取消</button>\n";
	},"7":function(depth0,helpers,partials,data) {
	    return "                  <button id=\"cancelButton\" data-dismiss=\"modal\"  class=\"btn btn-default cancel-button\">取消</button>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" >\n    <div class='modal-dialog' style=\"width: 80%\">\n        <div class='modal-content'>\n            <div class='modal-header'>\n                <button type='button' class='close' data-dismiss='modal' aria-hidden=\"true\">\n                    <span aria-hidden='true'>×</span>\n                </button>\n                <h4 class='modal-title'>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "                </h4>\n            </div>\n            <div class='modal-body'>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "            </div>\n            <div class='modal-footer'>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cancelButton : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
	    + "                  <button id=\"confirmButton\"  class=\"btn btn-primary save-button\">确定</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
	},"useData":true});
	templates['page-alert'] = template({"1":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "      <div\n              style=\"position: relative;\n                      width: 360px;\n                      border: 1px solid #8dcdf3;\n                      border-radius: 5px;\n                      box-shadow: 0 0 6px #279fe5;\n                      margin: 0 auto;\n                      background: #FFFFFF;\n                      font-size: 20px;\n                      color: #279fe5;\n                      line-height: 60px;\n                      padding-left: 50px;\n                      overflow: hidden;\"\n      >\n          <img style=\" position: absolute; top: 20px; left: 15px;\" src=\"../images/upp/success-icon.png\" />\n          "
	    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
	    + "\n      </div>\n";
	},"3":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "         <div\n                 style=\"position: relative;\n                      width: 360px;\n                      border-radius: 5px;\n                      margin: 0 auto;\n                      background: #FFFFFF;\n                      font-size: 20px;\n                      line-height: 60px;\n                      padding-left: 50px;\n                      overflow: hidden;\n                      color: #df4a32;\n                      border: 1px solid #ffa293;\n                      box-shadow: 0 0 6px #df4a32;\"\n         >\n             <img style=\" position: absolute; top: 20px; left: 15px;\" src=\"../images/upp/fail-icon.png\" />\n           "
	    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
	    + "\n         </div>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return " <div id=\"alert-pop\" style=\"position: fixed; top: 60px; z-index: 1060; width: 100%;\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.success : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
	    + "  </div>\n";
	},"useData":true});
	templates['page-loading'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "<div    id=\"loading-pop\"\n        style=\"\n        position:fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background: rgba(0, 0, 0, 0.5);\n        zIndex: 10000;\n\">\n    <i style=\"\n              position: absolute;\n              top: 40%;\n              left: 50%;\n              color: white;\n              fontSize: 5rem;\n              \"\n       class='fa fa-refresh fa-spin' >\n    </i>\n</div>\n";
	},"useData":true});
	templates['profile-list'] = template({"1":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "<li>\n  <img src=\""
	    + this.escapeExpression(((helper = (helper = helpers.avatarUrl || (depth0 != null ? depth0.avatarUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"avatarUrl","hash":{},"data":data}) : helper)))
	    + "\" />\n</li>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "<img class=\"avatar-active\" src=\"../images/sample/sample-page-avatar-active.png\" />\n";
	},"useData":true});
	templates['site-header'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "<header class=\"main-header\">\n  <a href=\"home.html\" class=\"logo\">\n    <span class=\"logo-mini\"><b>O</b>SP</span>\n    <span class=\"logo-lg\"><b>Operation</b>SP</span>\n  </a>\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </a>\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"/images/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\" id=\"user-name\">"
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"user-header\">\n              <img src=\"/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n              <p>\n                "
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n                <small id=\"user-roles\">"
	    + alias3(((helper = (helper = helpers.roles || (depth0 != null ? depth0.roles : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"roles","hash":{},"data":data}) : helper)))
	    + "</small>\n              </p>\n            </li>\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a id='change-password' href=\"#\" class=\"btn btn-default btn-flat\">修改密码</a>\n              </div>\n              <div class=\"pull-right\">\n                <a id='logout' href=\"#\" class=\"btn btn-danger btn-flat\">安全退出</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n";
	},"useData":true});


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by liukai on 16/8/15.
	 */
	var xss = __webpack_require__(15);
	var alert = __webpack_require__(25);
	var loading = __webpack_require__(26);
	var getUrl = function getUrl(uri) {
	  var doc = document;
	  var elem = doc.createElement('a');
	
	  elem.href = uri;
	
	  return {
	    source: uri,
	    protocol: elem.protocol.replace(':', ''),
	    host: elem.hostname,
	    port: elem.port,
	    query: elem.search,
	    params: function () {
	      var ret = {},
	          seg = elem.search.replace(/^\?/, '').split('&'),
	          len = seg.length,
	          i = 0,
	          s;
	      for (; i < len; i++) {
	        if (!seg[i]) {
	          continue;
	        }
	        s = seg[i].split('=');
	        ret[s[0]] = s[1];
	      }
	      return ret;
	    }(),
	    file: (elem.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
	    hash: elem.hash.replace('#', ''),
	    path: elem.pathname.replace(/^([^\/])/, '/$1'),
	    relative: (elem.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
	    segments: elem.pathname.replace(/^\//, '').split('/')
	  };
	};
	
	var getParams = function getParams() {
	  var _url = getUrl(window.location.href),
	      _params = _url.params;
	  return _params;
	};
	
	var format = function format(time, _format) {
	  if (time == null) {
	    return '';
	  } else {
	    var t = new Date(time);
	    var tf = function tf(i) {
	      return (i < 10 ? '0' : '') + i;
	    };
	    return _format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
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
	      };
	    });
	  }
	};
	
	var ajax = function ajax(options) {
	  loading.create();
	  if (options.jsonData) {
	    for (var p in options.jsonData) {
	      options.jsonData[p] = xss(options.jsonData[p]);
	    }
	  }
	  var data = $.extend({}, options.jsonData || {}, {
	    reqHeader: {
	      entityId: 'upp',
	      appId: WUI.config.system,
	      sessionId: '1462461678582',
	      reqId: new Date().getTime(),
	      accessToken: 'accessTokenTest'
	    }
	  });
	  var params = $.extend({}, options, {
	    method: options.method ? options.method : 'POST',
	    contentType: 'application/json;charset=utf-8',
	    data: options.method === 'GET' || options.method === 'get' ? 'jsonString=' + JSON.stringify(data) : JSON.stringify(data)
	  });
	
	  return $.ajax(params).then(function (resp, textStatus, jqXHR) {
	    $('#loading-pop').remove();
	    var code = resp.respHeader.respCode;
	    if (code === 'UPP-10000' || code === 'AAS-10000') {
	      resp.etag = jqXHR.getResponseHeader('ETag');
	      return resp;
	    } else if (code === 'AAS-920001' || code === 'AAS-920006') {
	      window.location.href = resp.loginUrl;
	    } else {
	      var errorMessage = resp.respHeader.resMessageExt;
	
	      if (!errorMessage) {
	        errorMessage = resp.respHeader.respMessage || '';
	      }
	      alert.create({
	        message: errorMessage,
	        fail: true
	      });
	      return $.Deferred().reject(jqXHR, resp, errorMessage).promise();
	    }
	  }).fail(function (resp, jqXHR, errorMessage) {
	    alert.create({
	      message: errorMessage || 'Ajax Failed!',
	      fail: true
	    });
	  });
	};
	
	var translate = function translate(resourceID) {
	  var target = resourceID;
	
	  if (WUI.resources && WUI.config && WUI.config.locale && WUI.resources[WUI.config.locale]) {
	    target = WUI.resources[WUI.config.locale][resourceID] || resourceID;
	  }
	
	  return target;
	};
	
	//动态加载CSS或者JS
	var dynamicLoading = {
	  css: function css(path) {
	    if (!path || path.length === 0) {
	      throw new Error('argument "path" is required !');
	    }
	    var head = document.getElementsByTagName('head')[0];
	    var link = document.createElement('link');
	    link.href = path;
	    link.rel = 'stylesheet';
	    link.type = 'text/css';
	    head.appendChild(link);
	  },
	  js: function js(path) {
	    if (!path || path.length === 0) {
	      throw new Error('argument "path" is required !');
	    }
	    var head = document.getElementsByTagName('head')[0];
	    var script = document.createElement('script');
	    script.src = path;
	    script.type = 'text/javascript';
	    head.appendChild(script);
	  }
	};
	
	module.exports = {
	  getUrl: getUrl,
	  getParams: getParams,
	  getFormat: format,
	  ajax: ajax,
	  dynamicLoading: dynamicLoading,
	  t: translate
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 模块入口
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	
	var DEFAULT = __webpack_require__(16);
	var parser = __webpack_require__(23);
	var FilterXSS = __webpack_require__(24);
	
	
	/**
	 * XSS过滤
	 *
	 * @param {String} html 要过滤的HTML代码
	 * @param {Object} options 选项：whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml
	 * @return {String}
	 */
	function filterXSS (html, options) {
	  var xss = new FilterXSS(options);
	  return xss.process(html);
	}
	
	
	// 输出
	exports = module.exports = filterXSS;
	exports.FilterXSS = FilterXSS;
	for (var i in DEFAULT) exports[i] = DEFAULT[i];
	for (var i in parser) exports[i] = parser[i];
	
	
	// 在浏览器端使用
	if (typeof window !== 'undefined') {
	  window.filterXSS = module.exports;
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 默认配置
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	
	var FilterCSS = __webpack_require__(17).FilterCSS;
	var _ = __webpack_require__(22);
	
	// 默认白名单
	function getDefaultWhiteList () {
	  return {
	    a:      ['target', 'href', 'title'],
	    abbr:   ['title'],
	    address: [],
	    area:   ['shape', 'coords', 'href', 'alt'],
	    article: [],
	    aside:  [],
	    audio:  ['autoplay', 'controls', 'loop', 'preload', 'src'],
	    b:      [],
	    bdi:    ['dir'],
	    bdo:    ['dir'],
	    big:    [],
	    blockquote: ['cite'],
	    br:     [],
	    caption: [],
	    center: [],
	    cite:   [],
	    code:   [],
	    col:    ['align', 'valign', 'span', 'width'],
	    colgroup: ['align', 'valign', 'span', 'width'],
	    dd:     [],
	    del:    ['datetime'],
	    details: ['open'],
	    div:    [],
	    dl:     [],
	    dt:     [],
	    em:     [],
	    font:   ['color', 'size', 'face'],
	    footer: [],
	    h1:     [],
	    h2:     [],
	    h3:     [],
	    h4:     [],
	    h5:     [],
	    h6:     [],
	    header: [],
	    hr:     [],
	    i:      [],
	    img:    ['src', 'alt', 'title', 'width', 'height'],
	    ins:    ['datetime'],
	    li:     [],
	    mark:   [],
	    nav:    [],
	    ol:     [],
	    p:      [],
	    pre:    [],
	    s:      [],
	    section:[],
	    small:  [],
	    span:   [],
	    sub:    [],
	    sup:    [],
	    strong: [],
	    table:  ['width', 'border', 'align', 'valign'],
	    tbody:  ['align', 'valign'],
	    td:     ['width', 'rowspan', 'colspan', 'align', 'valign'],
	    tfoot:  ['align', 'valign'],
	    th:     ['width', 'rowspan', 'colspan', 'align', 'valign'],
	    thead:  ['align', 'valign'],
	    tr:     ['rowspan', 'align', 'valign'],
	    tt:     [],
	    u:      [],
	    ul:     [],
	    video:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width']
	  };
	}
	
	// 默认CSS Filter
	var defaultCSSFilter = new FilterCSS();
	
	/**
	 * 匹配到标签时的处理方法
	 *
	 * @param {String} tag
	 * @param {String} html
	 * @param {Object} options
	 * @return {String}
	 */
	function onTag (tag, html, options) {
	  // do nothing
	}
	
	/**
	 * 匹配到不在白名单上的标签时的处理方法
	 *
	 * @param {String} tag
	 * @param {String} html
	 * @param {Object} options
	 * @return {String}
	 */
	function onIgnoreTag (tag, html, options) {
	  // do nothing
	}
	
	/**
	 * 匹配到标签属性时的处理方法
	 *
	 * @param {String} tag
	 * @param {String} name
	 * @param {String} value
	 * @return {String}
	 */
	function onTagAttr (tag, name, value) {
	  // do nothing
	}
	
	/**
	 * 匹配到不在白名单上的标签属性时的处理方法
	 *
	 * @param {String} tag
	 * @param {String} name
	 * @param {String} value
	 * @return {String}
	 */
	function onIgnoreTagAttr (tag, name, value) {
	  // do nothing
	}
	
	/**
	 * HTML转义
	 *
	 * @param {String} html
	 */
	function escapeHtml (html) {
	  return html.replace(REGEXP_LT, '&lt;').replace(REGEXP_GT, '&gt;');
	}
	
	/**
	 * 安全的标签属性值
	 *
	 * @param {String} tag
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} cssFilter
	 * @return {String}
	 */
	function safeAttrValue (tag, name, value, cssFilter) {
	  cssFilter = cssFilter || defaultCSSFilter;
	  // 转换为友好的属性值，再做判断
	  value = friendlyAttrValue(value);
	
	  if (name === 'href' || name === 'src') {
	    // 过滤 href 和 src 属性
	    // 仅允许 http:// | https:// | mailto: | / | # 开头的地址
	    value = _.trim(value);
	    if (value === '#') return '#';
	    if (!(value.substr(0, 7) === 'http://' ||
	         value.substr(0, 8) === 'https://' ||
	         value.substr(0, 7) === 'mailto:' ||
	         value[0] === '#' ||
	         value[0] === '/')) {
	      return '';
	    }
	  } else if (name === 'background') {
	    // 过滤 background 属性 （这个xss漏洞较老了，可能已经不适用）
	    // javascript:
	    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
	    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
	      return '';
	    }
	  } else if (name === 'style') {
	    // /*注释*/
	    /*REGEXP_DEFAULT_ON_TAG_ATTR_3.lastIndex = 0;
	    if (REGEXP_DEFAULT_ON_TAG_ATTR_3.test(value)) {
	      return '';
	    }*/
	    // expression()
	    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
	    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
	      return '';
	    }
	    // url()
	    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
	    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
	      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
	      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
	        return '';
	      }
	    }
	    value = cssFilter.process(value);
	  }
	
	  // 输出时需要转义<>"
	  value = escapeAttrValue(value);
	  return value;
	}
	
	// 正则表达式
	var REGEXP_LT = /</g;
	var REGEXP_GT = />/g;
	var REGEXP_QUOTE = /"/g;
	var REGEXP_QUOTE_2 = /&quot;/g;
	var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/img;
	var REGEXP_ATTR_VALUE_COLON = /&colon;?/img;
	var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/img;
	var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//mg;
	var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/ig;
	var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/ig;
	var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//ig;
	var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/ig;
	var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/ig;
	
	/**
	 * 对双引号进行转义
	 *
	 * @param {String} str
	 * @return {String} str
	 */
	function escapeQuote (str) {
	  return str.replace(REGEXP_QUOTE, '&quot;');
	}
	
	/**
	 * 对双引号进行转义
	 *
	 * @param {String} str
	 * @return {String} str
	 */
	function unescapeQuote (str) {
	  return str.replace(REGEXP_QUOTE_2, '"');
	}
	
	/**
	 * 对html实体编码进行转义
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function escapeHtmlEntities (str) {
	  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode (str, code) {
	    return (code[0] === 'x' || code[0] === 'X')
	            ? String.fromCharCode(parseInt(code.substr(1), 16))
	            : String.fromCharCode(parseInt(code, 10));
	  });
	}
	
	/**
	 * 对html5新增的危险实体编码进行转义
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function escapeDangerHtml5Entities (str) {
	  return str.replace(REGEXP_ATTR_VALUE_COLON, ':')
	            .replace(REGEXP_ATTR_VALUE_NEWLINE, ' ');
	}
	
	/**
	 * 清除不可见字符
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function clearNonPrintableCharacter (str) {
	  var str2 = '';
	  for (var i = 0, len = str.length; i < len; i++) {
	    str2 += str.charCodeAt(i) < 32 ? ' ' : str.charAt(i);
	  }
	  return _.trim(str2);
	}
	
	/**
	 * 将标签的属性值转换成一般字符，便于分析
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function friendlyAttrValue (str) {
	  str = unescapeQuote(str);             // 双引号
	  str = escapeHtmlEntities(str);         // 转换HTML实体编码
	  str = escapeDangerHtml5Entities(str);  // 转换危险的HTML5新增实体编码
	  str = clearNonPrintableCharacter(str); // 清除不可见字符
	  return str;
	}
	
	/**
	 * 转义用于输出的标签属性值
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function escapeAttrValue (str) {
	  str = escapeQuote(str);
	  str = escapeHtml(str);
	  return str;
	}
	
	/**
	 * 去掉不在白名单中的标签onIgnoreTag处理方法
	 */
	function onIgnoreTagStripAll () {
	  return '';
	}
	
	/**
	 * 删除标签体
	 *
	 * @param {array} tags 要删除的标签列表
	 * @param {function} next 对不在列表中的标签的处理函数，可选
	 */
	function StripTagBody (tags, next) {
	  if (typeof(next) !== 'function') {
	    next = function () {};
	  }
	
	  var isRemoveAllTag = !Array.isArray(tags);
	  function isRemoveTag (tag) {
	    if (isRemoveAllTag) return true;
	    return (_.indexOf(tags, tag) !== -1);
	  }
	
	  var removeList = [];   // 要删除的位置范围列表
	  var posStart = false;  // 当前标签开始位置
	
	  return {
	    onIgnoreTag: function (tag, html, options) {
	      if (isRemoveTag(tag)) {
	        if (options.isClosing) {
	          var ret = '[/removed]';
	          var end = options.position + ret.length;
	          removeList.push([posStart !== false ? posStart : options.position, end]);
	          posStart = false;
	          return ret;
	        } else {
	          if (!posStart) {
	            posStart = options.position;
	          }
	          return '[removed]';
	        }
	      } else {
	        return next(tag, html, options);
	      }
	    },
	    remove: function (html) {
	      var rethtml = '';
	      var lastPos = 0;
	      _.forEach(removeList, function (pos) {
	        rethtml += html.slice(lastPos, pos[0]);
	        lastPos = pos[1];
	      });
	      rethtml += html.slice(lastPos);
	      return rethtml;
	    }
	  };
	}
	
	/**
	 * 去除备注标签
	 *
	 * @param {String} html
	 * @return {String}
	 */
	function stripCommentTag (html) {
	  return html.replace(STRIP_COMMENT_TAG_REGEXP, '');
	}
	var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;
	
	/**
	 * 去除不可见字符
	 *
	 * @param {String} html
	 * @return {String}
	 */
	function stripBlankChar (html) {
	  var chars = html.split('');
	  chars = chars.filter(function (char) {
	    var c = char.charCodeAt(0);
	    if (c === 127) return false;
	    if (c <= 31) {
	      if (c === 10 || c === 13) return true;
	      return false;
	    }
	    return true;
	  });
	  return chars.join('');
	}
	
	
	exports.whiteList = getDefaultWhiteList();
	exports.getDefaultWhiteList = getDefaultWhiteList;
	exports.onTag = onTag;
	exports.onIgnoreTag = onIgnoreTag;
	exports.onTagAttr = onTagAttr;
	exports.onIgnoreTagAttr = onIgnoreTagAttr;
	exports.safeAttrValue = safeAttrValue;
	exports.escapeHtml = escapeHtml;
	exports.escapeQuote = escapeQuote;
	exports.unescapeQuote = unescapeQuote;
	exports.escapeHtmlEntities = escapeHtmlEntities;
	exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
	exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
	exports.friendlyAttrValue = friendlyAttrValue;
	exports.escapeAttrValue = escapeAttrValue;
	exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
	exports.StripTagBody = StripTagBody;
	exports.stripCommentTag = stripCommentTag;
	exports.stripBlankChar = stripBlankChar;
	exports.cssFilter = defaultCSSFilter;
	


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * cssfilter
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	
	var DEFAULT = __webpack_require__(18);
	var FilterCSS = __webpack_require__(19);
	
	
	/**
	 * XSS过滤
	 *
	 * @param {String} css 要过滤的CSS代码
	 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
	 * @return {String}
	 */
	function filterCSS (html, options) {
	  var xss = new FilterCSS(options);
	  return xss.process(html);
	}
	
	
	// 输出
	exports = module.exports = filterCSS;
	exports.FilterCSS = FilterCSS;
	for (var i in DEFAULT) exports[i] = DEFAULT[i];
	
	// 在浏览器端使用
	if (typeof window !== 'undefined') {
	  window.filterCSS = module.exports;
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * cssfilter
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	
	function getDefaultWhiteList () {
	  // 白名单值说明：
	  // true: 允许该属性
	  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
	  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
	  // 除上面列出的值外均表示不允许
	  var whiteList = {};
	
	  whiteList['align-content'] = false; // default: auto
	  whiteList['align-items'] = false; // default: auto
	  whiteList['align-self'] = false; // default: auto
	  whiteList['alignment-adjust'] = false; // default: auto
	  whiteList['alignment-baseline'] = false; // default: baseline
	  whiteList['all'] = false; // default: depending on individual properties
	  whiteList['anchor-point'] = false; // default: none
	  whiteList['animation'] = false; // default: depending on individual properties
	  whiteList['animation-delay'] = false; // default: 0
	  whiteList['animation-direction'] = false; // default: normal
	  whiteList['animation-duration'] = false; // default: 0
	  whiteList['animation-fill-mode'] = false; // default: none
	  whiteList['animation-iteration-count'] = false; // default: 1
	  whiteList['animation-name'] = false; // default: none
	  whiteList['animation-play-state'] = false; // default: running
	  whiteList['animation-timing-function'] = false; // default: ease
	  whiteList['azimuth'] = false; // default: center
	  whiteList['backface-visibility'] = false; // default: visible
	  whiteList['background'] = true; // default: depending on individual properties
	  whiteList['background-attachment'] = true; // default: scroll
	  whiteList['background-clip'] = true; // default: border-box
	  whiteList['background-color'] = true; // default: transparent
	  whiteList['background-image'] = true; // default: none
	  whiteList['background-origin'] = true; // default: padding-box
	  whiteList['background-position'] = true; // default: 0% 0%
	  whiteList['background-repeat'] = true; // default: repeat
	  whiteList['background-size'] = true; // default: auto
	  whiteList['baseline-shift'] = false; // default: baseline
	  whiteList['binding'] = false; // default: none
	  whiteList['bleed'] = false; // default: 6pt
	  whiteList['bookmark-label'] = false; // default: content()
	  whiteList['bookmark-level'] = false; // default: none
	  whiteList['bookmark-state'] = false; // default: open
	  whiteList['border'] = true; // default: depending on individual properties
	  whiteList['border-bottom'] = true; // default: depending on individual properties
	  whiteList['border-bottom-color'] = true; // default: current color
	  whiteList['border-bottom-left-radius'] = true; // default: 0
	  whiteList['border-bottom-right-radius'] = true; // default: 0
	  whiteList['border-bottom-style'] = true; // default: none
	  whiteList['border-bottom-width'] = true; // default: medium
	  whiteList['border-collapse'] = true; // default: separate
	  whiteList['border-color'] = true; // default: depending on individual properties
	  whiteList['border-image'] = true; // default: none
	  whiteList['border-image-outset'] = true; // default: 0
	  whiteList['border-image-repeat'] = true; // default: stretch
	  whiteList['border-image-slice'] = true; // default: 100%
	  whiteList['border-image-source'] = true; // default: none
	  whiteList['border-image-width'] = true; // default: 1
	  whiteList['border-left'] = true; // default: depending on individual properties
	  whiteList['border-left-color'] = true; // default: current color
	  whiteList['border-left-style'] = true; // default: none
	  whiteList['border-left-width'] = true; // default: medium
	  whiteList['border-radius'] = true; // default: 0
	  whiteList['border-right'] = true; // default: depending on individual properties
	  whiteList['border-right-color'] = true; // default: current color
	  whiteList['border-right-style'] = true; // default: none
	  whiteList['border-right-width'] = true; // default: medium
	  whiteList['border-spacing'] = true; // default: 0
	  whiteList['border-style'] = true; // default: depending on individual properties
	  whiteList['border-top'] = true; // default: depending on individual properties
	  whiteList['border-top-color'] = true; // default: current color
	  whiteList['border-top-left-radius'] = true; // default: 0
	  whiteList['border-top-right-radius'] = true; // default: 0
	  whiteList['border-top-style'] = true; // default: none
	  whiteList['border-top-width'] = true; // default: medium
	  whiteList['border-width'] = true; // default: depending on individual properties
	  whiteList['bottom'] = false; // default: auto
	  whiteList['box-decoration-break'] = true; // default: slice
	  whiteList['box-shadow'] = true; // default: none
	  whiteList['box-sizing'] = true; // default: content-box
	  whiteList['box-snap'] = true; // default: none
	  whiteList['box-suppress'] = true; // default: show
	  whiteList['break-after'] = true; // default: auto
	  whiteList['break-before'] = true; // default: auto
	  whiteList['break-inside'] = true; // default: auto
	  whiteList['caption-side'] = false; // default: top
	  whiteList['chains'] = false; // default: none
	  whiteList['clear'] = true; // default: none
	  whiteList['clip'] = false; // default: auto
	  whiteList['clip-path'] = false; // default: none
	  whiteList['clip-rule'] = false; // default: nonzero
	  whiteList['color'] = true; // default: implementation dependent
	  whiteList['color-interpolation-filters'] = true; // default: auto
	  whiteList['column-count'] = false; // default: auto
	  whiteList['column-fill'] = false; // default: balance
	  whiteList['column-gap'] = false; // default: normal
	  whiteList['column-rule'] = false; // default: depending on individual properties
	  whiteList['column-rule-color'] = false; // default: current color
	  whiteList['column-rule-style'] = false; // default: medium
	  whiteList['column-rule-width'] = false; // default: medium
	  whiteList['column-span'] = false; // default: none
	  whiteList['column-width'] = false; // default: auto
	  whiteList['columns'] = false; // default: depending on individual properties
	  whiteList['contain'] = false; // default: none
	  whiteList['content'] = false; // default: normal
	  whiteList['counter-increment'] = false; // default: none
	  whiteList['counter-reset'] = false; // default: none
	  whiteList['counter-set'] = false; // default: none
	  whiteList['crop'] = false; // default: auto
	  whiteList['cue'] = false; // default: depending on individual properties
	  whiteList['cue-after'] = false; // default: none
	  whiteList['cue-before'] = false; // default: none
	  whiteList['cursor'] = false; // default: auto
	  whiteList['direction'] = false; // default: ltr
	  whiteList['display'] = true; // default: depending on individual properties
	  whiteList['display-inside'] = true; // default: auto
	  whiteList['display-list'] = true; // default: none
	  whiteList['display-outside'] = true; // default: inline-level
	  whiteList['dominant-baseline'] = false; // default: auto
	  whiteList['elevation'] = false; // default: level
	  whiteList['empty-cells'] = false; // default: show
	  whiteList['filter'] = false; // default: none
	  whiteList['flex'] = false; // default: depending on individual properties
	  whiteList['flex-basis'] = false; // default: auto
	  whiteList['flex-direction'] = false; // default: row
	  whiteList['flex-flow'] = false; // default: depending on individual properties
	  whiteList['flex-grow'] = false; // default: 0
	  whiteList['flex-shrink'] = false; // default: 1
	  whiteList['flex-wrap'] = false; // default: nowrap
	  whiteList['float'] = false; // default: none
	  whiteList['float-offset'] = false; // default: 0 0
	  whiteList['flood-color'] = false; // default: black
	  whiteList['flood-opacity'] = false; // default: 1
	  whiteList['flow-from'] = false; // default: none
	  whiteList['flow-into'] = false; // default: none
	  whiteList['font'] = true; // default: depending on individual properties
	  whiteList['font-family'] = true; // default: implementation dependent
	  whiteList['font-feature-settings'] = true; // default: normal
	  whiteList['font-kerning'] = true; // default: auto
	  whiteList['font-language-override'] = true; // default: normal
	  whiteList['font-size'] = true; // default: medium
	  whiteList['font-size-adjust'] = true; // default: none
	  whiteList['font-stretch'] = true; // default: normal
	  whiteList['font-style'] = true; // default: normal
	  whiteList['font-synthesis'] = true; // default: weight style
	  whiteList['font-variant'] = true; // default: normal
	  whiteList['font-variant-alternates'] = true; // default: normal
	  whiteList['font-variant-caps'] = true; // default: normal
	  whiteList['font-variant-east-asian'] = true; // default: normal
	  whiteList['font-variant-ligatures'] = true; // default: normal
	  whiteList['font-variant-numeric'] = true; // default: normal
	  whiteList['font-variant-position'] = true; // default: normal
	  whiteList['font-weight'] = true; // default: normal
	  whiteList['grid'] = false; // default: depending on individual properties
	  whiteList['grid-area'] = false; // default: depending on individual properties
	  whiteList['grid-auto-columns'] = false; // default: auto
	  whiteList['grid-auto-flow'] = false; // default: none
	  whiteList['grid-auto-rows'] = false; // default: auto
	  whiteList['grid-column'] = false; // default: depending on individual properties
	  whiteList['grid-column-end'] = false; // default: auto
	  whiteList['grid-column-start'] = false; // default: auto
	  whiteList['grid-row'] = false; // default: depending on individual properties
	  whiteList['grid-row-end'] = false; // default: auto
	  whiteList['grid-row-start'] = false; // default: auto
	  whiteList['grid-template'] = false; // default: depending on individual properties
	  whiteList['grid-template-areas'] = false; // default: none
	  whiteList['grid-template-columns'] = false; // default: none
	  whiteList['grid-template-rows'] = false; // default: none
	  whiteList['hanging-punctuation'] = false; // default: none
	  whiteList['height'] = true; // default: auto
	  whiteList['hyphens'] = false; // default: manual
	  whiteList['icon'] = false; // default: auto
	  whiteList['image-orientation'] = false; // default: auto
	  whiteList['image-resolution'] = false; // default: normal
	  whiteList['ime-mode'] = false; // default: auto
	  whiteList['initial-letters'] = false; // default: normal
	  whiteList['inline-box-align'] = false; // default: last
	  whiteList['justify-content'] = false; // default: auto
	  whiteList['justify-items'] = false; // default: auto
	  whiteList['justify-self'] = false; // default: auto
	  whiteList['left'] = false; // default: auto
	  whiteList['letter-spacing'] = true; // default: normal
	  whiteList['lighting-color'] = true; // default: white
	  whiteList['line-box-contain'] = false; // default: block inline replaced
	  whiteList['line-break'] = false; // default: auto
	  whiteList['line-grid'] = false; // default: match-parent
	  whiteList['line-height'] = false; // default: normal
	  whiteList['line-snap'] = false; // default: none
	  whiteList['line-stacking'] = false; // default: depending on individual properties
	  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
	  whiteList['line-stacking-shift'] = false; // default: consider-shifts
	  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
	  whiteList['list-style'] = true; // default: depending on individual properties
	  whiteList['list-style-image'] = true; // default: none
	  whiteList['list-style-position'] = true; // default: outside
	  whiteList['list-style-type'] = true; // default: disc
	  whiteList['margin'] = true; // default: depending on individual properties
	  whiteList['margin-bottom'] = true; // default: 0
	  whiteList['margin-left'] = true; // default: 0
	  whiteList['margin-right'] = true; // default: 0
	  whiteList['margin-top'] = true; // default: 0
	  whiteList['marker-offset'] = false; // default: auto
	  whiteList['marker-side'] = false; // default: list-item
	  whiteList['marks'] = false; // default: none
	  whiteList['mask'] = false; // default: border-box
	  whiteList['mask-box'] = false; // default: see individual properties
	  whiteList['mask-box-outset'] = false; // default: 0
	  whiteList['mask-box-repeat'] = false; // default: stretch
	  whiteList['mask-box-slice'] = false; // default: 0 fill
	  whiteList['mask-box-source'] = false; // default: none
	  whiteList['mask-box-width'] = false; // default: auto
	  whiteList['mask-clip'] = false; // default: border-box
	  whiteList['mask-image'] = false; // default: none
	  whiteList['mask-origin'] = false; // default: border-box
	  whiteList['mask-position'] = false; // default: center
	  whiteList['mask-repeat'] = false; // default: no-repeat
	  whiteList['mask-size'] = false; // default: border-box
	  whiteList['mask-source-type'] = false; // default: auto
	  whiteList['mask-type'] = false; // default: luminance
	  whiteList['max-height'] = true; // default: none
	  whiteList['max-lines'] = false; // default: none
	  whiteList['max-width'] = true; // default: none
	  whiteList['min-height'] = true; // default: 0
	  whiteList['min-width'] = true; // default: 0
	  whiteList['move-to'] = false; // default: normal
	  whiteList['nav-down'] = false; // default: auto
	  whiteList['nav-index'] = false; // default: auto
	  whiteList['nav-left'] = false; // default: auto
	  whiteList['nav-right'] = false; // default: auto
	  whiteList['nav-up'] = false; // default: auto
	  whiteList['object-fit'] = false; // default: fill
	  whiteList['object-position'] = false; // default: 50% 50%
	  whiteList['opacity'] = false; // default: 1
	  whiteList['order'] = false; // default: 0
	  whiteList['orphans'] = false; // default: 2
	  whiteList['outline'] = false; // default: depending on individual properties
	  whiteList['outline-color'] = false; // default: invert
	  whiteList['outline-offset'] = false; // default: 0
	  whiteList['outline-style'] = false; // default: none
	  whiteList['outline-width'] = false; // default: medium
	  whiteList['overflow'] = false; // default: depending on individual properties
	  whiteList['overflow-wrap'] = false; // default: normal
	  whiteList['overflow-x'] = false; // default: visible
	  whiteList['overflow-y'] = false; // default: visible
	  whiteList['padding'] = true; // default: depending on individual properties
	  whiteList['padding-bottom'] = true; // default: 0
	  whiteList['padding-left'] = true; // default: 0
	  whiteList['padding-right'] = true; // default: 0
	  whiteList['padding-top'] = true; // default: 0
	  whiteList['page'] = false; // default: auto
	  whiteList['page-break-after'] = false; // default: auto
	  whiteList['page-break-before'] = false; // default: auto
	  whiteList['page-break-inside'] = false; // default: auto
	  whiteList['page-policy'] = false; // default: start
	  whiteList['pause'] = false; // default: implementation dependent
	  whiteList['pause-after'] = false; // default: implementation dependent
	  whiteList['pause-before'] = false; // default: implementation dependent
	  whiteList['perspective'] = false; // default: none
	  whiteList['perspective-origin'] = false; // default: 50% 50%
	  whiteList['pitch'] = false; // default: medium
	  whiteList['pitch-range'] = false; // default: 50
	  whiteList['play-during'] = false; // default: auto
	  whiteList['position'] = false; // default: static
	  whiteList['presentation-level'] = false; // default: 0
	  whiteList['quotes'] = false; // default: text
	  whiteList['region-fragment'] = false; // default: auto
	  whiteList['resize'] = false; // default: none
	  whiteList['rest'] = false; // default: depending on individual properties
	  whiteList['rest-after'] = false; // default: none
	  whiteList['rest-before'] = false; // default: none
	  whiteList['richness'] = false; // default: 50
	  whiteList['right'] = false; // default: auto
	  whiteList['rotation'] = false; // default: 0
	  whiteList['rotation-point'] = false; // default: 50% 50%
	  whiteList['ruby-align'] = false; // default: auto
	  whiteList['ruby-merge'] = false; // default: separate
	  whiteList['ruby-position'] = false; // default: before
	  whiteList['shape-image-threshold'] = false; // default: 0.0
	  whiteList['shape-outside'] = false; // default: none
	  whiteList['shape-margin'] = false; // default: 0
	  whiteList['size'] = false; // default: auto
	  whiteList['speak'] = false; // default: auto
	  whiteList['speak-as'] = false; // default: normal
	  whiteList['speak-header'] = false; // default: once
	  whiteList['speak-numeral'] = false; // default: continuous
	  whiteList['speak-punctuation'] = false; // default: none
	  whiteList['speech-rate'] = false; // default: medium
	  whiteList['stress'] = false; // default: 50
	  whiteList['string-set'] = false; // default: none
	  whiteList['tab-size'] = false; // default: 8
	  whiteList['table-layout'] = false; // default: auto
	  whiteList['text-align'] = true; // default: start
	  whiteList['text-align-last'] = true; // default: auto
	  whiteList['text-combine-upright'] = true; // default: none
	  whiteList['text-decoration'] = true; // default: none
	  whiteList['text-decoration-color'] = true; // default: currentColor
	  whiteList['text-decoration-line'] = true; // default: none
	  whiteList['text-decoration-skip'] = true; // default: objects
	  whiteList['text-decoration-style'] = true; // default: solid
	  whiteList['text-emphasis'] = true; // default: depending on individual properties
	  whiteList['text-emphasis-color'] = true; // default: currentColor
	  whiteList['text-emphasis-position'] = true; // default: over right
	  whiteList['text-emphasis-style'] = true; // default: none
	  whiteList['text-height'] = true; // default: auto
	  whiteList['text-indent'] = true; // default: 0
	  whiteList['text-justify'] = true; // default: auto
	  whiteList['text-orientation'] = true; // default: mixed
	  whiteList['text-overflow'] = true; // default: clip
	  whiteList['text-shadow'] = true; // default: none
	  whiteList['text-space-collapse'] = true; // default: collapse
	  whiteList['text-transform'] = true; // default: none
	  whiteList['text-underline-position'] = true; // default: auto
	  whiteList['text-wrap'] = true; // default: normal
	  whiteList['top'] = false; // default: auto
	  whiteList['transform'] = false; // default: none
	  whiteList['transform-origin'] = false; // default: 50% 50% 0
	  whiteList['transform-style'] = false; // default: flat
	  whiteList['transition'] = false; // default: depending on individual properties
	  whiteList['transition-delay'] = false; // default: 0s
	  whiteList['transition-duration'] = false; // default: 0s
	  whiteList['transition-property'] = false; // default: all
	  whiteList['transition-timing-function'] = false; // default: ease
	  whiteList['unicode-bidi'] = false; // default: normal
	  whiteList['vertical-align'] = false; // default: baseline
	  whiteList['visibility'] = false; // default: visible
	  whiteList['voice-balance'] = false; // default: center
	  whiteList['voice-duration'] = false; // default: auto
	  whiteList['voice-family'] = false; // default: implementation dependent
	  whiteList['voice-pitch'] = false; // default: medium
	  whiteList['voice-range'] = false; // default: medium
	  whiteList['voice-rate'] = false; // default: normal
	  whiteList['voice-stress'] = false; // default: normal
	  whiteList['voice-volume'] = false; // default: medium
	  whiteList['volume'] = false; // default: medium
	  whiteList['white-space'] = false; // default: normal
	  whiteList['widows'] = false; // default: 2
	  whiteList['width'] = true; // default: auto
	  whiteList['will-change'] = false; // default: auto
	  whiteList['word-break'] = true; // default: normal
	  whiteList['word-spacing'] = true; // default: normal
	  whiteList['word-wrap'] = true; // default: normal
	  whiteList['wrap-flow'] = false; // default: auto
	  whiteList['wrap-through'] = false; // default: wrap
	  whiteList['writing-mode'] = false; // default: horizontal-tb
	  whiteList['z-index'] = false; // default: auto
	
	  return whiteList;
	}
	
	
	/**
	 * 匹配到白名单上的一个属性时
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {String}
	 */
	function onAttr (name, value, options) {
	  // do nothing
	}
	
	/**
	 * 匹配到不在白名单上的一个属性时
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {String}
	 */
	function onIgnoreAttr (name, value, options) {
	  // do nothing
	}
	
	
	exports.whiteList = getDefaultWhiteList();
	exports.getDefaultWhiteList = getDefaultWhiteList;
	exports.onAttr = onAttr;
	exports.onIgnoreAttr = onIgnoreAttr;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * cssfilter
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	
	var DEFAULT = __webpack_require__(18);
	var parseStyle = __webpack_require__(20);
	var _ = __webpack_require__(21);
	
	
	/**
	 * 返回值是否为空
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	function isNull (obj) {
	  return (obj === undefined || obj === null);
	}
	
	
	/**
	 * 创建CSS过滤器
	 *
	 * @param {Object} options
	 *   - {Object} whiteList
	 *   - {Object} onAttr
	 *   - {Object} onIgnoreAttr
	 */
	function FilterCSS (options) {
	  options = options || {};
	  options.whiteList = options.whiteList || DEFAULT.whiteList;
	  options.onAttr = options.onAttr || DEFAULT.onAttr;
	  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
	  this.options = options;
	}
	
	FilterCSS.prototype.process = function (css) {
	  // 兼容各种奇葩输入
	  css = css || '';
	  css = css.toString();
	  if (!css) return '';
	
	  var me = this;
	  var options = me.options;
	  var whiteList = options.whiteList;
	  var onAttr = options.onAttr;
	  var onIgnoreAttr = options.onIgnoreAttr;
	
	  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {
	
	    var check = whiteList[name];
	    var isWhite = false;
	    if (check === true) isWhite = check;
	    else if (typeof check === 'function') isWhite = check(value);
	    else if (check instanceof RegExp) isWhite = check.test(value);
	    if (isWhite !== true) isWhite = false;
	
	    var opts = {
	      position: position,
	      sourcePosition: sourcePosition,
	      source: source,
	      isWhite: isWhite
	    };
	
	    if (isWhite) {
	
	      var ret = onAttr(name, value, opts);
	      if (isNull(ret)) {
	        return name + ':' + value;
	      } else {
	        return ret;
	      }
	
	    } else {
	
	      var ret = onIgnoreAttr(name, value, opts);
	      if (!isNull(ret)) {
	        return ret;
	      }
	
	    }
	  });
	
	  return retCSS;
	};
	
	
	module.exports = FilterCSS;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * cssfilter
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	
	var _ = __webpack_require__(21);
	
	
	/**
	 * 解析style
	 *
	 * @param {String} css
	 * @param {Function} onAttr 处理属性的函数
	 *   参数格式： function (sourcePosition, position, name, value, source)
	 * @return {String}
	 */
	function parseStyle (css, onAttr) {
	  css = _.trimRight(css);
	  if (css[css.length - 1] !== ';') css += ';';
	  var cssLength = css.length;
	  var isParenthesisOpen = false;
	  var lastPos = 0;
	  var i = 0;
	  var retCSS = '';
	
	  function addNewAttr () {
	    // 如果没有正常的闭合圆括号，则直接忽略当前属性
	    if (!isParenthesisOpen) {
	      var source = _.trim(css.slice(lastPos, i));
	      var j = source.indexOf(':');
	      if (j !== -1) {
	        var name = _.trim(source.slice(0, j));
	        var value = _.trim(source.slice(j + 1));
	        // 必须有属性名称
	        if (name) {
	          var ret = onAttr(lastPos, retCSS.length, name, value, source);
	          if (ret) retCSS += ret + '; ';
	        }
	      }
	    }
	    lastPos = i + 1;
	  }
	
	  for (; i < cssLength; i++) {
	    var c = css[i];
	    if (c === '/' && css[i + 1] === '*') {
	      // 备注开始
	      var j = css.indexOf('*/', i + 2);
	      // 如果没有正常的备注结束，则后面的部分全部跳过
	      if (j === -1) break;
	      // 直接将当前位置调到备注结尾，并且初始化状态
	      i = j + 1;
	      lastPos = i + 1;
	      isParenthesisOpen = false;
	    } else if (c === '(') {
	      isParenthesisOpen = true;
	    } else if (c === ')') {
	      isParenthesisOpen = false;
	    } else if (c === ';') {
	      if (isParenthesisOpen) {
	        // 在圆括号里面，忽略
	      } else {
	        addNewAttr();
	      }
	    } else if (c === '\n') {
	      addNewAttr();
	    }
	  }
	
	  return _.trim(retCSS);
	}
	
	module.exports = parseStyle;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  indexOf: function (arr, item) {
	    var i, j;
	    if (Array.prototype.indexOf) {
	      return arr.indexOf(item);
	    }
	    for (i = 0, j = arr.length; i < j; i++) {
	      if (arr[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  },
	  forEach: function (arr, fn, scope) {
	    var i, j;
	    if (Array.prototype.forEach) {
	      return arr.forEach(fn, scope);
	    }
	    for (i = 0, j = arr.length; i < j; i++) {
	      fn.call(scope, arr[i], i, arr);
	    }
	  },
	  trim: function (str) {
	    if (String.prototype.trim) {
	      return str.trim();
	    }
	    return str.replace(/(^\s*)|(\s*$)/g, '');
	  },
	  trimRight: function (str) {
	    if (String.prototype.trimRight) {
	      return str.trimRight();
	    }
	    return str.replace(/(\s*$)/g, '');
	  }
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  indexOf: function (arr, item) {
	    var i, j;
	    if (Array.prototype.indexOf) {
	      return arr.indexOf(item);
	    }
	    for (i = 0, j = arr.length; i < j; i++) {
	      if (arr[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  },
	  forEach: function (arr, fn, scope) {
	    var i, j;
	    if (Array.prototype.forEach) {
	      return arr.forEach(fn, scope);
	    }
	    for (i = 0, j = arr.length; i < j; i++) {
	      fn.call(scope, arr[i], i, arr);
	    }
	  },
	  trim: function (str) {
	    if (String.prototype.trim) {
	      return str.trim();
	    }
	    return str.replace(/(^\s*)|(\s*$)/g, '');
	  }
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 简单 HTML Parser
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	
	var _ = __webpack_require__(22);
	
	/**
	 * 获取标签的名称
	 *
	 * @param {String} html 如：'<a hef="#">'
	 * @return {String}
	 */
	function getTagName (html) {
	  var i = html.indexOf(' ');
	  if (i === -1) {
	    var tagName = html.slice(1, -1);
	  } else {
	    var tagName = html.slice(1, i + 1);
	  }
	  tagName = _.trim(tagName).toLowerCase();
	  if (tagName.slice(0, 1) === '/') tagName = tagName.slice(1);
	  if (tagName.slice(-1) === '/') tagName = tagName.slice(0, -1);
	  return tagName;
	}
	
	/**
	 * 是否为闭合标签
	 *
	 * @param {String} html 如：'<a hef="#">'
	 * @return {Boolean}
	 */
	function isClosing (html) {
	  return (html.slice(0, 2) === '</');
	}
	
	/**
	 * 分析HTML代码，调用相应的函数处理，返回处理后的HTML
	 *
	 * @param {String} html
	 * @param {Function} onTag 处理标签的函数
	 *   参数格式： function (sourcePosition, position, tag, html, isClosing)
	 * @param {Function} escapeHtml 对HTML进行转义的函数
	 * @return {String}
	 */
	function parseTag (html, onTag, escapeHtml) {
	  'user strict';
	
	  var rethtml = '';        // 待返回的HTML
	  var lastPos = 0;         // 上一个标签结束位置
	  var tagStart = false;    // 当前标签开始位置
	  var quoteStart = false;  // 引号开始位置
	  var currentPos = 0;      // 当前位置
	  var len = html.length;   // HTML长度
	  var currentHtml = '';    // 当前标签的HTML代码
	  var currentTagName = ''; // 当前标签的名称
	
	  // 逐个分析字符
	  for (currentPos = 0; currentPos < len; currentPos++) {
	    var c = html.charAt(currentPos);
	    if (tagStart === false) {
	      if (c === '<') {
	        tagStart = currentPos;
	        continue;
	      }
	    } else {
	      if (quoteStart === false) {
	        if (c === '<') {
	          rethtml += escapeHtml(html.slice(lastPos, currentPos));
	          tagStart = currentPos;
	          lastPos = currentPos;
	          continue;
	        }
	        if (c === '>') {
	          rethtml += escapeHtml(html.slice(lastPos, tagStart));
	          currentHtml = html.slice(tagStart, currentPos + 1);
	          currentTagName = getTagName(currentHtml);
	          rethtml += onTag(tagStart,
	                           rethtml.length,
	                           currentTagName,
	                           currentHtml,
	                           isClosing(currentHtml));
	          lastPos = currentPos + 1;
	          tagStart = false;
	          continue;
	        }
	        // HTML标签内的引号仅当前一个字符是等于号时才有效
	        if ((c === '"' || c === "'") && html.charAt(currentPos - 1) === '=') {
	          quoteStart = c;
	          continue;
	        }
	      } else {
	        if (c === quoteStart) {
	          quoteStart = false;
	          continue;
	        }
	      }
	    }
	  }
	  if (lastPos < html.length) {
	    rethtml += escapeHtml(html.substr(lastPos));
	  }
	
	  return rethtml;
	}
	
	// 不符合属性名称规则的正则表达式
	var REGEXP_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/img;
	
	/**
	 * 分析标签HTML代码，调用相应的函数处理，返回HTML
	 *
	 * @param {String} html 如标签'<a href="#" target="_blank">' 则为 'href="#" target="_blank"'
	 * @param {Function} onAttr 处理属性值的函数
	 *   函数格式： function (name, value)
	 * @return {String}
	 */
	function parseAttr (html, onAttr) {
	  'user strict';
	
	  var lastPos = 0;        // 当前位置
	  var retAttrs = [];      // 待返回的属性列表
	  var tmpName = false;    // 临时属性名称
	  var len = html.length;  // HTML代码长度
	
	  function addAttr (name, value) {
	    name = _.trim(name);
	    name = name.replace(REGEXP_ATTR_NAME, '').toLowerCase();
	    if (name.length < 1) return;
	    var ret = onAttr(name, value || '');
	    if (ret) retAttrs.push(ret);
	  };
	
	  // 逐个分析字符
	  for (var i = 0; i < len; i++) {
	    var c = html.charAt(i);
	    var v, j;
	    if (tmpName === false && c === '=') {
	      tmpName = html.slice(lastPos, i);
	      lastPos = i + 1;
	      continue;
	    }
	    if (tmpName !== false) {
	      // HTML标签内的引号仅当前一个字符是等于号时才有效
	      if (i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === '=') {
	        j = html.indexOf(c, i + 1);
	        if (j === -1) {
	          break;
	        } else {
	          v = _.trim(html.slice(lastPos + 1, j));
	          addAttr(tmpName, v);
	          tmpName = false;
	          i = j;
	          lastPos = i + 1;
	          continue;
	        }
	      }
	    }
	    if (c === ' ') {
	      if (tmpName === false) {
	        j = findNextEqual(html, i);
	        if (j === -1) {
	          v = _.trim(html.slice(lastPos, i));
	          addAttr(v);
	          tmpName = false;
	          lastPos = i + 1;
	          continue;
	        } else {
	          i = j - 1;
	          continue;
	        }
	      } else {
	        j = findBeforeEqual(html, i - 1);
	        if (j === -1) {
	          v = _.trim(html.slice(lastPos, i));
	          v = stripQuoteWrap(v);
	          addAttr(tmpName, v);
	          tmpName = false;
	          lastPos = i + 1;
	          continue;
	        } else {
	          continue;
	        }
	      }
	    }
	  }
	
	  if (lastPos < html.length) {
	    if (tmpName === false) {
	      addAttr(html.slice(lastPos));
	    } else {
	      addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
	    }
	  }
	
	  return _.trim(retAttrs.join(' '));
	}
	
	function findNextEqual (str, i) {
	  for (; i < str.length; i++) {
	    var c = str[i];
	    if (c === ' ') continue;
	    if (c === '=') return i;
	    return -1;
	  }
	}
	
	function findBeforeEqual (str, i) {
	  for (; i > 0; i--) {
	    var c = str[i];
	    if (c === ' ') continue;
	    if (c === '=') return i;
	    return -1;
	  }
	}
	
	function isQuoteWrapString (text) {
	  if ((text[0] === '"' && text[text.length - 1] === '"') ||
	      (text[0] === '\'' && text[text.length - 1] === '\'')) {
	    return true;
	  } else {
	    return false;
	  }
	};
	
	function stripQuoteWrap (text) {
	  if (isQuoteWrapString(text)) {
	    return text.substr(1, text.length - 2);
	  } else {
	    return text;
	  }
	};
	
	
	exports.parseTag = parseTag;
	exports.parseAttr = parseAttr;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 过滤XSS
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	
	var FilterCSS = __webpack_require__(17).FilterCSS;
	var DEFAULT = __webpack_require__(16);
	var parser = __webpack_require__(23);
	var parseTag = parser.parseTag;
	var parseAttr = parser.parseAttr;
	var _ = __webpack_require__(22);
	
	
	/**
	 * 返回值是否为空
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	function isNull (obj) {
	  return (obj === undefined || obj === null);
	}
	
	/**
	 * 取标签内的属性列表字符串
	 *
	 * @param {String} html
	 * @return {Object}
	 *   - {String} html
	 *   - {Boolean} closing
	 */
	function getAttrs (html) {
	  var i = html.indexOf(' ');
	  if (i === -1) {
	    return {
	      html:    '',
	      closing: (html[html.length - 2] === '/')
	    };
	  }
	  html = _.trim(html.slice(i + 1, -1));
	  var isClosing = (html[html.length - 1] === '/');
	  if (isClosing) html = _.trim(html.slice(0, -1));
	  return {
	    html:    html,
	    closing: isClosing
	  };
	}
	
	/**
	 * XSS过滤对象
	 *
	 * @param {Object} options
	 *   选项：whiteList, onTag, onTagAttr, onIgnoreTag,
	 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
	 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
	 *        css{whiteList, onAttr, onIgnoreAttr}
	 */
	function FilterXSS (options) {
	  options = options || {};
	
	  if (options.stripIgnoreTag) {
	    if (options.onIgnoreTag) {
	      console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
	    }
	    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
	  }
	
	  options.whiteList = options.whiteList || DEFAULT.whiteList;
	  options.onTag = options.onTag || DEFAULT.onTag;
	  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
	  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
	  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
	  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
	  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
	  options.css = options.css || {};
	  this.options = options;
	
	  this.cssFilter = new FilterCSS(options.css);
	}
	
	/**
	 * 开始处理
	 *
	 * @param {String} html
	 * @return {String}
	 */
	FilterXSS.prototype.process = function (html) {
	  // 兼容各种奇葩输入
	  html = html || '';
	  html = html.toString();
	  if (!html) return '';
	
	  var me = this;
	  var options = me.options;
	  var whiteList = options.whiteList;
	  var onTag = options.onTag;
	  var onIgnoreTag = options.onIgnoreTag;
	  var onTagAttr = options.onTagAttr;
	  var onIgnoreTagAttr = options.onIgnoreTagAttr;
	  var safeAttrValue = options.safeAttrValue;
	  var escapeHtml = options.escapeHtml;
	  var cssFilter = me.cssFilter;
	
	  // 是否清除不可见字符
	  if (options.stripBlankChar) {
	    html = DEFAULT.stripBlankChar(html);
	  }
	
	  // 是否禁止备注标签
	  if (!options.allowCommentTag) {
	    html = DEFAULT.stripCommentTag(html);
	  }
	
	  // 如果开启了stripIgnoreTagBody
	  var stripIgnoreTagBody = false;
	  if (options.stripIgnoreTagBody) {
	    var stripIgnoreTagBody = DEFAULT.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
	    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
	  }
	
	  var retHtml = parseTag(html, function (sourcePosition, position, tag, html, isClosing) {
	    var info = {
	      sourcePosition: sourcePosition,
	      position:       position,
	      isClosing:      isClosing,
	      isWhite:        (tag in whiteList)
	    };
	
	    // 调用onTag处理
	    var ret = onTag(tag, html, info);
	    if (!isNull(ret)) return ret;
	
	    // 默认标签处理方法
	    if (info.isWhite) {
	      // 白名单标签，解析标签属性
	      // 如果是闭合标签，则不需要解析属性
	      if (info.isClosing) {
	        return '</' + tag + '>';
	      }
	
	      var attrs = getAttrs(html);
	      var whiteAttrList = whiteList[tag];
	      var attrsHtml = parseAttr(attrs.html, function (name, value) {
	
	        // 调用onTagAttr处理
	        var isWhiteAttr = (_.indexOf(whiteAttrList, name) !== -1);
	        var ret = onTagAttr(tag, name, value, isWhiteAttr);
	        if (!isNull(ret)) return ret;
	
	        // 默认的属性处理方法
	        if (isWhiteAttr) {
	          // 白名单属性，调用safeAttrValue过滤属性值
	          value = safeAttrValue(tag, name, value, cssFilter);
	          if (value) {
	            return name + '="' + value + '"';
	          } else {
	            return name;
	          }
	        } else {
	          // 非白名单属性，调用onIgnoreTagAttr处理
	          var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
	          if (!isNull(ret)) return ret;
	          return;
	        }
	      });
	
	      // 构造新的标签代码
	      var html = '<' + tag;
	      if (attrsHtml) html += ' ' + attrsHtml;
	      if (attrs.closing) html += ' /';
	      html += '>';
	      return html;
	
	    } else {
	      // 非白名单标签，调用onIgnoreTag处理
	      var ret = onIgnoreTag(tag, html, info);
	      if (!isNull(ret)) return ret;
	      return escapeHtml(html);
	    }
	
	  }, escapeHtml);
	
	  // 如果开启了stripIgnoreTagBody，需要对结果再进行处理
	  if (stripIgnoreTagBody) {
	    retHtml = stripIgnoreTagBody.remove(retHtml);
	  }
	
	  return retHtml;
	};
	
	
	module.exports = FilterXSS;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by liukai on 16/8/15.
	 */
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var create = function create(options) {
	  var message = options.message;
	  var parentdiv = $('<div></div>');
	  parentdiv.attr('id', 'alert-pop');
	  parentdiv.appendTo('.main-header');
	
	  parentdiv.html(Handlebars.templates['page-alert']({
	    message: message,
	    success: options.success ? true : false,
	    fail: options.fail ? true : false
	  }));
	
	  setTimeout(function () {
	    $('#alert-pop').remove();
	  }, 2000);
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var create = function create(options) {
	  var parentdiv = $('<div></div>');
	  parentdiv.attr('id', 'loadingPop');
	  parentdiv.appendTo('body');
	  $('#loadingPop').html(Handlebars.templates['page-loading']());
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var tools = __webpack_require__(14);
	var create = function create(options) {
	  var $el = options.$el;
	  var meta = options.meta;
	  var fields = options.fields;
	  var operations = options.operations;
	  var groups = options.groups;
	  var titles = fields.map(function (field) {
	    return {
	      title: meta[field].label,
	      width: meta[field].width ? meta[field].width : ''
	    };
	  });
	  var list = options.list.map(function (item) {
	    return fields.map(function (field) {
	      switch (meta[field].type) {
	        case 'select':
	          meta[field].options.map(function (sub) {
	            if (item[field] == sub.value) {
	              item[field] = sub.label;
	            }
	          });
	          break;
	        case 'date':
	          item[field] = tools.getFormat(item[field], 'yyyy-MM-dd HH:mm:ss');
	          break;
	      }
	      return item[field];
	    });
	  });
	  var ops = operations && operations.map(function (operation, index) {
	    return {
	      name: operation.name,
	      className: 'operation-' + index,
	      dialog: operation.dialog
	    };
	  });
	
	  var groupList = groups && groups.map(function (group, index) {
	    return {
	      name: group.name,
	      className: group.className,
	      id: group.id
	    };
	  });
	
	  $el.html(Handlebars.templates['data-table']({
	    titles: titles,
	    list: list,
	    operations: ops,
	    groups: groupList
	  }));
	
	  operations && operations.forEach(function (operation, i) {
	    $el.find('.operation-' + i).each(function (j) {
	      $(this).click(operation.callback.bind(null, options.list[j]));
	    });
	  });
	  var checkItem = function checkItem() {
	    var itemList = [];
	    $el.find("input[name='checkBox']:checked").each(function () {
	      var item = options.list[$(this).index()];
	      itemList.push(item);
	    });
	    return itemList;
	  };
	
	  groups && groups.forEach(function (group, i) {
	    //$el.find("input[name='checkBox']").each(function(j) {
	    //  $(this).click(group.callidback.bind(null, options.list[j]));
	    //});
	    $el.find('#' + group.id).click(function () {
	      var items = checkItem();
	      group.callback(items);
	    });
	  });
	  var buttonStatus = function buttonStatus() {
	    groups.forEach(function (group, i) {
	      $el.find("input[name='checkBox']:checked").length > 0 ? $el.find('#' + group.id).removeAttr("disabled") : $el.find('#' + group.id).attr('disabled', 'true');
	    });
	  };
	  $el.find("#checkAll").click(function () {
	    $el.find("#checkReverse").prop("checked", false);
	    $el.find('input[name="checkBox"]').prop("checked", this.checked);
	    buttonStatus();
	  });
	
	  $el.find("#checkReverse").click(function () {
	    $el.find("#checkAll").prop("checked", false);
	    $el.find('input[name="checkBox"]').each(function () {
	      if ($(this).prop("checked")) {
	        $(this).prop("checked", false);
	      } else {
	        $(this).prop("checked", true);
	      }
	    });
	    $el.find("#checkAll").prop("checked", $el.find("input[name='checkBox']").length == $el.find("input[name='checkBox']:checked").length ? true : false);
	
	    buttonStatus();
	  });
	
	  $el.find("input[name='checkBox']").click(function () {
	    $el.find("#checkAll").prop("checked", $el.find("input[name='checkBox']").length == $el.find("input[name='checkBox']:checked").length ? true : false);
	    buttonStatus();
	  });
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var create = function create(options) {
	  var $el = options.$el;
	  var onFilter = options.onFilter;
	  var addFunc = options.addFunc;
	  var meta = options.meta;
	  var fields = options.fields.map(function (field) {
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
	
	  $el.html(Handlebars.templates['data-filter']({
	    fields: fields,
	    addButton: options.addButton ? options.addButton : false,
	    queryButton: options.queryButton ? options.queryButton : false
	  }));
	
	  $el.find('.filter').click(function () {
	    var paramArray = $el.find('form').serializeArray();
	    var paramObj = {};
	
	    paramArray.forEach(function (param) {
	      paramObj[param.name] = param.value;
	    });
	
	    onFilter(paramObj);
	  });
	
	  $el.find('.add').click(function () {
	    var paramArray = $el.find('form').serializeArray();
	    var paramObj = {};
	
	    paramArray.forEach(function (param) {
	      paramObj[param.name] = param.value;
	    });
	
	    addFunc(paramObj);
	  });
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var calPaginators = function calPaginators(totalPage, currentPage) {
	  var paginators = [];
	  var i;
	
	  if (totalPage > 9) {
	    if (currentPage < 5) {
	      for (i = 0; i < 9; i++) {
	        paginators.push(i + 1);
	      }
	    } else if (currentPage > totalPage - 5) {
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
	
	var create = function create(options) {
	  var $el = options.$el;
	  var total = options.total;
	  var currentPage = options.currentPage + 1;
	  var pageSize = options.pageSize;
	  var offset = currentPage * pageSize;
	  var totalPage = total % pageSize ? parseInt(total / pageSize, 10) + 1 : parseInt(total / pageSize, 10);
	  var start = (currentPage - 1) * pageSize + 1;
	  var end = offset > total ? total : offset;
	  var onSwitchPage = options.onSwitchPage;
	
	  $el.html(Handlebars.templates['data-paginator']({
	    currentPage: currentPage,
	    pageSize: pageSize,
	    total: total,
	    totalPage: totalPage,
	    start: start,
	    end: end,
	    paginators: calPaginators(totalPage, currentPage)
	  }));
	
	  $el.find('.paginator').click(function () {
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
	
	module.exports = {
	  create: create
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var tools = __webpack_require__(14);
	var create = function create(options) {
	  var $el = options.$el;
	  var meta = options.meta;
	  var onConfirm = options.onConfirm;
	  var cancelFunc = options.onCancel;
	  var fields = options.fields.map(function (field) {
	    var target = $.extend({}, meta[field], {
	      name: field,
	      value: options.list[field] ? options.list[field] : ''
	    });
	    if (target.formatDate) {
	      target.value = tools.getFormat(target.value, 'yyyy-MM-dd HH:mm:ss');
	    }
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
	      case 'email':
	        target.email = true;
	        break;
	      case 'date':
	        target.value = target.format ? tools.getFormat(target.value, target.format) : tools.getFormat(target.value, 'yyyy-MM-dd HH:mm:ss');
	        target.text = true;
	      default:
	        target.text = true;
	        break;
	    }
	
	    return target;
	  });
	
	  if ($el) {
	    var parentdiv = $el;
	  } else {
	    var parentdiv = $('<div></div>');
	    parentdiv.attr('id', 'table-body');
	    parentdiv.addClass('row');
	    parentdiv.appendTo('.data-table');
	  }
	
	  parentdiv.html(Handlebars.templates['data-dialog']({
	    fields: fields,
	    onConfirm: options.onConfirm ? true : false,
	    cancelFunc: cancelFunc ? true : false,
	    textInfo: options.textInfo ? options.textInfo : false,
	    textInfoShow: options.textInfoShow ? options.textInfoShow : false,
	    buttonHide: options.buttonHide ? true : false,
	    confirmButton: options.confirmButton ? options.confirmButton : false,
	    cancelButton: options.cancelButton ? options.cancelButton : false
	  }));
	
	  //$('#modal').click(function() {
	  //  var paramArray = parentdiv.find('form').serializeArray();
	  //  var paramObj = {};
	  //  paramArray.forEach(function(param) {
	  //    paramObj[param.name] = param.value;
	  //  });
	  //  onConfirm(paramObj);
	  //  event.preventDefault();
	  //});
	
	
	  if (cancelFunc) {
	    $('#cancelButton').click(function () {
	      event.preventDefault();
	      var paramArray = parentdiv.find('form').serializeArray();
	      var paramObj = {};
	      paramArray.forEach(function (param) {
	        paramObj[param.name] = param.value;
	      });
	      cancelFunc(paramObj);
	    });
	  }
	
	  $(function () {
	    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
	      submitSuccess: function submitSuccess($form, event) {
	        event.preventDefault();
	        var paramArray = parentdiv.find('form').serializeArray();
	        var paramObj = {};
	        paramArray.forEach(function (param) {
	          paramObj[param.name] = param.value;
	        });
	
	        options.fields.map(function (field) {
	          var _func = meta[field].voild ? meta[field].voild : false;
	          if (_func) {
	            var message = _func(paramObj[field]);
	            if (message) {
	              var helpId = '#' + field + 'help';
	              $(helpId).text(message);
	              return false;
	            }
	          }
	        });
	        console.log('12321', paramObj);
	        onConfirm(paramObj);
	      }
	    });
	  });
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by liukai on 16/8/24.
	 */
	
	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var create = function create(options) {
	  var $el = options.$el;
	  var meta = options.meta;
	
	  $el.html(Handlebars.templates['content-header']({
	    home: WUI.t('首页'),
	    paths: meta
	  }));
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var tools = __webpack_require__(14);
	var create = function create(options) {
	  if ($('#html-dialog')) {
	    $('#html-dialog').html('');
	  };
	  var message = options.message;
	  var onConfirm = options.onConfirm;
	  var cancelFunc = options.onCancel;
	
	  var parentdiv = $('<div></div>');
	  parentdiv.attr('id', 'html-dialog');
	  parentdiv.appendTo('body');
	
	  parentdiv.html(Handlebars.templates['modal-dialog']({
	    message: message ? message : false,
	    title: options.title ? options.title : false,
	    onConfirm: onConfirm ? true : false,
	    cancelFunc: cancelFunc ? true : false
	  }));
	  $('#myModal').modal('show');
	  if (onConfirm) {
	    $('#confirmButton').click(function () {
	      onConfirm();
	    });
	  }
	  if (cancelFunc) {
	    $('#cancelButton').click(function () {
	      cancelFunc();
	    });
	  }
	  return {
	    show: function show() {
	      $('#myModal').modal('show');
	    },
	    hide: function hide() {
	      $('#myModal').modal('hide');
	    }
	  };
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var Handlebars = __webpack_require__(2);
	var templates = __webpack_require__(13);
	
	var tools = __webpack_require__(14);
	var modalDialog = __webpack_require__(32);
	var create = function create(options) {
	  var meta = options.meta;
	  var onConfirm = options.onConfirm;
	  var cancelFunc = options.onCancel;
	  var fields = options.fields.map(function (field) {
	    var target = $.extend({}, meta[field], {
	      name: field,
	      value: options.list[field] ? options.list[field] : ''
	    });
	    if (target.formatDate) {
	      target.value = tools.getFormat(target.value, 'yyyy-MM-dd HH:mm:ss');
	    }
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
	
	  if ($('#html-dialog')) {
	    $('#html-dialog').html('');
	  };
	  modalDialog.create({
	    title: dialogPopTitle ? dialogPopTitle : false
	  });
	  $('.modal-footer').remove();
	  var parentdiv = $('.modal-body');
	
	  parentdiv.html(Handlebars.templates['data-dialog']({
	    fields: fields,
	    onConfirm: options.onConfirm ? true : false,
	    cancelFunc: cancelFunc ? true : false,
	    textInfo: options.textInfo ? options.textInfo : false,
	    textInfoShow: options.textInfoShow ? options.textInfoShow : false,
	    confirmButton: options.confirmButton ? options.confirmButton : false,
	    cancelButton: options.cancelButton ? options.cancelButton : false
	  }));
	
	  $('#modal').click(function () {
	    var paramArray = parentdiv.find('form').serializeArray();
	    var paramObj = {};
	    paramArray.forEach(function (param) {
	      paramObj[param.name] = param.value;
	    });
	    onConfirm(paramObj);
	    event.preventDefault();
	  });
	  if (cancelFunc) {
	    $('#cancelButton').click(function () {
	      event.preventDefault();
	      var paramArray = parentdiv.find('form').serializeArray();
	      var paramObj = {};
	      paramArray.forEach(function (param) {
	        paramObj[param.name] = param.value;
	      });
	      cancelFunc(paramObj);
	    });
	  }
	  $('#myModal').modal('show');
	
	  return {
	    show: function show() {
	      $('#myModal').modal('show');
	    },
	    hide: function hide() {
	      $('#myModal').modal('hide');
	    }
	
	  };
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Created by liukai on 16/9/19.
	 */
	'use strict';
	
	var create = function create(options) {
	
	  // Instance the tour
	  var tour = new Tour({
	    steps: options.meta
	  });
	
	  // Initialize the tour
	  tour.init();
	
	  // Start the tour
	  tour.start(true);
	};
	
	module.exports = {
	  create: create
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=wui-web.js.map