import express from 'express';
import { getAuthUser } from '../databases/authdb.js'
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    let authUser = getAuthUser( username );

    if (authUser && (authUser.password === password)) {
        const token = jwt.sign({username: username}, 'mysecretkey', {
            expiresIn: '1h'
        })
        res.json({ 
            "username": username,
            "access_token": token,
            "token_type": "Bearer",
            "expires_in": "1h"
         });
    } else {
        res.status(401).json({ "Error": "Login Failed" });
    }
});

export default router;