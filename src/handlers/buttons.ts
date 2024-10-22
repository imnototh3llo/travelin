import type { CallbackQuery } from "typegram";
import type { Context } from "../types/bot.js";

function isCallbackQueryWithData(callbackQuery: CallbackQuery): callbackQuery is CallbackQuery & { data: string } {
	return typeof (callbackQuery as any).data === "string";
}

export const handleButton = async (ctx: Context): Promise<void> => {
	const callbackQuery = ctx.callbackQuery;

	if (!callbackQuery || !isCallbackQueryWithData(callbackQuery)) {
		return;
	}

	const callbackData = callbackQuery.data;

	switch (callbackData) {
		case "FIND_TICKETS":
		case "MONITOR_PRICES":
		case "AUTO_CHECKIN":
			await ctx.reply("В разработке...");
			break;
		default:
			await ctx.reply("Неизвестная команда.");
	}
};
