import { FastifyInstance } from 'fastify';
import PostsController from "../controllers/PostsController";

export default async function posts(server: FastifyInstance) {
    server.post('/create', PostsController.createPost);
    server.put('/update', PostsController.updatePost);
    server.delete('/delete', PostsController.deletePost);
    server.get('/list', PostsController.getPosts);
}
