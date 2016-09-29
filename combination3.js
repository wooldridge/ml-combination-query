var config = require('./config'),
    marklogic = require('marklogic'),
    fs = require('fs');

var db = marklogic.createDatabaseClient({
  host: config.host,
  port: config.database.port,
  user: config.auth.user,
  password: config.auth.pass,
  authType: 'digest'
});

var sq =  'PREFIX person: <http://example.org/person/>';
    sq += 'SELECT ?s ';
    sq += 'WHERE { ';
    sq += '    ?s <http://example.org/follows> person:a.json . ';
    sq += '    }';

db.documents.query({
  search: {
    sparql: {
      contentType: 'application/sparql-results+json',
      query: sq
    },
    options: {
      debug: true,
      'return-query': true
    }
  },
  categories: ['none']
}).result( function(results) {
  console.log(JSON.stringify(results, null, 2));
  },
  function(error) {
    console.log(JSON.stringify(error, null, 2));
  });
