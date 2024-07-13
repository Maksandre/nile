import config from "./utils/config";
import { initClient } from "./client";

const main = async () => {
  const client = initClient(config.endpoint, config.shardId);

  console.log(await client.estimateGasLimit());
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});
