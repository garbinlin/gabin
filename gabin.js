(function() {
  // Construct
  function Gabin() {
	  
  }
  var gabin = {
  };
  gabin.extend = function(a, b) {
	  for (var key in b) {
		  a[key] = b[key];
	  }
	  return a;
  }
} () );
