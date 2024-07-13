import {config} from 'dotenv';
config();

const getConfig = () => {
  const {SECRET_URL, SHARD_ID} = process.env;

  if (!SECRET_URL)
    throw Error('config: No secret url. Did you forget to set .env');
  if (!SHARD_ID)
    throw Error('config: No shard id set. Did you forget to set .env');

  let shardId: number;
  try {
    shardId = Number(SHARD_ID);
  } catch (error) {
    throw Error('config: shard id is not a number');
  }


  return {
    url: SECRET_URL,
    shardId,
  }
}

export default getConfig();
