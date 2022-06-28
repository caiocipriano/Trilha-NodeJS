import { Express } from "express";
import {bodyParse,contentType,cors} from '@/main/middleware'

export default (app:Express):void =>{
    app.use(bodyParse)
    app.use(cors)
    app.use(contentType)
}