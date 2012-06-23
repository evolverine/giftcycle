var serviceURL = "http://localhost/directory/services/";
var employees;
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

function getEmployeeListOld() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="offerDetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}