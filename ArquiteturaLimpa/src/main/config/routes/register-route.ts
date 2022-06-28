import { Router } from "express";
import { makeRegisterUserController } from "@/main/factories/register";
import { adaptRoute } from "../adapters";

export default (router:Router):void=>{
    router.post('./register',adaptRoute(makeRegisterUserController()))
}