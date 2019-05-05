(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categories',{
    templateUrl: "template/categories.component.html",
    bindings: {
      categoriesList: '<'
    }
  })
})();
