CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100)
);

-- ## psql commands in docker
-- * pg_lsclusters #shows the clusters you got
-- * pg_ctlcluster 16 main start #start a down cluster
-- * sudo -u postgres psql #cli for psql 
-- * ALTER USER postgres PASSWORD 'hello1234';
-- * psql -U myuser -d mydb -h localhost -p 5432
-- * locale -a #check locals