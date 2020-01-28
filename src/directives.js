
app.directive('playingCard', [function() {
  return {
    restrict: 'E',
    scope: {
      card: '=cardvalue',
      displayDepth: '=displaydepth',
      doubleDown: '=doubledown',
      faceDown: '=facedown'
    },
    link: function( scope, element, attr ) {
      if( scope.doubleDown ){ element.addClass('doubledDownCard'); }
      if( scope.faceDown ){ element.addClass('Card-FaceDown'); }
      if( scope.card.suit == '♥' ) { element.addClass('Card-Red'); }
      if( scope.card.suit == '♦' ) { element.addClass('Card-Red'); }
      element.on('$destroy', function() {
        scope = null;
      });
    },
    templateUrl: 'views/playing-card.html',
  };
}]);

app.directive('gameSettingsDialog', [function() {
  return {
    restrict: 'E',
    scope: {
      model: '=',
    },
    link: function(scope, element, attr) {
      scope.$watch('model.visible', function(newValue) {
        var modalElement = element.find('#gSettingsModal');
        $(modalElement).modal(newValue ? 'show' : 'hide');
      });
      element.on('shown.bs.modal', function() {
        scope.$apply(function() {
          scope.model.visible = true;
        });
      });
      element.on('hidden.bs.modal', function() {
        scope.$apply(function() {
          scope.model.visible = false;
          scope.model.nav.collapse();
        });
      });
    },
    templateUrl: 'views/game-settings-dialog.html',
  };
}]);

app.directive('playerSettingsDialog', [function() {
  return {
    restrict: 'E',
    scope: {
      model: '=',
    },
    link: function(scope, element, attr) {
      scope.$watch('model.visible', function(newValue) {
        var modalElement = element.find('#pSettingsModal');
        $(modalElement).modal(newValue ? 'show' : 'hide');
      });
      element.on('shown.bs.modal', function() {
        scope.$apply(function() {
          scope.model.visible = true;
        });
      });
      element.on('hidden.bs.modal', function() {
        scope.$apply(function() {
          scope.model.visible = false;
          scope.model.nav.collapse();
        });
      });
    },
    templateUrl: 'views/player-settings-dialog.html',
  };
}]);

app.directive('aboutDialog', [function() {
  return {
    templateUrl: 'views/about-dialog.html',
  };
}]);

app.directive('helpDialog', [function() {
  return {
    templateUrl: 'views/help-dialog.html',
  };
}]);

app.directive('shareDialog', [function() {
  return {
    templateUrl: 'views/share-dialog.html',
  };
}]);

app.directive('gameNavbar', [function() {
  return {
    restrict: 'E',
    scope: {
      model: '=',
    },
    link: function(scope, element, attr) {
      scope.$watch('model.collapsed', function(newValue) {
        var modalElement = element.find('#navbarlinks');
        $(modalElement).collapse(newValue ? 'hide' : 'show');
      });
      element.on('shown.bs.collapse', function() {
        scope.$apply(function() {
          scope.model.collapsed = false;
        });
      });
      element.on('hidden.bs.collapse', function() {
        scope.$apply(function() {
          scope.model.collapsed = true;
        });
      });
    },
    templateUrl: 'views/game-navbar.html',
  };
}]);

