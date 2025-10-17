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
// let securePassword = async (password:string)=>{
//     try{
//         let hashPass = await bcrypt.hash(password,10)
//         return hashPass;
//     }catch(error){
//         console.log(error);        
//     }
// }
var loadLoginPage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, res.render("adminLogin", { message: null })];
        }
        catch (error) {
            console.log(error);
        }
        return [2 /*return*/];
    });
}); };
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userData, passwordMatch, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, userModel_1.default.findOne({ email: email })];
            case 1:
                userData = _b.sent();
                if (!userData) return [3 /*break*/, 3];
                return [4 /*yield*/, bcrypt.compare(password, userData.password)];
            case 2:
                passwordMatch = _b.sent();
                if (passwordMatch) {
                    if (userData.isAdmin == false) {
                        res.status(403).json({ success: false, message: "Access to this page is limited, only admins are allowed" });
                    }
                    else {
                        req.session.user = userData.id;
                        res.redirect("/admin");
                        // res.status(200).json({success:true})
                    }
                }
                _b.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.log(error_1);
                res.status(500).json({ success: false, message: "Server Error" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var loadDashboard = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin, adminData, users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                admin = req.session.user;
                if (!admin) {
                    res.redirect('/admin/login');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, userModel_1.default.find({ isAdmin: true })];
            case 1:
                adminData = _a.sent();
                return [4 /*yield*/, userModel_1.default.find({ isAdmin: false })];
            case 2:
                users = _a.sent();
                console.log("admin", adminData, "user", users);
                res.render('dashboard', { admin: adminData[0], users: users });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log(error_2, "loadDashboard error");
                res.status(500).send("something wrong while loading the dashboard");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var blockUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                userId = req.params.id;
                console.log("user id to block/unblock ", userId);
                return [4 /*yield*/, userModel_1.default.findById(userId)];
            case 1:
                user = _a.sent();
                if (!user) {
                    res.redirect('/admin');
                    return [2 /*return*/];
                }
                user.isBlocked = !user.isBlocked;
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                console.log("user with ".concat(userId, " is now ").concat(user.isBlocked ? 'blocked' : 'unblocked'));
                res.redirect('/admin');
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log("error in block user", error_3);
                res.redirect('/admin');
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
                    console.log("error while  destroying the session", err);
                    return res.redirect('/admin');
                }
                res.clearCookie('connect.sid');
                res.redirect('/admin/login');
            });
        }
        catch (error) {
        }
        return [2 /*return*/];
    });
}); };
var loadEditUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.params.id;
                return [4 /*yield*/, userModel_1.default.findById(userId)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.redirect('/admin')];
                }
                res.render('adminEdit', { user: user, successMessage: '' });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                res.redirect('/admin');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var editUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, name_1, email, phone, updateUser, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                userId = req.params.id;
                _a = req.body, name_1 = _a.name, email = _a.email, phone = _a.phone;
                return [4 /*yield*/, userModel_1.default.findByIdAndUpdate(userId, { name: name_1, email: email, phone: phone })];
            case 1:
                _b.sent();
                return [4 /*yield*/, userModel_1.default.findById(userId)];
            case 2:
                updateUser = _b.sent();
                res.render('adminEdit', {
                    user: updateUser,
                    successMessage: "User successfully updated"
                });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _b.sent();
                console.error("error while editting user", error_5);
                res.redirect('/admin');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    loadLoginPage: loadLoginPage,
    login: login,
    loadDashboard: loadDashboard,
    blockUser: blockUser,
    logout: logout,
    loadEditUser: loadEditUser,
    editUser: editUser
};
