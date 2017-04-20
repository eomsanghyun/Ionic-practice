'use strict';

angular.module('conFusion.services',['ngResource'])
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
      
                this.getDishes = function(){
                    
                    return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                    
                };  
    
                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function() {

                    return $resource(baseURL+"promotions/:id",null, {'update':{method:'PUT' }});
                    
                };
        }])


        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            return $resource(baseURL+"leadership/:id");
    
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
    
            return $resource(baseURL+"feedback/:id");
    
        }])

        .factory('favoriteFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
                var favFac = {};
                var favorites = [];

                favFac.addToFavorites = function (index) {
                    for (var i = 0; i < favorites.length; i++) {
                        if (favorites[i].id == index)
                            return;
                    }
                    favorites.push({id: index});
                };

                return favFac;
        }])

;