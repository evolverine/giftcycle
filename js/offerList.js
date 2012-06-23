var serviceURL = "http://localhost/directory/services/";
var offersListName = 'offersList';
var offersList;

$('#offerListPage').bind('pageinit', function(event) {
	offersList = $('#' + offersListName);
	getOffers();
});

function getOffers() {
	$('#'+offersListName+' li').remove();
	offersList.append('<li><a href="offerDetails.html?id=' + "23" + '">' +
			'<img src="pics/' + "ricketyChair_small.jpg" + '"/>' +
			'<h4>' + "Old rickety chair" + '</h4>' +
			'<p>' + "pick up from Purves Rd." + '</p>' +
			'<span class="ui-li-count">' + "3 days left" + '</span></a></li>');
	offersList.listview('refresh');
}