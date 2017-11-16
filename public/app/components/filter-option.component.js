angular.
module('app').
component('filterOption', {
  template:
    '<ul class="nav nav-tabs navbar-right" style="margin-right:0px;">'+
      '<li ng-class="{active:  $ctrl.filter == filter.filter}" ng-repeat="filter in $ctrl.filters">' +
          '<a class="text-muted" ng-click="$ctrl.setFilter(filter.filter)"><strong>{{filter.name}}</strong></a>' +         
      '</li>' + 
    '</ul>',
    
  controller: function FilterOptionController() {
    this.filters = [
      {
        name: 'Todos',
        filter: 'Todos',
      }, {
        name: 'Leyendo',
        filter: 'Leyendo',
      }, {
        name: 'Quiero Leer',
        filter: 'Quiero Leer',        
      }, {
        name: 'Leidos',
        filter: 'Leido',
      }, {
        name: 'Abandonados',
        filter: 'Abandonado',        
      }
    ];

    this.setFilter = function(name) {
      this.filter = name
      this.onViewChange({$event: {filter: name}})
    }
  },
  bindings: {
    filter: '<',
    onViewChange: '&'
  }
});