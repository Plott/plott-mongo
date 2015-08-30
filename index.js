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

 if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}

 module.exports = function (conn, db) {
   var connection;
   if (mongoose.connection.readyState === 2){ return mongoose; };
   conn = conn === undefined ? 'mongodb://localhost/' : conn;
   db = db === undefined ? 'Plott' : db;
   connection = conn.endsWith('/') ?  conn.concat(db) : conn.concat('/', db);
   return mongoose.connect(connection);
}
