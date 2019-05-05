(function(){
  'use strict';

  angular.module('MenuApp')
        .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home',{
          url: '/',
          templateUrl: 'template/home.template.html'
        })

        .state('categories', {
          url: '/categories',
          templateUrl: 'template/categories.template.html',
          controller: 'CategoriesController as ctgCtrl',
          resolve: {
            categories: ['MenuDataService',function(MenuDataService){
              return MenuDataService.getAllCategories().then(function(result){
                return result;
              })
            }]
          }
        })

        .state('items',{
          url: '/items/{shortName}',
          templateUrl: 'template/items.template.html',
          controller: 'ItemsController as iCtrl',
          resolve: {
            items: ['$stateParams','MenuDataService',function($stateParams,MenuDataService){
              return MenuDataService.getItemsForCategory($stateParams.shortName).then(function(result){
                return result;
              })
            }]
          }
        })
  }
})();
