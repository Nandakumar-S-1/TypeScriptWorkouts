"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = require("../model/userModel");
// import bcrypt from "bcrypt"
var bcrypt = require("bcrypt");
var securePassword = function (password) { return __awaiter(void 0, void 0, void 0, function () {
    var passHash, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bcrypt.hash(password, 10)];
            case 1:
                passHash = _a.sent();
                return [2 /*return*/, passHash];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
var getSignupPage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            if (req.session.user) {
                return [2 /*return*/, res.redirect('/')];
            }
            else {
                return [2 /*return*/, res.render('signup')];
            }
        }
        catch (error) {
            console.log("error while loading signup page", error);
        }
        return [2 /*return*/];
    });
}); };
var signup = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, phone, password, existingUser, securePass, user, userData, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, name_1 = _a.name, email = _a.email, phone = _a.phone, password = _a.password;
                if (!name_1 || !email || !phone || !password) {
                    res.status(400).json({ success: false, message: 'All fields are required to siginup' });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, userModel_1.default.findOne({ email: email })];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    res.status(409).json({ success: false, message: "User with email is alreday registered" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, securePassword(password)];
            case 2:
                securePass = _b.sent();
                user = new userModel_1.default({
                    name: name_1,
                    email: email,
                    phone: phone,
                    password: securePass, isAdmin: false, isBlocked: false
                });
                return [4 /*yield*/, user.save()];
            case 3:
                userData = _b.sent();
                if (userData) {
                    req.session.user = userData.id;
                    res.redirect('/');
                    // res.status(200).json({success:true,message:"registration succesful"})
                }
                else {
                    res.status(500).json({ success: false, message: "Registration failed" });
                }
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.error("Signup error:", error_2);
                res.status(500).json({ success: false, message: "Internal Server Error" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            if (!req.session.user) {
                return [2 /*return*/, res.render("login", { message: null })];
            }
            else {
                return [2 /*return*/, res.redirect('/home')];
            }
        }
        catch (error) {
            console.log(error);
            res.render("login", { message: "An error occurred while loading the login page" });
        }
        return [2 /*return*/];
    });
}); };
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, isPasswordMatch, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, userModel_1.default.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (!user) {
                    res.json({ success: false, message: 'email not found' });
                    return [2 /*return*/];
                }
                if (user.isBlocked == true) {
                    res.json({ success: false, message: 'This user is currently blocked' });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcrypt.compare(password, user.password)];
            case 2:
                isPasswordMatch = _b.sent();
                if (!isPasswordMatch) {
                    res.status(401).render('login', { message: 'Incorrect password' });
                    return [2 /*return*/];
                }
                req.session.user = user.id;
                res.redirect('/');
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                console.error(error_3);
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            req.session.destroy(function (err) {
                if (err) {
                    console.log("failed to destroy the session ", err);
                    res.status(500).send("error occured  while logging out");
                    return;
                }
                res.redirect('/login');
            });
        }
        catch (error) {
            console.error("Error during logout:", error);
            res.status(500).send("An unexpected error occurred.");
        }
        return [2 /*return*/];
    });
}); };
var loadHome = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                if (!req.session.user) return [3 /*break*/, 2];
                return [4 /*yield*/, userModel_1.default.findById(req.session.user)];
            case 1:
                userData = _a.sent();
                console.log(userData, "userDataa");
                if (userData) {
                    res.render('home', { user: userData });
                }
                else {
                    res.redirect('/');
                }
                return [3 /*break*/, 3];
            case 2:
                res.redirect('/');
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                console.log(error_4);
                res.redirect('/');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    getSignupPage: getSignupPage,
    signup: signup,
    getLogin: getLogin,
    login: login,
    logout: logout,
    loadHome: loadHome
};
// let editFields = async (req:Request,res:Response):Promise<void>=>{
//     try {
//       let userId=req.params.id
//       let {name,email,phone} = req.body
//       let user = await userModel.findById(userId)
//       if(!user){
//         res.status(404).send("user not found")
//         return
//       }
//       user.name = name
//       user.email = email
//     //   user.phone = phone
//       await user.save()
//       res.render('userEdit',{user,message:'Profile updated successfully'})
//     } catch (error) {
//     }
// }
