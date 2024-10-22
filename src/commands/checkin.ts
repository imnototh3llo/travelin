import type { Context } from "../types/bot.js";

export const checkinCommand = async (ctx: Context): Promise<void> => {
	await ctx.reply("В разработке...");
};
