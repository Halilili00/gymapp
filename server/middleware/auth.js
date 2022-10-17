import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const customAuth = token.length < 500; //If token length is > 500 it means google auth

        let decodedData;
        
        if(token && customAuth) {
            decodedData = jwt.verify(token, process.env.JWT_KEY)
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;