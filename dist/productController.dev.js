"use strict";

var sequelize = require('sequelize');

var _require = require('./db'),
    db = _require.db;

var _require2 = require('sequelize'),
    QueryTypes = _require2.QueryTypes;

exports.insert = function _callee(req, res) {
  var product, prod_id;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.query("INSERT INTO products (name, description, price, id_vendedor, id_comprador) \n        VALUES (:name, :description, :price, :id_vendedor, :id_comprador)", {
            replacements: {
              name: req.body.name,
              description: req.body.description,
              price: req.body.price,
              id_vendedor: req.body.id_vendedor,
              id_comprador: req.body.id_comprador
            },
            type: QueryTypes.INSERT
          }));

        case 3:
          product = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(db.query("SELECT * FROM products WHERE prod_id = :id", {
            replacements: {
              id: product[0]
            },
            type: QueryTypes.SELECT
          }));

        case 6:
          prod_id = _context.sent;
          res.send({
            prod_id: prod_id
          }).status(201);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};