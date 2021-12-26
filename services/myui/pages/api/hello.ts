// import { amqpPublish } from "@tinqjs/tinqjs-boot";

export default function handler(req, res) {
  const { amqpPublish } = require("@tinqjs/tinqjs-boot");
  amqpPublish("data.rana.10.user", "topic_example", "hello world");

  res.status(200).json({ message: "hello world" });
}
