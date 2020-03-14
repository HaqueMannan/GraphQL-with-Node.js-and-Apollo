'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateToken = function generateToken(userId) {
   return _jsonwebtoken2.default.sign({ userId: userId }, 'nodesecret', { expiresIn: '1 hour' });
};

exports.default = generateToken;