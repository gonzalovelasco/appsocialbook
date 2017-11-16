angular.
module('app').
component('filterButton', {
    template:
    '<div class="dropdown">' +
    '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{{$ctrl.view}}' +
    '<span class="caret"></span></button>' +
        '<ul class="dropdown-menu">' +
        '<li ng-repeat="button in $ctrl.buttons">' +
            '<a ng-click="$ctrl.setView(button.name)">{{button.name}}</a>' +
        '</li>' +
        '</ul>'+
    '</div>',
    controller: function FilterButtonController() {
        this.buttons = [
          {
            name: 'Leyendo',
          }, {
            name: 'Quiero Leer',
          }, {
            name: 'Leido',
          }, {
            name: 'Abandonado',
          }
        ];

        this.setView = function(view) {
          this.view = view
          this.onViewChange({$event: {view: view}})
        }

      },
      bindings: {
        view: '<',
        onViewChange: '&'
      }
    });
