export const start = async (): Promise<{ success: boolean }> => {
  return { success: true };
};

(async () => {
  await start();
})().catch(console.error);
