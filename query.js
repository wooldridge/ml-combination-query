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

db.documents.query(
  qb.where(
    qb.and(
      qb.directory("/documents/"),
      qb.term("energy")
    )
  )
).result( function(results) {
  console.log(JSON.stringify(results, null, 2));
  },
  function(error) {
    console.log(JSON.stringify(error, null, 2));
  }
);
