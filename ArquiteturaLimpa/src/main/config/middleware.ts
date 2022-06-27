import { Express } from "express";
import {bodyParse} from '@/main/config/middleware/body-parser'
import { cors } from "./middleware/cors";
import { contentType } from "./middleware/content-type";

export default (app:Express):void =>{
    app.use(bodyParse)
    app.use(cors)
    app.use(contentType)
}