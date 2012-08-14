$('#settings_freegleGroupsPage').live('pageshow', init);
function init(event) {
	$("#freegleGroupsList").append('<li>Walthamstow</li>');
	$("#freegleGroupsList").append('<li>Islington</li>');
}