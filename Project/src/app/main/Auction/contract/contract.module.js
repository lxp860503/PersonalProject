/**
 * Created by haomo on 2017/6/30.
 */
(function ()
{
  'use strict';

  angular
    .module('app.auction.contract', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider)
  {
    $stateProvider
    //审计
      .state('app.contract', {
        url: '',
        abstract: true
      })
      .state('app.contract.guide', {
        url: '/contract/contractGuide',
        views: {
          'content@app': {
            templateUrl: 'app/main/Auction/contract/contractGuide.html',
            //controller: 'GuideController as vm'
          }
        },
        resolve: {
          SampleData: function (msApi) {
            return msApi.resolve('sample@get');
          }
        }
      })
      .state('app.contract.establish', {
        url: '/contract/contractEstablish',
        views: {
          'content@app': {
            templateUrl: 'app/main/Auction/contract/contractEstablish.html',
            controller: 'EstablishController as vm'
          }
        },
        resolve: {
          SampleData: function (msApi) {
            return msApi.resolve('sample@get');
          }
        }
      })
      .state('app.contract.circulationreturns', {
        url: '/contract/CirculationReturns',
        views: {
          'content@app': {
            templateUrl: 'app/main/Auction/contract/CirculationReturns.html',
            controller: 'CirculationReturnsController as vm'
          }
        },
        resolve: {
          SampleData: function (msApi) {
            return msApi.resolve('sample@get');
          }
        }
      });

    // Api
    // msApiProvider.register('cards', ['app/data/cards/cards.json']);
  }

})();
