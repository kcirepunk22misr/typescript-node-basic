import { Request, Response } from 'express';
import User from '../models/User';


class UserController {

    public getUsers(req: Request, res: Response) {
        User.find()
            .exec((err, userDB) => {
                if(err) return res.status(400).json({
                    ok: false,
                    message: 'Error al guardar el mensaje',
                    err
                });

                res.json({
                    ok: true,
                    usuarios: userDB
                });
            });
    }

    public saveUser(req: Request, res: Response) {
        let body = req.body;
        const user = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            sex: body.sex,
            email: body.email,
            password: body.password
        });

        user.save((err, userDB) => {
            if(err) return res.status(400).json({
                ok: false,
                message: 'Error al guardar el usuario',
                err
            });

            res.status(201).json({
                ok: true,
                user: userDB
            });
        });
    }

}

export const userController = new UserController();