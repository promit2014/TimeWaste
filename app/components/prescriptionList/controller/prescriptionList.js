angular.module('TimeWaste')
    .component('prescriptionList', {
        templateUrl: '/components/prescriptionList/templates/prescriptionListView.html',
        controller: prescriptionListController,
        bindings: {
            prescriptions: '=',
            selected: '=',
            showflag: '='
        }
    });

function prescriptionListController($scope) {
    this.$onInit = function() {
        console.log("activePrescription ---->", this.selected);
        console.log("showPrescriptionDetailFlag ---->", this.showflag);
    }
}
