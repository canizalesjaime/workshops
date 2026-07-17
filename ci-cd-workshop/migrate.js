const { Client } = require('pg');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

// hosted
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// local
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

async function runMigration() {
  try {
    await client.connect();
    const sql = fs.readFileSync(path.join(__dirname, 'migrations', 'init.sql')).toString();
    await client.query(sql);
    console.log("✅ Migration completed successfully.");
  } catch (err) {
    console.error("❌ Migration failed:", err);
  } finally {
    await client.end();
  }
}

runMigration();
