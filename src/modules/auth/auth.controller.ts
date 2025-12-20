import { Request, Response } from "express";
import { authService } from "./auth.service";

const loginUser = async(req: Request, res: Response) => {
    const {email, password} = req.body;

    try{
            const result = await authService.loginUser(email, password);
            return res.status(201).json({
                success: true,
                message: "Login Successfully",
                data: result,
            });
    
        }catch(err: any){
            return res.status(500).json({
                success: false,
                message: `error hoise ${err.message}`,
            })
        }
};

export const authController = {
    loginUser,
}