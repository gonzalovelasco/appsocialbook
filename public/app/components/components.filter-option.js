angular.
module('app').
component('filterOption', {
  template:
    '<ul class="nav nav-tabs">'+
      '<li ng-repeat="filter in $ctrl.filters">' +
          '<a href="#">{{filter.name}}</a>' +         
      '</li>' + 
    '</ul>',
    
  controller: function FilterOptionController() {
    this.filters = [
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