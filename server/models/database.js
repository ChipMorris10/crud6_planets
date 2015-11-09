var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/planets';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE planets(id SERIAL PRIMARY KEY, inhabitable VARCAR NOT NULL, size VARCAR NOT NULL, dist_from_sun VARCAR NOT NULL');
query.on('end', function() {client.end(); });
