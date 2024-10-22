import type { Context } from "../types/bot.js";

/**
 * Оборачивающая функция для обработчиков, добавляющая обработку ошибок.
 *
 * @param handler - Обработчик команды или события.
 * @returns - Обработчик с встроенной обработкой ошибок.
 */
export const wrapHandler = (handler: (ctx: Context) => Promise<void>) => async (ctx: Context) => {
	try {
		await handler(ctx);
	} catch (error) {
		console.error("Error in handler:", error);
		await ctx.reply("Произошла ошибка при обработке вашего запроса.");
	}
};
