import express from "express";
import dotenv from "dotenv";
import conn from "./services/mongoose.service.js";

import routeManager from "./routes/route.manager.js"

dotenv.config();

conn();

const app = express();
const port = process.env.PORT || 3000;

//ejs template engine
app.set('view engine', 'ejs');

//static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/*
app.get("/", (req, res) => { res.render('index') });
app.get("/about", (req, res) => { res.render('about') });
app.get("/work", (req, res) => { res.render('work') });
app.get("/contact", (req, res) => { res.render('contact') });
 */

routeManager(app);
app.listen(port, () => {
    console.log(`Application running on port ${port}`)

});