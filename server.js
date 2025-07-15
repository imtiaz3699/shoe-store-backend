import dotenv from 'dotenv'
dotenv.config()
import './src/config/env.js'
import e from "express";

import db from './src/config/db.js'



const app = e();
const PORT = 3000;
app.get('/', (req, res) => {
    db.query('SELECT NOW() AS now', (err, results) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.send(`MySQL is connected. Current time: ${results[0].now}`);
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});