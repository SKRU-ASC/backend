const environtments = {
  port: process.env.PORT || 3000,
  redis: {
    host: process.env.REDIS_HOST || 'redis',
  },
}

export default environtments
