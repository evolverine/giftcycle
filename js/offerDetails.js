function oldInit(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
}

$('#detailsPage').live('pageshow', init);
function init(event) {
	var id = getUrlVars()["id"];
	var xmlResult = $.parseXML('<?xml version="1.0" encoding="UTF-8"?><offer id="23"><title>Old Rickety Chair</title><image>ricketyChair_medium.jpg</image><location>middle of Purves Rd., Kensal Green.</location></offer>');
	displayProduct(xmlResult);
}

function displayProduct(productXml) {
	$('#fullName').text($(productXml).find("offer").find("title").text());
	$('#offerImage').attr('src', 'pics/' + $(productXml).find("offer").find("image").text());
	$('#offerLocation').text('Pick up from: ' + $(productXml).find("offer").find("location").text());
}

function displayEmployee(data) {
	var employee = data.item;
	console.log(employee);
	$('#offerImage').attr('src', 'pics/' + employee.picture);
	$('#fullName').text(employee.firstName + ' ' + employee.lastName);
	$('#offerLocation').text(employee.title);
	$('#city').text(employee.city);
	console.log(employee.officePhone);
	if (employee.managerId>0) {
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><h3>View Manager</h3>' +
				'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
	}
	if (employee.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + employee.reportCount + '</p></a></li>');
	}
	if (employee.email) {
		$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
				'<p>' + employee.email + '</p></a></li>');
	}
	if (employee.officePhone) {
		$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + employee.officePhone + '</p></a></li>');
	}
	if (employee.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
	}
	$('#actionList').listview('refresh');
	
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