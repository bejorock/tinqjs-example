const { parse } = require("url");
const next = require("next");
const {
  default: main,
  createHttpService,
  createAmqpService,
} = require("@tinqjs/tinqjs-boot");
const express = require("express");

const app = express();
const nextApp = next({ dev: true });
const handle = nextApp.getRequestHandler();

app.set("trust proxy", 1);

main(async (config) => {
  await nextApp.prepare();

  // const router = Router();
  // app.use(config.http.basePath, router);

  app.use((req, res) => {
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  });

  const listen = createHttpService(app);

  listen(3001, () => {
    console.log(`Service example ready`);
  });

  // create amqp service

  await createAmqpService(
    process.env.AMQP_HOST || "amqp://localhost/?heartbeat=45"
  );
});
