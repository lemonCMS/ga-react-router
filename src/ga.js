'use strict';
if(typeof window !== 'undefined' && typeof GA_TRACKING_CODE !== 'undefined') {
  var gaScriptUrl = typeof GA_SCRIPT_URL === 'undefined' ? '//www.google-analytics.com/analytics.js' : GA_SCRIPT_URL;
  (function(window, document, script, url, r, tag, firstScriptTag) {
    window['GoogleAnalyticsObject']=r;
    window[r] = window[r] || function() {
      (window[r].q = window[r].q || []).push(arguments)
    };
    window[r].l = 1*new Date();
    tag = document.createElement(script),
    firstScriptTag = document.getElementsByTagName(script)[0];
    tag.async = 1;
    tag.src = url;
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  })(
    window,
    document,
    'script',
    gaScriptUrl,
    'ga'
  );

  var ga = window.ga;

  var config = typeof GA_CONFIG === 'undefined' ? {} : GA_CONFIG;
  var gaConfig = Object.assign({}, {
    trackingId: GA_TRACKING_CODE,
    cookieDomain: 'auto'
  }, config);

  ga('create', gaConfig);

  module.exports = function() {
    return window.ga.apply(window.ga, arguments);
  };
} else {
  module.exports = function() {console.log(arguments)};
}
