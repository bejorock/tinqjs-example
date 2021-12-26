// bootstrap service here

import main, { createHttpService, createHttpRoutes } from "@tinqjs/tinqjs-boot";
import express, { Router } from "express";

main(async function (config) {
  const app = express();

  const router = Router();

  router.get("/hello", (req, res) => {
    res.send("hello world");
  });

  app.use(config.http.basePath, router);

  const listen = createHttpService(app);

  listen(3001, () => {
    console.log(`Service echo ready`);
  });
});
