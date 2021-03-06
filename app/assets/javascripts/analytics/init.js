(function() {
  "use strict";

  // Load Google Analytics libraries
  GOVUK.StaticTracker.load();

  // Use document.domain in dev, preview and staging so that tracking works
  // Otherwise explicitly set the domain as www.gov.uk (and not gov.uk).
  var cookieDomain = (document.domain == 'www.gov.uk') ? '.www.gov.uk' : document.domain;

  // Configure profiles, setup custom vars, track initial pageview
  var analytics = new GOVUK.StaticTracker({
    universalId: 'UA-26179049-7',
    classicId: 'UA-26179049-1',
    cookieDomain: cookieDomain
  });

  // Make interface public for virtual pageviews and events
  GOVUK.analytics = analytics;
})();
