({
	handleTabSelect: function(component,event,helper) {
		
		console.info("current tab: " + component.get("v.selectedTabId") );		
		// get tab id from event
		console.info( JSON.stringify(event.getSource()) ); 
		
		const selectedTabId = event.getSource().get('v.id');
		console.info("tab clicked: " + selectedTabId + " in BoatDetail"); 
		// set tab id of tbs
		component.find("detailTabset").set("v.selectedTabId", selectedTabId ) 

	}, 
	
	onBoatSelected: function(component,event,helper){

		// set boat Id from BoatTile
		const boat = event.getParam("boat");
		console.log( "boat id BoatDetails: " + JSON.stringify(boat) );				
		component.set("v.Id",boat.id);				
		//component.set("v.boat",boat);
		// reload record using lightning data service 
		let serviceRecordData = component.find("service");        
		serviceRecordData.set("v.recordId",boat.Id);
        serviceRecordData.reloadRecord();
		
	},

	onRecordUpdated: function(component,event,helper){

		console.log( "recordUpdate in BoatDetails");

	}

})