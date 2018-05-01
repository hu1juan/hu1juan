'use strict';

app.controller('ContactsCtrl', ["$scope", "ContactService", "NEW_CONST", "$location", "$state",
    function ($scope, ContactService, NEW_CONST, $location, $state) {
        var vm = this;
        vm.contactList = [];
        vm.letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

        ContactService.getAuth().then(function (response){
            ContactService.getContactList()
            .then(function(response){
                vm.contactList = response.data.FamilyList;
            });
        });

        vm.selectedContact = function (contact){
            let param = contact.FamilyID;
            $state.go('app.records', {contactID: param});
        }
}]);