(function(w) {
  var document = w.document;
  // Construct
  function Gabin(selector) {
	  if (!selector) {
		return [];
	  }
	  console.log(selector);
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
  var gabin = {
  };
  gabin.extend = function(a, b) {
	  for (var key in b) {
		  a[key] = b[key];
	  }
	  return a;
  };
  w.$ = w.Gabin = Gabin;
} (window) );
