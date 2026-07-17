#!/bin/bash
# Start PostgreSQL
service postgresql start
npm install
node migrate.js

#or
# export PGPASSWORD="hello1234"
# psql -U postgres -d postgres -f /migrations/init.sql
 
# Prevent the container from exiting
tail -f /dev/null
