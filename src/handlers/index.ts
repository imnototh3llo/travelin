import type { Telegraf } from "telegraf";
import { checkinCommand } from "../commands/checkin.js";
import { monitoringCommand } from "../commands/monitoring.js";
import { searchCommand } from "../commands/search.js";
import { startCommand } from "../commands/start.js";
import type { Context } from "../types/bot.js";
import { wrapHandler } from "../utils/wrapHandler.js";
import { handleButton } from "./buttons.js";

export const registerHandlers = (bot: Telegraf<Context>): void => {
	try {
		bot.start(wrapHandler(startCommand));
		bot.command("search", wrapHandler(searchCommand));
		bot.command("monitoring", wrapHandler(monitoringCommand));
		bot.command("checkin", wrapHandler(checkinCommand));

		bot.on("callback_query", wrapHandler(handleButton));

		bot.on(
			"text",
			wrapHandler(async (ctx: Context) => {
				await ctx.reply("Неизвестная команда. Пожалуйста, используйте /start для начала.");
			}),
		);

		console.log("Handlers successfully registered.");
	} catch (error) {
		console.error("Error registering handlers:", error);
		throw error;
	}
};
