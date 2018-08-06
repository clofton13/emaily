const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());
//client id 23175878024-hsuonsqr52uibtcv29gmbd6acil6ov1j.apps.googleusercontent.com
//client secret JA_kLNBuSUdA51ND_InU7Dtb
const PORT = process.env.PORT || 5000;
app.listen(PORT);
