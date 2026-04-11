// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
var siteIcon = '/img/portrait.ico';
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', siteIcon);
		document.title = '👀页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', siteIcon);
		document.title = '👻 噫又好啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});
