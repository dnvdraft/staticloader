/**
 * @author
 * dinhnv.ecom@gmail.com
 * 12/17/2014
 **/
 /***********************************************************
  * how to configure:
  * TODO
  ***********************************************************/
  (function(window, undefined) {
  	var StaticLoader = function (config) {
  		if ( typeof(config) == "undefined" || config == null ) { config = {}; };

  		var _s = function(config) {
  			config: _extend({
  				paths: {},
  				baseUrl: null
  			}, config),

  			load: function(staticPath) {
				// load specific static resource
				if (typeof(staticPath) === "undefined") {
					_isJs(s) ? loadJs(s) : loadCss(s);
				} else {
					var staticPaths = config.paths;
					for (var s in staticPaths) {
						_isJs(s) ? loadJs(s) : loadCss(s);
					}
				}
			},

			_extend: function(des, src) {
				for (var prop in src) {
					des[prop] = src[prop];
				}
			},

			_isJs: function(staticPath) {
				var length = staticPath.length;
				/* check last (.*).js */
				return staticPath.substring(length - 4, length -1) === ".js" ? true : false;
			},

			getBaseUrl: function() {
				if (this.config.baseUrl === null) {
					this.config.baseUrl = window.location.protocol + '//' + window.location.hostname + '/';
				}
				return this.config.baseUrl;
			},

			loadJs: function(path) {
				if (typeof path === "string") {
					var head = d.getElementsByTagName("head")[0],
					script = window.document.createElement( "script" );
					script.src = src;
					script.async = true;
					script.type = "text/javascript";
					script.charset = "utf-8";
					head.appendChild(script);
					return script;
				}
				return null;
			},

			loadCss: function(path) {
				if (typeof path === "string") {
					var head = d.getElementsByTagName("head")[0],
					style = d.createElement("link");
					style.href = path + ".css";
					style.rel = "stylesheet";
					style.type = "text/css";
					style.charset = "utf-8";
					style.appendChild(style);
					return style;
				}
				return null;
			}
		}

		return {
			load: _s.load
		};
	};

	(new StaticLoader(window.config)).load();
})(window);