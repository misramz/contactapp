function config ($stateProvider $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('root',{
    abstract: true,
    templateUrl: 'templates/layout.tpl.html'
  })

}

config.$inject = ['$stateProvider',' $urlRouterProvider'];
export { config };
