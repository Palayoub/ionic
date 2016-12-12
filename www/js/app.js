//Script!!!
//
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home',{
  url:'/home',
  templateUrl:'templates/home.html',
  })

  $stateProvider.state('departement',{
  url:'/departement',
  templateUrl:'templates/departement.html',
  })

  $stateProvider.state('service',{
  url:'/service',
  templateUrl:'templates/service.html',
  })

  $stateProvider.state('option',{
  url:'/option',
  templateUrl:'templates/option.html',
  })

  $stateProvider.state('certification',{
  url:'/certification',
  templateUrl:'templates/certification.html',
  })

  $stateProvider.state('devoirs',{
  url:'/devoirs',
  templateUrl:'templates/devoirs.html',
  })

  $stateProvider.state('etudiants',{
  url:'/etudiants',
  templateUrl:'templates/etudiants.html',
  })

  $stateProvider.state('bourses',{
  url:'/bourses',
  templateUrl:'templates/bourses.html',
  })

  $stateProvider.state('conseils',{
  url:'/conseils',
  templateUrl:'templates/conseils.html',
  })

  $stateProvider.state('commission',{
  url:'/commission',
  templateUrl:'templates/commission.html',
  })

  $stateProvider.state('representants',{
  url:'/representants',
  templateUrl:'templates/representants.html',
  })

  $stateProvider.state('recherche',{
  url:'/recherche',
  templateUrl:'templates/recherche.html',
  })

  $stateProvider.state('about',{
  url:'/about',
  templateUrl:'templates/about.html',
  })
  $urlRouterProvider.otherwise('/home')
})

/*

.controller('ListController', ['$scope', '$http', function($scope, $http){
    $http.get('js/data.json').success(function(data){
      $scope.artists = data;
    });
}])

*/
/*
.controller('EventsCtrl', function($scope) {
 $scope.events = [
  {
    "statut": "new",
    "nomArticle": "Préinscription DUT Liste working",
    "commentaire": "Année 2020",
    "lien": "www.google.com",
  },
  {
    "statut": "new",
    "nomArticle": "Teachers jobs get IN",
    "commentaire": "Année 2018",
    "lien": "www.google.com",
  },
  {
    "statut": "new",
    "nomArticle": "Génie logiciel annances",
    "commentaire": "Année 2017",
    "lien": "www.google.com",
  },
  {
    "statut": "new",
    "nomArticle": "Concours après DUT",
    "commentaire": "Année 2016",
    "lien": "www.google.com",
  }
];
})
*/

.controller('EventsCtrl', function($scope, $http) {
  //$http.get('https://api.myjson.com/bins/4juuk')
  		 $http.get('js/data.json')
  //http://esto.ump.ma/mobile/esto/www/js/data.json
  //http		 $http.get('http://esto.ump.ma/mobile/esto/www/js/data.json')
       .then(function(res){
          $scope.events = res.data;                
        });
})


.controller('MyCtrl', function($scope) {
  $scope.items = [{
      title: 'DÉPARTEMENT MANAGEMENT',
      text: "Offre une formation très pointue pour l’essor économique de notre région:Nous formons  des techniciens  en  Informatique et Gestion des Entreprises,  Finance Comptabilité et Fiscalité ...",
      image: 'management',
      chef: 'Mostafa BENABBOU',
      email: 'm.benabbou@ump.ma',
      option: 'Finance Comptabilité Fiscalité - Gestion Banques et Assurances - Gestion Logistique et Transport - Informatique et Gestion des Entreprises',
      style: 'balanced'
    },{
      title: 'DÉPARTEMENT GÉNIE APPLIQUÉ',
      text: 'Dispense un enseignement portant sur les disciplines de l’électronique, l’électrotechnique et de l’informatique industrielle, la mécatronique',
      image: 'electronics',
      chef: 'Smail ZOUGGAR',
      email: 's.zouggar@ump.ma/szouggar@gmail.com',
      option: 'Electronique et Informatique Industrielle - Génie Électrique et Energies Renouvelables - Mécatronique - Génie Civile',
      style: 'positive'
    },{
      title: 'DÉPARTEMENT GÉNIE INFORMATIQUE',
      text: 'Offre une formation complète et très pointue dans un domaine toujours en mutation avec des révolutions continues en NTIC, E-Learning',
      image: 'programming',
      chef: 'Mostafa AZIZI',
      email: 'azizi.mos@ump.ma',
      option: 'Développeur d applications informatiques - Administrateur de Systèmes et Réseaux',
      style: 'energized'
    }];

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  }

});
