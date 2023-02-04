import { createClient } from 'redis'
import config from '../config'

const redisConfig = config.environtments.redis

const redis = createClient({ socket: { host: redisConfig.host } })

redis.on('error', (error: Error) => console.log(`[redis]: ${error.message}`))
redis.on('ready', () => console.log('[redis]: is ready'))

export default redis
