import {auth} from "../config/betterAuth.js";
import { fromNodeHeaders } from "better-auth/node";
import {StatusCodes, ReasonPhrases} from "http-status-codes"

export const authMiddleware = async (req, res, next) =>{
    try {
        const session  = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers),
        });


        if(!session?.user){
            return res.status(StatusCodes.UNAUTHORIZED).json({message: ReasonPhrases.UNAUTHORIZED});
        }

        req.user = session.user;
        req.session = session;
        next();
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED).json({error: "Invalid session"});

    }
}