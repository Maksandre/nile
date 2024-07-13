import {HttpTransport, PublicClient} from '@nilfoundation/niljs';
import config from './utils/config';

const main = async () => {
  const client = new PublicClient({
    transport: new HttpTransport({
      endpoint: config.url
    }),
    shardId: config.shardId
  });

  const shardId = client.getShardId();
}

main();
