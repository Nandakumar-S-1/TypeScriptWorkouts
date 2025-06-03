import express,{ Express } from "express";
import mongoose from "mongoose";
import path from "path";
import router from "./routes/routes";

let app:Express =express()

mongoose.connect('mongodb://localhost:27017/Calculator')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use('/',router)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export default app;