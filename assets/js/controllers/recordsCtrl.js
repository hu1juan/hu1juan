'use strict'


app.controller('RecordsCtrl', ["$scope", "ContactService", "NEW_CONST", "$location", "$uibModal", "$stateParams", 
    function ($scope, ContactService, NEW_CONST, $location, $uibModal, $stateParams) {
        var vm = this;
        vm.navTabs = ["SUMMARY","CLIENTS","LOANS","INSURANCE","FINANCIALS","WORKFLOW","RECORDS"];
        vm.clientList = [];
        vm.relationship = [];
        vm.contactInformation = [];
        vm.tabIndex = 0;
        vm.isCollapsed = true;
        
        ContactService.getAuth().then(function (response){
            let famID = $stateParams.contactID;
            ContactService.getFamilyInfo(famID)
            .then(function (response){
                vm.clientList = response.data;
            });
            ContactService.getRelationship(famID)
            .then(function (response){
                vm.relationship = response.data;
            });
            ContactService.getContactInformation(famID)
            .then(function (response){
                vm.contactInformation = response.data;
            });
        });
        
        vm.selectedTab = function(i){
            vm.tabIndex = i;
        }


        //modal
        vm.addRelationship = function(){
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title-bottom',
                ariaDescribedBy: 'modal-body-bottom',
                templateUrl: 'assets/views/modal/relationship.modal.html',
                size: 'md',
            });
        }
        vm.addClient = function(){
            // $uibModal.open({
            //     animation: true,
            //     ariaLabelledBy: 'modal-title-bottom',
            //     ariaDescribedBy: 'modal-body-bottom',
            //     templateUrl: 'assets/views/modal/client.modal.html',
            //     size: 'lg',
            // });
        }
}]);