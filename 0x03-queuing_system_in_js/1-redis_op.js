import redis from 'redis';

const client = redis.createClient();

client.on('connect', funtion()) 