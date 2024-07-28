import {Client} from 'pg';

const client = new Client({
    connectionString : "postgresql://neondb_owner:Yor3EUMcOW2v@ep-winter-bonus-a5uukeyn.us-east-2.aws.neon.tech/neondb?sslmode=require",
})



async function createUsersTable(){
    await client.connect();
    console.log("Connected to the database");
    const result = await client.query(`
       CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);`
    );

    console.log(result);
}
async function insertData(){
    await client.connect();
    const result = await client.query(`
        insert into users (username, email, password) values ('test', 'aaby@gmail.com', '123456');
    `)
}

// createUsersTable();
insertData();