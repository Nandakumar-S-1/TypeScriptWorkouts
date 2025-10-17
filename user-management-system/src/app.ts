import mongoose from "mongoose";
import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";
import session from "express-session";
import nocache from "nocache";
import user from "./routes/userRoute";
import admin from "./routes/adminRoute";

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/tsUserManage");

// Create Express app
const app: Application = express();

// Session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "ejs");
app.set("views", [
    path.join(__dirname, "../views/user"),
    path.join(__dirname, "../views/admin"),
    path.join(__dirname, "../views/layouts")
]);

// Disable cache
app.use(nocache());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    res.set("Surrogate-Control", "no-store");
    next();
});

// Static files
app.use('/public', express.static(path.join(__dirname, '../public'), {
    setHeaders: (res, path) => {
        res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        res.set("Pragma", "no-cache");
        res.set("Expires", "0");
        res.set("Surrogate-Control", "no-store");
    },
}));

// Routes
app.use("/", user);
app.use("/admin", admin);

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
