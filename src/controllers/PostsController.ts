import {FastifyRequest, FastifyReply} from 'fastify';
import PostsService from '../clients/ServicePosts'
import Error from '../services/ErrorHandler';
import {ServiceError} from '@grpc/grpc-js';

class PostsController {
    static async createPost(req: FastifyRequest, res: FastifyReply) {
        try {
            const response = await PostsService.promise.createPost(req.body);
            res.send({...response});
        } catch (error) {
            Error(error as ServiceError, res)
        }
    }

    static async updatePost(req: FastifyRequest, res: FastifyReply) {
        try {
            const response = await PostsService.promise.updatePost(req.body);
            res.send({...response});
        } catch (error) {
            Error(error as ServiceError, res)
        }
    }

    static async deletePost(req: FastifyRequest, res: FastifyReply) {
        try {
            const response = await PostsService.promise.deletePost(req.query);
            res.send({...response});
        } catch (error) {
            Error(error as ServiceError, res)
        }
    }

    static async getPosts(req: FastifyRequest, res: FastifyReply) {
        try {
            const response = await PostsService.promise.getPosts(req.body);
            res.send({...response});
        } catch (error) {
            Error(error as ServiceError, res)
        }
    }
}

export default PostsController;
