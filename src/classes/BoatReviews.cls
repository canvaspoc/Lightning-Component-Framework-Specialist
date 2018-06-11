global class BoatReviews {
	
	@AuraEnabled global static BoatReview__c[] getAll( Id boatId ) {

		return [SELECT Id,
						Name,
						Comment__c,
						Rating__c,
						LastModifiedDate,
						CreatedDate,
						CreatedBy.Name,
						CreatedBy.SmallPhotoUrl,
						CreatedBy.CompanyName
						FROM BoatReview__c 
							WHERE Boat__c = :boatId 
								ORDER BY CreatedDate DESC 
									LIMIT 1000];

	}
}