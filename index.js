var mongoose = require('mongoose'),
    path = require('path');

/**
 * Creates connection to MongoDB database.
 *
 * @module plott/mongo
 * @category helper
 * @param {String} conn MongoDB connection uri "mongodb://<host>/". Default ('mongodb://localhost/')
 * @param {String} db database name. Default ('Plott')
 * @return {Object} mongoose
 * @example
 * plott.mongo();
 *
 * //=mongoose
 */

 module.exports = function (conn, db) {
   var connection;
   conn = conn === undefined ? 'mongodb://localhost/' : conn;
   db = db === undefined ? 'Plott' : db;
   connection = path.join(conn, db);
   return mongoose.connect(connection).bind(mongoose);
}
