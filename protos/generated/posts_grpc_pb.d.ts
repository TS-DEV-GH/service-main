// package: posts
// file: posts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as posts_pb from "./posts_pb";

interface IPostsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPost: IPostsService_IcreatePost;
    updatePost: IPostsService_IupdatePost;
    deletePost: IPostsService_IdeletePost;
    getPosts: IPostsService_IgetPosts;
}

interface IPostsService_IcreatePost extends grpc.MethodDefinition<posts_pb.createPostRequest, posts_pb.createPostResponse> {
    path: "/posts.Posts/createPost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.createPostRequest>;
    requestDeserialize: grpc.deserialize<posts_pb.createPostRequest>;
    responseSerialize: grpc.serialize<posts_pb.createPostResponse>;
    responseDeserialize: grpc.deserialize<posts_pb.createPostResponse>;
}
interface IPostsService_IupdatePost extends grpc.MethodDefinition<posts_pb.updatePostRequest, posts_pb.updatePostResponse> {
    path: "/posts.Posts/updatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.updatePostRequest>;
    requestDeserialize: grpc.deserialize<posts_pb.updatePostRequest>;
    responseSerialize: grpc.serialize<posts_pb.updatePostResponse>;
    responseDeserialize: grpc.deserialize<posts_pb.updatePostResponse>;
}
interface IPostsService_IdeletePost extends grpc.MethodDefinition<posts_pb.deletePostRequest, posts_pb.deletePostResponse> {
    path: "/posts.Posts/deletePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.deletePostRequest>;
    requestDeserialize: grpc.deserialize<posts_pb.deletePostRequest>;
    responseSerialize: grpc.serialize<posts_pb.deletePostResponse>;
    responseDeserialize: grpc.deserialize<posts_pb.deletePostResponse>;
}
interface IPostsService_IgetPosts extends grpc.MethodDefinition<posts_pb.getPostsRequest, posts_pb.getPostsResponse> {
    path: "/posts.Posts/getPosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.getPostsRequest>;
    requestDeserialize: grpc.deserialize<posts_pb.getPostsRequest>;
    responseSerialize: grpc.serialize<posts_pb.getPostsResponse>;
    responseDeserialize: grpc.deserialize<posts_pb.getPostsResponse>;
}

export const PostsService: IPostsService;

export interface IPostsServer extends grpc.UntypedServiceImplementation {
    createPost: grpc.handleUnaryCall<posts_pb.createPostRequest, posts_pb.createPostResponse>;
    updatePost: grpc.handleUnaryCall<posts_pb.updatePostRequest, posts_pb.updatePostResponse>;
    deletePost: grpc.handleUnaryCall<posts_pb.deletePostRequest, posts_pb.deletePostResponse>;
    getPosts: grpc.handleUnaryCall<posts_pb.getPostsRequest, posts_pb.getPostsResponse>;
}

export interface IPostsClient {
    createPost(request: posts_pb.createPostRequest, callback: (error: grpc.ServiceError | null, response: posts_pb.createPostResponse) => void): grpc.ClientUnaryCall;
    createPost(request: posts_pb.createPostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.createPostResponse) => void): grpc.ClientUnaryCall;
    createPost(request: posts_pb.createPostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.createPostResponse) => void): grpc.ClientUnaryCall;
    updatePost(request: posts_pb.updatePostRequest, callback: (error: grpc.ServiceError | null, response: posts_pb.updatePostResponse) => void): grpc.ClientUnaryCall;
    updatePost(request: posts_pb.updatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.updatePostResponse) => void): grpc.ClientUnaryCall;
    updatePost(request: posts_pb.updatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.updatePostResponse) => void): grpc.ClientUnaryCall;
    deletePost(request: posts_pb.deletePostRequest, callback: (error: grpc.ServiceError | null, response: posts_pb.deletePostResponse) => void): grpc.ClientUnaryCall;
    deletePost(request: posts_pb.deletePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.deletePostResponse) => void): grpc.ClientUnaryCall;
    deletePost(request: posts_pb.deletePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.deletePostResponse) => void): grpc.ClientUnaryCall;
    getPosts(request: posts_pb.getPostsRequest, callback: (error: grpc.ServiceError | null, response: posts_pb.getPostsResponse) => void): grpc.ClientUnaryCall;
    getPosts(request: posts_pb.getPostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.getPostsResponse) => void): grpc.ClientUnaryCall;
    getPosts(request: posts_pb.getPostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.getPostsResponse) => void): grpc.ClientUnaryCall;
}

export class PostsClient extends grpc.Client implements IPostsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPost(request: posts_pb.createPostRequest, callback: (error: grpc.ServiceError | null, response: posts_pb.createPostResponse) => void): grpc.ClientUnaryCall;
    public createPost(request: posts_pb.createPostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.createPostResponse) => void): grpc.ClientUnaryCall;
    public createPost(request: posts_pb.createPostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.createPostResponse) => void): grpc.ClientUnaryCall;
    public updatePost(request: posts_pb.updatePostRequest, callback: (error: grpc.ServiceError | null, response: posts_pb.updatePostResponse) => void): grpc.ClientUnaryCall;
    public updatePost(request: posts_pb.updatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.updatePostResponse) => void): grpc.ClientUnaryCall;
    public updatePost(request: posts_pb.updatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.updatePostResponse) => void): grpc.ClientUnaryCall;
    public deletePost(request: posts_pb.deletePostRequest, callback: (error: grpc.ServiceError | null, response: posts_pb.deletePostResponse) => void): grpc.ClientUnaryCall;
    public deletePost(request: posts_pb.deletePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.deletePostResponse) => void): grpc.ClientUnaryCall;
    public deletePost(request: posts_pb.deletePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.deletePostResponse) => void): grpc.ClientUnaryCall;
    public getPosts(request: posts_pb.getPostsRequest, callback: (error: grpc.ServiceError | null, response: posts_pb.getPostsResponse) => void): grpc.ClientUnaryCall;
    public getPosts(request: posts_pb.getPostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.getPostsResponse) => void): grpc.ClientUnaryCall;
    public getPosts(request: posts_pb.getPostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.getPostsResponse) => void): grpc.ClientUnaryCall;
}
