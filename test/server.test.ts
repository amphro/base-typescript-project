import { start } from "../src/server";

test("server start", async () => {
  expect(await start()).toEqual({ success: true });
});
