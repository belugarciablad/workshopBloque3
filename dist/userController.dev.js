"use strict";

var sequelize = require('sequelize');

var _require = require('./db'),
    db = _require.db;

var _require2 = require('sequelize'),
    QueryTypes = _require2.QueryTypes;

exports.insert = function _callee(req, res) {
  var user, user_id;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.query("INSERT INTO users (name, lastname, password) \n        VALUES (:name, :lastname, :password)", {
            replacements: {
              name: req.body.name,
              lastname: req.body.lastname,
              password: req.body.password
            },
            type: QueryTypes.INSERT
          }));

        case 3:
          user = _context.sent;
          console.log(user);
          _context.next = 7;
          return regeneratorRuntime.awrap(db.query("SELECT * FROM users WHERE user_id = :id", {
            replacements: {
              id: user[0]
            },
            type: QueryTypes.SELECT
          }));

        case 7:
          user_id = _context.sent;
          res.send({
            user_id: user_id
          }).status(201);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};