angular.
module('app').
component('filterButton', {
    template:
    '<div class="dropdown">' + 
    '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Leido' + 
    '<span class="caret"></span></button>' + 
        '<ul class="dropdown-menu">' + 
        '<li ng-repeat="button in $ctrl.buttons">' +
            '<a href="#">{{button.name}}</a>' +         
        '</li>' + 
        '</ul>'+
    '</div>',
    controller: function FilterButtonController() {
        this.buttons = [
          {
            name: 'Todos',
          }, {
            name: 'Leyendoo',
          }, {
            name: 'Quiero leer',
          }, {
            name: 'Leidos',
          }, {
            name: 'Abandonados',
          }
        ];
      }
    });