({
	doInit: function(component,event,helper){

		helper.onInit(component,event);
		
	},

	onSave : function(component, event, helper){
				
		// create boatreview__c record using lsd
		component.find("service").saveRecord(function(saveResult) {
			if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {

				// Success! Prepare a toast UI message
				var resultsToast = $A.get("e.force:showToast");
				resultsToast.setParams({
					"title": "Boat Review Posted",
					"message": "Thanks for the feedback.",
					"type": "success"
				});
				// Update the UI: close panel, show toast, refresh account page
				$A.get("e.force:closeQuickAction").fire();
				resultsToast.fire();
				
				// fire event to switch to Reviews Tab
				let BoatReviewAdded=component.getEvent("BoatReviewAdded");
				BoatReviewAdded.fire();
			
			}
			else if (saveResult.state === "INCOMPLETE") {
				console.info("User is offline, device doesn't support drafts.");
			}
			else if (saveResult.state === "ERROR") {
				console.info('Problem saving record, error: ' + JSON.stringify(saveResult.error));
			}
			else {
				console.info('Unknown problem, state: ' + saveResult.state +', error: ' + JSON.stringify(saveResult.error));
			}
		});

		// helper.onInit();  WHERE SHOULD I PUT THIS ONE???? 

	},
	
	onRecordUpdated: function(component,event,helper){
		console.info("recordUpdate of AddBoatReview");
	}

})