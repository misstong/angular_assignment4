(function(){
  'use strict';

  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    this.getAllCategories = function(){
      return $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(
        function(result){
          var foundItems = result.data;
          console.log("found items:");
          console.log(foundItems);
          return foundItems;
        }
      )
    };

    this.getItemsForCategory = function(categoryShortName){
      return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json',{params: {category: categoryShortName}}).then(function(result){
        var foundItems = result.data.menu_items;
        return foundItems;
      })
    };
  }


})();
