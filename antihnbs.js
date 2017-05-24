

var sanitize = (function() {
	/* take that! nobody shapes my behavior! ... except my wife. */
	Array.prototype.forEach.call(document.getElementsByClassName('score'), function(e) { e.innerHTML = '1 point';});
	Array.prototype.forEach.call(document.getElementsByClassName('pagetop'), function(e) { e.innerHTML = e.innerHTML.replace(/\(\d+\)/, '(1)');});
	Array.prototype.forEach.call(document.querySelectorAll('div.comment span'), function(e) { e.className = 'c00';});
})();

