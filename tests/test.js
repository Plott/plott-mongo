var mongo = require('../'),
    test = require('tape');

    test('mongo', function (t){
      var mongoose = mongo();
      t.equal(mongoose.connection.readyState, 2, 'connection ok');
      mongoose.connection.close(function(err){
        if (err) throw new Error (err);
      });


      mongoose = mongo('mongodb://localhost', 'Plott_Test')
      t.equal(mongoose.connection.readyState, 2, 'connection ok');
      mongoose.connection.close(function(err){
        if (err) throw new Error (err);
      });

      mongoose = mongo('mongodb://localhost/', 'Plott_Test1')
      t.equal(mongoose.connection.readyState, 2, 'connection ok');
      mongoose.connection.close(function(err){
        if (err) throw new Error (err);
      });

      mongoose = mongo('mongodb://localhost/')
      t.equal(mongoose.connection.readyState, 2, 'connection ok');
      mongoose.connection.close(function(err){
        if (err) throw new Error (err);
      });

      mongoose = mongo('dog')
      t.equal(mongoose.connection.readyState, 2, 'connection ok');
      mongoose.connection.close(function(err){
        if (err) throw new Error (err);
      });


      t.end();
    });
