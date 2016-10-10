(function() {
  'use strict';

  angular
    .module('bowerstrop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
