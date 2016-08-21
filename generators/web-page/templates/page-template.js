'use strict';

$(function() {
  WUI.init({
    system: '<%= moduleName %>'
  });
});

WUI.ready = function() {
  console.log('WUI ready.')
};
