import { defineEventHandler, createError } from 'h3';
import { getOrCreateHotSearchService } from '../core/services/hotSearchService';

export default defineEventHandler(async (event) => {
  const service = getOrCreateHotSearchService();

  const stats = await service.getStats();
  const fileSizeMB = service.getDatabaseSize();
  const storeType = service.getStoreType();

  return {
    code: 0,
    message: 'success',
    data: {
      stats,
      dbSizeMB,
      mode: storeType,
    },
  };
});
