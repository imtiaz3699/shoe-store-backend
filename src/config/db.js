import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,           // replace with your username
    password: process.env.DB_PASSWORD,   // replace with your password
    database: process.env.DB_NAME,
    port: process.env.PORT
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL DB:', err.stack);
        return;
    }
    console.log('✅ Connected to MySQL as ID', connection.threadId);
});

export default connection;