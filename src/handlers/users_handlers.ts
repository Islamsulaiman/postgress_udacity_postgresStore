import { Users, Users_handler } from "../models/users";

const user =new Users_handler();

import express, {Request, Response} from 'express';

//adding underscore before mandatory unused parameter, will make the console ignore it, which is what we want here.
const indexUsers = async (_req : Request, res: Response)=>{
    try {
        const result = await user.index();
        res.json(result);
    } catch (error) {
        throw new Error (`Error from user_handler file from indexUsers method : ${error}`)
    }
}

const showUsers = async (req : Request, res: Response) =>{
    try {
        const result = await user.show(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        throw new Error (`Error from user_handler file from showUsers method : ${error}`)
    }
}

const destroyUsers = async (req : Request, res: Response) =>{
    try {
        const result = await user.destroy(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        throw new Error (`Error from user_handler file from destroyUsers method : ${error}`)
    }
}

const createUsers = async(req : Request, res: Response) =>{
    try {
        const userInfo: Users = {
            f_name : req.body.f_name,
            l_name : req.body.l_name,
            user_name : req.body.user_name,
            password : req.body.password,
            age : req.body.age
        }
        const result = await user.create(userInfo);
        res.json(result);
    } catch (error) {
        throw new Error (`Error from user_handler file from createUsers method : ${error}`)
    }
}

const authenticateUser = async (req : Request, res: Response)=>{
    try {
        const result = await user.authenticate(req.body.user_name, req.body.password)
        res.json(result);
    } catch (error) {
        throw new Error (`Error from user_handler file from authenticateUser method : ${error}`)
    }

}

export const usersRoutes = (app: express.Application) => {
    app.get('/showAllUsers', indexUsers)
    app.get('/showOneUser/:id', showUsers)
    app.delete('/deleteUser/:id', destroyUsers)
    app.post('/createUser', createUsers)
    app.get('/auth', authenticateUser)
}