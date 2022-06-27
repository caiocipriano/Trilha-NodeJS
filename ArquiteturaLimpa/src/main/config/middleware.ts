import { Express } from "express";
import {bodyParse} from '@/main/config/middleware/body-parser'
import { cors } from "./middleware/cors";

export default (app:Express):void =>{
    app.use(bodyParse)
    app.use(cors)
}