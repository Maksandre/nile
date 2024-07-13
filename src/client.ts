import { PublicClient, HttpTransport } from "@nilfoundation/niljs";

export const initClient = (endpoint: string, shardId = 1) => {
  return new PublicClient({
    transport: new HttpTransport({
      endpoint,
    }),
    shardId,
  });
};
