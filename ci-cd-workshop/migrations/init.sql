-- CREATE DATABASE scheduler;
-- run this script: psql -U scheduler_user -d scheduler -f init.sql


CREATE TABLE schedule (
  id SERIAL PRIMARY KEY,
  day VARCHAR(50),
  time VARCHAR(50),
  event TEXT
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  due_date DATE
);

-- ## psql commands in docker
-- pg_lsclusters #shows the clusters you got
-- pg_ctlcluster 16 main start #start a down cluster
-- service postgresql start #alternative to above
-- sudo -u postgres psql #cli for psql 
-- ALTER USER postgres PASSWORD 'hello1234';
-- psql -U myuser -d mydb -h localhost -p 5432
-- locale -a #check locals

-- psql -U postgres -c "ALTER USER postgres PASSWORD '${POSTGRES_PASSWORD}';"
