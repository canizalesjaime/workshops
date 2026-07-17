const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL;

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

(async () => {
  await client.connect();
  const result = await client.query(
    `DO $$ 
    DECLARE r RECORD;
    BEGIN 
      FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') 
      LOOP 
        EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || ' CASCADE;';
      END LOOP;
    END $$;`
  );
  console.log('All tables truncated');
  await client.end();
})();
