"use strict";
// import mongoose from "mongoose"
Object.defineProperty(exports, "__esModule", { value: true });
// import express,{Application,Request,Response,NextFunction} from "express";
// // import * as express from "express";
// import * as path from "path";
// // import path from "path";
// // import session from "express-session"
// import * as session from "express-session";
// import nocache from "nocache"
// import user from "./routes/userRoute"
// import admin from "./routes/adminRoute";
// mongoose.connect("mongodb://127.0.0.1:27017/tsUserManage");
// let app:Application =express();
// app.use(session({
//     secret:'your-secret-key',
//     resave:false,
//     saveUninitialized:false
// }))
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.set("view engine","ejs")
// app.set("views",[
//     path.join(__dirname,"../views/user"),
//     path.join(__dirname,"../views/admin"),
//     path.join(__dirname,"../views/layouts")
// ])
// app.use(nocache())
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
//     res.set("Pragma", "no-cache");
//     res.set("Expires", "0");
//     res.set("Surrogate-Control", "no-store");
//     next();
// });
//   app.use('/public', express.static(path.join(__dirname, '../public'), {
//     setHeaders: (res, path) => {
//       res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
//       res.set("Pragma", "no-cache");
//       res.set("Expires", "0");
//       res.set("Surrogate-Control", "no-store");
//     },
// }));
// app.use("/",user)
// app.use("/admin",admin)
// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });
var mongoose_1 = require("mongoose");
var express_1 = require("express");
var path_1 = require("path");
var express_session_1 = require("express-session");
var nocache_1 = require("nocache");
var userRoute_1 = require("./routes/userRoute");
var adminRoute_1 = require("./routes/adminRoute");
// Connect to MongoDB
mongoose_1.default.connect("mongodb://127.0.0.1:27017/tsUserManage");
// Create Express app
var app = (0, express_1.default)();
// Session middleware
app.use((0, express_session_1.default)({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
// Body parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// View engine setup
app.set("view engine", "ejs");
app.set("views", [
    path_1.default.join(__dirname, "../views/user"),
    path_1.default.join(__dirname, "../views/admin"),
    path_1.default.join(__dirname, "../views/layouts")
]);
// Disable cache
app.use((0, nocache_1.default)());
app.use(function (req, res, next) {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    res.set("Surrogate-Control", "no-store");
    next();
});
// Static files
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '../public'), {
    setHeaders: function (res, path) {
        res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        res.set("Pragma", "no-cache");
        res.set("Expires", "0");
        res.set("Surrogate-Control", "no-store");
    },
}));
// Routes
app.use("/", userRoute_1.default);
app.use("/admin", adminRoute_1.default);
// Start server
app.listen(3000, function () {
    console.log("Server running on http://localhost:3000");
});
