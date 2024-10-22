import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "./config/index.js";
import { registerHandlers } from "./handlers/index.js";

const startBot = async () => {
	try {
		console.log("Initializing bot...");
		const bot = new Telegraf(BOT_TOKEN);

		console.log("Registering handlers...");
		registerHandlers(bot);

		console.log("Launching bot...");
		await bot.launch();

		process.once("SIGINT", async () => {
			console.log("Received SIGINT. Stopping bot...");
			bot.stop("SIGINT");
			console.log("Bot stopped gracefully.");
		});
		process.once("SIGTERM", async () => {
			console.log("Received SIGTERM. Stopping bot...");
			bot.stop("SIGTERM");
			console.log("Bot stopped gracefully.");
		});
	} catch (error) {
		console.error("Error starting the bot:", error);
		process.exit(1);
	}
};

void startBot();
console.log("The bot was successfully launched.");
