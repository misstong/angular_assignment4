(function(){
  'use strict';

  angular.module('MenuApp')
      .component('items',{
        templateUrl: "template/items.component.html",
        bindings: {
          itemsInCategory: '<'
        }
      })
})();
