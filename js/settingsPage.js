function onSaveGroupButtonPressed()
{
	saveSelectedGroup();
	window.history.back();
}

function saveSelectedGroup()
{
	var selectedGroup = getLastSelectedGroup();
	if(selectedGroup)
		window.localStorage.setItem("activeFreegleGroup", selectedGroup);
}

function getLastSelectedGroup()
{
	var selectedGroup = null;
	
	$("input:checked").each(
			function(index, element) {
				selectedGroup = element.value;
			}
	);
	
	return selectedGroup;
}