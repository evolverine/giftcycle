var offersListName = 'offersList';
var offersListComp;

$('#offerListPage').bind('pageinit', function(event) {
	offersListComp = $('#' + offersListName);
});

function onDeviceReady()
{
	$.mobile.showPageLoadingMsg();
	
	google.setOnLoadCallback(onGoogleFeedsReadyToUse);
	google.load("feeds", "1");
}

function onGoogleFeedsReadyToUse()
{
	var feed = new google.feeds.Feed("http://direct.ilovefreegle.org/rss.php?group=freegle_redbridge");
    feed.setNumEntries(200);
    feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
    feed.includeHistoricalEntries();
    feed.load(offersLoaded);
}

function offersLoaded(result) {
	$.mobile.hidePageLoadingMsg();
	
	if (!result.error)
		populateOffers($(result.xmlDocument));
	else
		itemsRequestError();
}

function populateOffers(offersXML)
{
	$('#'+offersListName+' li').remove();
	offersXML.find("item").each(populateSingleOffer);
	offersListComp.listview('refresh');
}

function populateSingleOffer() {
	var offerNode = $(this);
	
	offersListComp.append('<li><a href="' + offerNode.find("link").text() + '" rel="external">' +
			'<h4>' + offerNode.find("title").text() + '</h4>' +
			'<p>' + offerNode.find("location").text() + '</p>' +
			'<span class="ui-li-count">' + $.format.date(offerNode.find("pubDate").text(), "dd MMMM") + '</span></a></li>');
}

function itemsRequestError(jqXHR, textStatus, errorThrown) {
	offersListComp.append("Oops, error loading the items. Please make sure your network is working properly. Error: " + errorThrown);
}