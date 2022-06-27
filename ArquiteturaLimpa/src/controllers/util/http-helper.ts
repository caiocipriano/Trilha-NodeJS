import { HttpResponse } from '@/controllers/ports/http-response';


export const created = (data:any):HttpResponse=>({
    statusCode:201,
    body:{data}
})