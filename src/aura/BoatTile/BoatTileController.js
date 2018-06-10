({
	onBoatClick : function(component, event, helper) {
        var BoatSelect = component.getEvent("BoatSelect");
		var boatId = event.getSource().get("v.name");
		console.info("fire event with boat id: " + boatId + " from BoatTile");
        BoatSelect.setParams({
            "boatId" : boatId
        });
        BoatSelect.fire();
    }
})