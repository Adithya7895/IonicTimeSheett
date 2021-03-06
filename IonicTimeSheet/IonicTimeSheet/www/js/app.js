// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
        onEnter : function($state,Auth){
            if(!Auth.isLoggedIn()){
                $state.go("tab");
            }

  }
    })

   .state('forgotpassword', {
       url: '/forgot-password',
       templateUrl: 'templates/forgotpassword.html'
   })


.state('timesheet', {
       url: '/timesheet',
       templateUrl: 'templates/timesheet.html'
})

      .state('profile', {
          url: '/profile',
          templateUrl: 'templates/profile.html'
      })

      .state('placement', {
          url: '/placement',
          templateUrl: 'templates/placement.html'
      })
       .state('approved', {
           url: '/approved',
           templateUrl: 'templates/approved.html'
       })
       .state('decline', {
           url: '/decline',
           templateUrl: 'templates/decline.html'
       })
       .state('newtimesheet', {
           url: '/newtimesheet',
           templateUrl: 'templates/newtimesheet.html'
       })

.state('tab', {
      url: '/tab',
      templateUrl: 'templates/tab.html'
})




    .state('login', {
        url: '/login',
         templateUrl: 'templates/login.html',
        controller: 'AppCtrl'
    })





  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })










  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
  })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
 
}

      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
