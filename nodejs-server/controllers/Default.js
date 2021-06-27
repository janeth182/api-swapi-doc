'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.agregarProductoPOST = function agregarProductoPOST (req, res, next, body) {
  Default.agregarProductoPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.navesIdGET = function navesIdGET (req, res, next, id) {
  Default.navesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peliculasIdGET = function peliculasIdGET (req, res, next, id) {
  Default.peliculasIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personasIdGET = function personasIdGET (req, res, next, id) {
  Default.personasIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.planetasIdGET = function planetasIdGET (req, res, next, id) {
  Default.planetasIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productosGET = function productosGET (req, res, next) {
  Default.productosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recursosGET = function recursosGET (req, res, next) {
  Default.recursosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
