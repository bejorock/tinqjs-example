// bootstrap service here
import main, {
  createHttpService,
  createHttpRoutes,
  createAmqpService,
  createAmqpSubs,
  amqpPublish,
} from "@tinqjs/tinjs-boot";
import express from "express";

// @ts-ignore
import * as routes from "./routes/**/*";
// @ts-ignore
import * as mq from "./mq/**/*";

function httpRoutes() {
  const HTTP_PREFIX_LEN = "./routes".length;
  const filenames = routes.filenames.map((name) =>
    name.substr(HTTP_PREFIX_LEN, name.length - HTTP_PREFIX_LEN - 3)
  );

  return createHttpRoutes({ ...routes, filenames });
}

async function amqpSubs(channel) {
  const HTTP_PREFIX_LEN = "./mq".length;
  const filenames = mq.filenames.map((name) =>
    name.substr(HTTP_PREFIX_LEN, name.length - HTTP_PREFIX_LEN - 3)
  );

  await createAmqpSubs(channel, { ...mq, filenames }, "topic_example");
}

main(async function (config) {
  const app = express();
  app.use(config.http.basePath, httpRoutes());

  const listen = createHttpService(app);

  listen(3001, () => {
    console.log(`Service greet ready`);
  });

  // create amqp listeners

  const channel = await createAmqpService(
    process.env.AMQP_HOST || "amqp://localhost/?heartbeat=45"
  );

  (async () => {
    for await (const c of channel()) {
      await amqpSubs(c);
    }
  })().catch((err) => console.log(err));

  /* setInterval(() => {
    amqpPublish("data.rana.10.user", "topic_example", "hello world");
  }, 10000); */
});
