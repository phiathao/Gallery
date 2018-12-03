const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');


// DB CONNECTION

const pg = require('pg');
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true,
        max: 10,
        idleTimeoutMillis: 30000,
    };
} else {
    config = {
        host: 'localhost',
        port: 5432,
        database: 'gallery',
        max: 10,
        idleTimeoutMillis: 30000,
    };
}
const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('connected to DB');
});

pool.on('error', (error) => {
    console.log('Error connecting to DB', error);
});
// END DB CONNECTION

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let queryString = `UPDATE "galleryItems" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
    pool.query(queryString, [galleryId])
    .then((result) =>{
        res.sendStatus(201);
    })
    .catch((error)=>{
        res.sendStatus(500);
    })
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM "galleryItems" ORDER BY "id" ASC;`;
    pool.query(queryString)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        res.sendStatus(500);
    });
    // res.send(galleryItems);
}); // END GET Route

module.exports = router;