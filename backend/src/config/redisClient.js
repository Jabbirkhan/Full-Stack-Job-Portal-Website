import { createClient } from "redis";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";
const client = createClient({ url: REDIS_URL });

// Handle Redis client errors and connection events 
// This will help in debugging connection issues and ensuring that the client is properly connected to the Redis server
client.on("error", (err) => {
    console.log("Redis Client Error", err);
});

const connectRedis = async () => {
    if(!client.isOpen){
        try {
            await client.connect();
            console.log("Connected to Redis successfully");
        } catch (error) {
            console.log("Error connecting to Redis:", error);
        }
    }
}

const disconnectRedis = async () => {
    try {
        if(client.isOpen){
            await client.quit();
            console.log("Disconnected from Redis successfully");
        }
    } catch (error) {
        console.log("Error disconnecting from Redis:", error);
    }
}

export default client;
export { connectRedis, disconnectRedis };