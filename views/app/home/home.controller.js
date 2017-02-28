(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  /* @ngInject */
  function HomeController() {
    var vm = this;
    vm.maxAmount=1000;
    vm.currentAmount=0;
    vm.amountModel=50;

    vm.addAmount = function() {
        vm.amountModel=parseInt(vm.amountModel);
        if(vm.currentAmount+vm.amountModel <= vm.maxAmount) {
            vm.currentAmount += vm.amountModel;
        } else {
            alert('Max Amount should be $'+ parseInt(vm.maxAmount-vm.currentAmount));
        }
    }
    
    vm.fbShare = function() {
        FB.ui({
            method: 'feed',
            link: 'https://imvikaspancholi.firebaseapp.com/',
            name: 'Yay, I donated',
            message: 'Check out this link!'
        }, function(response){console.log(response)});
    }

    vm.showMsg = function() {
        alert('Saved');
    }
  }
  
})();