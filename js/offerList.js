var serviceURL = "http://localhost/directory/services/";
var offersListName = 'offersList';
var offersListComp;

$('#offerListPage').bind('pageinit', function(event) {
	offersListComp = $('#' + offersListName);
	$.ajax({
		url: 'allOffers.xml',
		dataType: 'xml',
		success: populateOffers
	});
});

function populateOffers(offersXML)
{
	$('#'+offersListName+' li').remove();
	
	$(offersXML).find("offer").each(function() {
		populateSingleOffer($(this));
	});
}

function populateSingleOffer(offerNode) {
	var expirationDate = new Date(0);
	expirationDate.setUTCSeconds(offerNode.find("expires").text());
	
	offersListComp.append('<li><a href="offerDetails.html?id=' + offerNode.attr("id") + '">' +
			'<img src="pics/' + offerNode.find("image").text() + '"/>' +
			'<h4>' + offerNode.find("title").text() + '</h4>' +
			'<p>' + offerNode.find("location").text() + '</p>' +
			'<span class="ui-li-count">' + $.format.date(expirationDate, "dd MMMM") + '</span></a></li>');
	offersListComp.listview('refresh');
}