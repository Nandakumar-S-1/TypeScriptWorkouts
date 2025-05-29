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
var userAuth = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                if (!req.session.user) return [3 /*break*/, 2];
                return [4 /*yield*/, userModel_1.default.findOne({ _id: req.session.user, isAdmin: false })];
            case 1:
                user = _a.sent();
                if (user) {
                    return [2 /*return*/, next()];
                }
                else {
                    return [2 /*return*/, res.redirect('/login')];
                }
                return [3 /*break*/, 3];
            case 2: return [2 /*return*/, res.redirect('/login')];
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.log('error in user authentication', error_1);
                res.status(500).send('Internal server error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var adminAuth = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                if (!req.session.user) {
                    return [2 /*return*/, res.redirect('/admin/login')];
                }
                return [4 /*yield*/, userModel_1.default.findById(req.session.user)];
            case 1:
                user = _a.sent();
                if (user && user.isAdmin) {
                    return [2 /*return*/, next()];
                }
                else {
                    return [2 /*return*/, res.redirect('/admin/login')];
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("Error in adminAuth middleware:", error_2);
                res.status(500).send("Internal server error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = { userAuth: userAuth, adminAuth: adminAuth };
// import userModel from "../model/userModel";
// import { Request,Response,NextFunction } from "express";
// let userAuth = async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
//     try{
//         if(req.session.user){
//             let user=await userModel.findOne({_id:req.session.user},{isAdmin:false});
//             if(user){
//                 return next()
//             }else{
//                 return res.redirect('/login')
//             }
//         }else{
//             return res.redirect('/login')
//         }
//     }catch(error){
//         console.log('error in user authentication',error);
//         res.status(500).send('Internal server error')
//     }
// }
// let adminAuth = async(req:Request,res:Response,next:NextFunction)=>{
//     try {
//         if(!req.session.user){
//             return res.redirect('/admin/login')
//         }
//         let user=await userModel.findById(req.session.user)
//         if(user && user.isAdmin){
//             next()
//         }else{
//             return res.redirect('/admin/login')
//         }
//     } catch (error) {
//         console.error("Error in adminAuth middleware:", error);
//         res.status(500).send("Internal server error");
//     }
// }
// export default {userAuth,adminAuth}
