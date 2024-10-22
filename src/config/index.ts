import dotenv from "dotenv";

dotenv.config();

const token = process.env.BOT_TOKEN;

if (!token) {
	throw new Error("BOT_TOKEN is not defined in the environment variables.");
}

export const BOT_TOKEN: string = token;
