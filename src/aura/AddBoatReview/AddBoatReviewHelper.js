({
	onInit : function(component,event) {
		
		// init lightning data service record creation
		component.find("service").getNewRecord(
            "BoatReview__c", // objectApiName
            null, // recordTypeId
            false, // skip cache?
            $A.getCallback(function() {
                let rec 	= component.get("v.boatReview");
				let error 	= component.get("v.recordError");
								
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }else{
					// get boat id and set to recordData 	
					let currentBoat = component.get("v.boat");
					console.info( "creation boatReview record for boat: " + currentBoat.Id + " in addBoatReview" );
					// set boat review record
					component.set("v.simpleNewBoatReview.Boat__c",currentBoat.Id);				   
					// component.set("v.boatReview.Boat__c",currentBoat.Id);                    
				}
				
            })
		);

	}

})