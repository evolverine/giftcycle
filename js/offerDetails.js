function oldInit(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
}

$('#detailsPage').live('pageshow', init);
function init(event) {
	var id = getUrlVars()["id"];
	$.ajax({
		url:'fakeOffer_' + id + '.xml',
		dataType: 'xml',
		success: displayProduct
	});
}

function displayProduct(productXml) {
	$('#fullName').text($(productXml).find("offer").find("title").text());
	$('#offerImage').attr('src', 'pics/' + $(productXml).find("offer").find("image").text());
	$('#offerLocation').text($(productXml).find("offer").find("location").text());
	$('#offerDescription').text($(productXml).find("offer").find("description").text());
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}