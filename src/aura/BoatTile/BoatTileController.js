({
	onBoatClick : function(component, event, helper) {

        const boatId = event.getSource().get("v.name");
        console.info("fire event with boat id: " + boatId + " from BoatTile");
        
        // fire boatId for boatSearchResult to handle
        let BoatSelect = component.getEvent("BoatSelect");		
        BoatSelect.setParams({
            "boatId" : boatId
        });
        BoatSelect.fire();

        // fire boat object for boatDetails to handle
        const myBoat = component.get("v.boat");      
        // let BoatSelected = component.getEvent("BoatSelected");		
        let BoatSelected = $A.get('e.c:BoatSelected');
        BoatSelected.setParams({
            "boat" : myBoat
        });
        BoatSelected.fire();
        console.info("fire event with boat: " + JSON.stringify(myBoat) + " from BoatTile");

    }
})