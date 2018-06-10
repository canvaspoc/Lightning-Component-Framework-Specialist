global class BoatSearchResults {
	
	@AuraEnabled
	global static Boat__c[] getBoats( String boatTypeId ) {

		system.debug('BoatTypeId: ' + boatTypeId);
		if( String.isEmpty(boatTypeId) ){
			return [SELECT Id, Name, BoatType__c, Picture__c, Contact__r.Name FROM Boat__c ORDER BY Name LIMIT 5000];
		}else{
			return [SELECT Id, Name, BoatType__c, Picture__c, Contact__r.Name FROM Boat__c WHERE BoatType__c = :boatTypeId ORDER BY Name LIMIT 5000];
		}
		

	}

}