export const isPromotionActive = (): boolean => {
  const now = new Date();
  const mskOffset = 3;
  const mayMSK = new Date(
    Date.UTC(now.getUTCFullYear(), 5, 30, -mskOffset, 0, 0)
  );

  return now <= mayMSK;
};
