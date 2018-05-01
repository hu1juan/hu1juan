'use strict';

app.service('ContactService', ['$http', 'NEW_CONST', "$localStorage",
    function($http, NEW_CONST, $localStorage){
        return{
            getAuth : getAuth,
            getContactList : getContactList,
            getFamilyInfo : getFamilyInfo,
            getRelationship : getRelationship,
            getContactInformation : getContactInformation
        }
        //functions
        function getAuth(){
            return $http.post(NEW_CONST.END_POINT + "/Login?username="+NEW_CONST.USERNAME + "&password="+NEW_CONST.PASSWORD)
            .then(function (response) {
                $localStorage.token = response.data;
            });
        };

        function getContactList(){
            return $http.get(NEW_CONST.END_POINT + "/contacts/FamilyListGet?startWith=*&byPassFilter=true");
        }

        function getFamilyInfo(famID){
            return $http.get(NEW_CONST.END_POINT + "/contacts/FamilyInfoGet?familyId=" + famID);
        }

        function getRelationship(famID){
            return $http.get(NEW_CONST.END_POINT + "/contacts/RelationshipGet?familyID=" + famID);
        }

        function getContactInformation(famID){
            return $http.get(NEW_CONST.END_POINT+ "/contacts/ContactFamilyInfoGet?familyId="+ famID);
        }
}]);