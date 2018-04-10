$(document).ready(function(){
	var Root_Url = window.location.href;
	var apiLink = Root_Url + "api/whoami";
	$("#api-link").text(apiLink);
	var links = '<a target="_blank" href="' + apiLink + '">Try link</a>'
	$("#try-it").append(links);
});