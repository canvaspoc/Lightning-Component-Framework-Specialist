({

	doInit: function(component, event, helper) {

		// IMPORTANT:
		// CAN NOT USE LOGIC IN HELPER CLASS IN ORDER TO PASS CHALLENGES!
		//
		// // get boat types for select option
		// helper.getBoatTypeOptions(component);
		// // calculate if render new button 
		// helper.showNewButton(component);

		// retrive boat types from apex
		let action = component.get("c.getBoatTypes");		
		// handle callback
		action.setCallback(this, function(result){
            let boatTypes = result.getReturnValue();
            console.log(boatTypes);
            component.set("v.boatTypes", boatTypes);            
        });
		$A.enqueueAction(action);
		// show new button or not depending on context
		component.set("v.showNewButton", $A.get("e.force:createRecord"));

	},

	handleBoatTypeChange: function(component, event, helper) {
		
		// get selected option, assign it to component attrribute
		const selectedOption = component.find("boatSelectionId").get("v.value");		
		console.info("selected boat type: " +  selectedOption);
		// set attribute
		component.set("v.selectedBoatType",selectedOption);		

	},

	onFormSubmit: function(component, event, helper){
		
		// get boatTypeId from select
		const selectedOption = component.get("v.selectedBoatType");
		console.info("search function started with: " + selectedOption);
		// get event cmp.getEvent("sampleComponentEvent");
		let formSubmit = component.getEvent("FormSubmit"); 		
		// set event parameters
        formSubmit.setParams({"formData":
                            	{"boatTypeId" : selectedOption}
		});
		console.info("event ready to be fired in boatSearchForm");		
		// fire event
		formSubmit.fire();
		
	},

	handleNew: function(component, event, helper){

		const selectedOption = component.get("v.selectedBoatType");
		console.info("new function started with: " + selectedOption);		
		//$A.util.isEmpty(selectedOption)?helper.showToast(component, "Error", "Error", "Please select Boat Type"):helper.createBoatRecord(component,selectedOption);
		// lunch record creation modal
		let createRecordEvent = $A.get("e.force:createRecord");   
		// set object     
		createRecordEvent.setParams({
			"entityApiName": "Boat__c"
		});		
		// set predefined attributes to modal
		if(!$A.util.isEmpty(selectedOption)){
			createRecordEvent.setParams({			
				"defaultFieldValues": {
					"BoatType__c" : selectedOption		
				}
			});			
		}
		// fire modal
		createRecordEvent.fire();


	}
		
})