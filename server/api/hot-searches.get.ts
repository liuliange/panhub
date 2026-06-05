import { defineEventHandler, getQuery, createError } from "h3";
import { getOrCreateHotSearchService } from "../core/services/hotSearchService";

export default defineEventHandler(async (event) => {
  const service = getOrCreateHotSearchService();
  const query = getQuery(event);
  const limit = parseInt((query.limit as string) || "30", 10);

  if (isNaN(limit) || limit < 1 || limit > 100) {
    throw createError({ statusCode: 400, message: "limit 参数无效，范围 1-100" });
  }

  const hotSearches = await service.getHotSearches(limit);

  return {
    code: 0,
    message: "success",
    data: {
      hotSearches,
    },
  };
});
