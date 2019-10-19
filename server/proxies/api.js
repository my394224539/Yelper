'use strict';

const proxyPath = '/api';

module.exports = function(app) {
  const express = require('express');
  const request = require('request');
  app.use(express.json());
  app.post(proxyPath, function(req, res, next) {
    req.body.variables = JSON.stringify(req.body.variables);

    let options = {
      url: 'https://api.yelp.com/v3/graphql',
      headers: {
        Authorization: 'Bearer m8NgqB2tKVFspggeSacGiHoeG4Pj3mOvP18nh3wbG_aiUGuMAiTUibmELaPidCRZEyAAi34_qwttzoVZt29giFD0Sbn_j2fD2TrMFtTFmml0Y2BSS1hEfabgqp2XXXYx'
      },
      method: 'POST',
      body: req.body,
      json: true
    };

    request(options, function(err, httpResponse, body) {
      res.send(body);
    });
  });
};