/**
 * Created by haomo on 2017/6/30.
 */
(function ()
{
  'use strict';

  angular
    .module('app.auction', [
      'app.auction.contract'
    ])
    .config(config);

  /** @ngInject */
  function config(msNavigationServiceProvider,$translatePartialLoaderProvider,msApiProvider)
  {

    // Translation
    $translatePartialLoaderProvider.addPart('app/main/Auction');

    // Api
    msApiProvider.register('sample', ['app/data/sample/sample.json']);


    // Navigation
    msNavigationServiceProvider.saveItem('auction', {
      title : '',
      group : true,
      weight: 2
    });
    msNavigationServiceProvider.saveItem('auction.contract', {
      title: '合同管理',
      icon  : 'icon-table-large',
      weight: 1
    });
    msNavigationServiceProvider.saveItem('auction.contract.establish', {
      title : '合同创建',
      icon  : 'icon-content-copy',
      state : 'app.contract.establish'
    });
    msNavigationServiceProvider.saveItem('auction.contract.guide', {
      title : '合同导览',
      icon  : 'icon-content-copy',
      state : 'app.contract.guide'
    });
    msNavigationServiceProvider.saveItem('auction.contract.circulationreturns', {
      title : '流转/退货',
      icon  : 'icon-content-copy',
      state : 'app.contract.circulationreturns'
    });




  }
})();
