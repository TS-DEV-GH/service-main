import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import grpcClientPromisify from '../services/clientPromisify';

const {SERVICE_POSTS = ''} = process.env;

const packageDefinition = protoLoader.loadSync(
    './protos/posts.proto',
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const {posts} = grpc.loadPackageDefinition(packageDefinition) as any;

const client = new posts.Posts(SERVICE_POSTS, grpc.credentials.createInsecure());

grpcClientPromisify(client);

export default client;
