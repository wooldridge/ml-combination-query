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

var qb = marklogic.queryBuilder;

var sq =  'PREFIX person: <http://example.org/person/>';
    sq += 'SELECT ?s ';
    sq += 'WHERE { ';
    sq += '    ?s <http://example.org/follows> person:a.json . ';
    sq += '    }';

db.graphs.sparql({
  contentType: 'application/sparql-results+json',
  query: sq,
  start: 0,
  length: 15
}).result(function (result) {
  console.log(JSON.stringify(result, null, 2));
}, function(error) {
  console.log(JSON.stringify(error, null, 2));
});
