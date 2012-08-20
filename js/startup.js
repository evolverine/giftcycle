function onDeviceReady()
{
	$.mobile.showPageLoadingMsg();
	
	google.load("feeds", "1", {callback:onGoogleFeedsReadyToUse});
}

function onGoogleFeedsReadyToUse()
{
	var feed = new google.feeds.Feed("http://direct.ilovefreegle.org/rss.php?group=freegle_redbridge");
    feed.setNumEntries(200);
    feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
    feed.includeHistoricalEntries();
    feed.load(offersLoaded);
}