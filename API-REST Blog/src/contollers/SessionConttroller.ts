import { Express, Request, Response } from 'express';
import { SessionService } from '../service/SessionService';


export class SessionController{
    public async createSession(request: Request, response: Response){
        const { email, password } = request.body;
    
        const createSession = new SessionService();
    
        const user = await createSession.createSession(email,password,response);

        return response.json((user));
      }
}