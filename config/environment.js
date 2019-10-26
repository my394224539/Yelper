'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'yelper',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyBLnLNY8yTo_sQNfiXVLVGjjJdCmmNrQvU",
      authDomain: "yelp-favorites-e598f.firebaseapp.com",
      databaseURL: "https://yelp-favorites-e598f.firebaseio.com",
      projectId: "yelp-favorites-e598f",
      storageBucket: "yelp-favorites-e598f.appspot.com",
      messagingSenderId: "996785701477",
      appId: "1:996785701477:web:ef919b24a2e593024dbc8c"
    },
    apollo: {
      apiURL: '/api'
      // apiURL:
      //   'http://node-express-env.zqxi3wpmdm.us-east-2.elasticbeanstalk.com/yelp'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }
  ENV['ember-google-maps'] = {
    key: "AIzaSyDF9xoElLGQKXzhhgebTtVOzV3HDnxVGI4", // Using .env files in this example
    language: 'en',
    region: 'US',
    protocol: 'https',
    version: '3.35',
    libraries: ['geometry', 'places'], // Optional libraries
    // client: undefined,
    // channel: undefined,
    // baseUrl: '//maps.googleapis.com/maps/api/js'
  }
  return ENV;
};
