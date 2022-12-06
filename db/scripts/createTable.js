import { pool } from "../index.js";

async function createTable() {
  const created = await pool.query(
    `CREATE TABLE shopping (
      id  INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      item TEXT NOT NULL,
      completed BOOL NOT NULL
    );
 INSERT INTO shopping (item, completed)
    VALUES 
    ('Chicken', true), 
    ('Beans', false);`
  );
  console.log("shopping table created", created.command);
}

try {
  await createTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
