export default function clientPromisify(client: any) {
    client.promise = {};
    for (const i in client) {
        client.promise[i] = (args: any, metadata: any) => new Promise((resolve, reject) => {
            const cb = (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            };
            if (metadata) {
                client[i](args, metadata, cb);
            } else {
                client[i](args, cb);
            }
        });
    }
}
