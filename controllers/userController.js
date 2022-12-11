import * as User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export function getLoginPage(req, res) { res.render('login') };

export async function login(req, res) {
    try {
        const { username, password } = req.body;

        const user = await User.findByUserName(username);

        let same = false;

        if (user) {
            same = await bcrypt.compare(password, user.password)
        } else {

          return  res.status(401).json({
                succeded: false,
                error:'Kullanıcı Yok',
            });
        }

       /*  res.status(201).json({
            succeded: true,
            user,
        });
 */
        if (same) {
            res.status(200).json(
                {user,
                 token:createToken(user._id)})
        }
        else {
            res.status(401).json({
                succeded: false,
                error:'Giriş Başarısız',
            });
        }
    } catch (error) {

        res.status(500).json({
            succeded: false,
            error,
        });


    }

}

export async function createUser(req, res) {

    try {
        const user = await User.createUser(req.body);

        res.status(201).json({
            succeded: true,
            user,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            succeded: false,
            error,
        });


    }



}

function createToken(userId) {
    return jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"1h"})
    
}


//export { createUser }
