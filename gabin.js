(function(w) {
  var document = w.document;
  // Construct
  function Gabin(selector) {
	  if (!selector) {
		return [];
	  }
	  // split space
	  var selectors = selector.split(/\s/);
	  var target = null;
	  for (var i = 0; i < selector.length; i++) {
		  	
	  }
	  function select(select) {
		select = select || "";
		select = Gabin.trim(select);
		if (select.indexOf("#") === 0) {
			return document.getElementById(select);
		} else if (select.indexOf(".") === 0) {
			return document.getElementsByClassName(select);
		}
	  }
  }
  Gabin.trim = function(str) {
	if (typeof str === "string" && str.trim) {
		return str.trim();
	}
	return (str || "").toString().replace(/^\s+|\s$/g, "");
  };
  Gabin.parseCookie = function(str) {
    str = str || document.cookie || "";
	var json = {
	};
	var list = str.split("; ");
	for (var i = 0; i < list.length; i++) {
		var one = list[i];
		var p = one.indexOf("=");
		var name = one.substring(0, p);
		var value = one.substring(p + 1);
		value = decodeURIComponent(value);
		json[name] = value;
	}
	return json;
  };
  Gabin.parseQueryString = function(str) {
    str = str || location.search;
	str = str.replace("?", "&");
	var json = {
	};
	var list = str.split("&");
	for (var i = 0; i < list.length; i++) {
		var one = list[i] || "";
		var p = one.indexOf("=");
		var name = one.substring(0, p);
		var value = one.substring(p + 1);
		json[name] = value;
	}
	return json;
  };
  Gabin.getUrlParam = function(key) {
    var json = this.parseQueryString();
	return json[key] || "";
  };
  Gabin.getCookie = function(key) {
    var cookieJson = this.parseCookie();
	return cookieJson[key] || "";
  };
  var gabin = {
  };
  gabin.extend = function(a, b) {
	  for (var key in b) {
		  a[key] = b[key];
	  }
	  return a;
  };
  w.$ = w.Gabin = Gabin;
} (window));
