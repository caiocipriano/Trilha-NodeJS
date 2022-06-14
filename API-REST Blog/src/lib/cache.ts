import IORedis from 'ioredis'
import { promisify } from 'util'

const redis = new IORedis({
    host:process.env.REDIS_HOST,
    port:6379,
    password:process.env.REDIS_PASSWORD
})

function getRedis(value:string){
    const syncRedisGet = promisify(redis.get).bind(redis)
    return syncRedisGet(value)
}

function setRedis(key:string,value:string){
    const syncRedisSet = promisify(redis.set).bind(redis)
    return syncRedisSet(key,value)
}

export {redis, getRedis, setRedis}