function onDeviceReady()
{
	$.mobile.showPageLoadingMsg();
	
	google.load("feeds", "1", {callback:onGoogleFeedsReadyToUse});
}

function onGoogleFeedsReadyToUse()
{
	var feed = new google.feeds.Feed(getActiveFreegleGroup());
    feed.setNumEntries(200);
    feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
    feed.includeHistoricalEntries();
    feed.load(offersLoaded);
}

function getActiveFreegleGroup()
{
	var savedGroup = window.localStorage.getItem("activeFreegleGroup");
	var groupToLoad = savedGroup ? savedGroup : defaultFreegleGroup;
	return groupToLoad;
}