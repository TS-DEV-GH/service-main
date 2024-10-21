import { FastifyInstance } from 'fastify';
import posts from "./posts";

export default async function indexRoutes(server: FastifyInstance) {
    server.register(posts, { prefix: '/posts' });
}
