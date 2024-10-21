// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var posts_pb = require('./posts_pb.js');

function serialize_posts_createPostRequest(arg) {
  if (!(arg instanceof posts_pb.createPostRequest)) {
    throw new Error('Expected argument of type posts.createPostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_createPostRequest(buffer_arg) {
  return posts_pb.createPostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_createPostResponse(arg) {
  if (!(arg instanceof posts_pb.createPostResponse)) {
    throw new Error('Expected argument of type posts.createPostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_createPostResponse(buffer_arg) {
  return posts_pb.createPostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_deletePostRequest(arg) {
  if (!(arg instanceof posts_pb.deletePostRequest)) {
    throw new Error('Expected argument of type posts.deletePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_deletePostRequest(buffer_arg) {
  return posts_pb.deletePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_deletePostResponse(arg) {
  if (!(arg instanceof posts_pb.deletePostResponse)) {
    throw new Error('Expected argument of type posts.deletePostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_deletePostResponse(buffer_arg) {
  return posts_pb.deletePostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_getPostsRequest(arg) {
  if (!(arg instanceof posts_pb.getPostsRequest)) {
    throw new Error('Expected argument of type posts.getPostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_getPostsRequest(buffer_arg) {
  return posts_pb.getPostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_getPostsResponse(arg) {
  if (!(arg instanceof posts_pb.getPostsResponse)) {
    throw new Error('Expected argument of type posts.getPostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_getPostsResponse(buffer_arg) {
  return posts_pb.getPostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_updatePostRequest(arg) {
  if (!(arg instanceof posts_pb.updatePostRequest)) {
    throw new Error('Expected argument of type posts.updatePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_updatePostRequest(buffer_arg) {
  return posts_pb.updatePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_updatePostResponse(arg) {
  if (!(arg instanceof posts_pb.updatePostResponse)) {
    throw new Error('Expected argument of type posts.updatePostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_updatePostResponse(buffer_arg) {
  return posts_pb.updatePostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostsService = exports.PostsService = {
  createPost: {
    path: '/posts.Posts/createPost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.createPostRequest,
    responseType: posts_pb.createPostResponse,
    requestSerialize: serialize_posts_createPostRequest,
    requestDeserialize: deserialize_posts_createPostRequest,
    responseSerialize: serialize_posts_createPostResponse,
    responseDeserialize: deserialize_posts_createPostResponse,
  },
  updatePost: {
    path: '/posts.Posts/updatePost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.updatePostRequest,
    responseType: posts_pb.updatePostResponse,
    requestSerialize: serialize_posts_updatePostRequest,
    requestDeserialize: deserialize_posts_updatePostRequest,
    responseSerialize: serialize_posts_updatePostResponse,
    responseDeserialize: deserialize_posts_updatePostResponse,
  },
  deletePost: {
    path: '/posts.Posts/deletePost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.deletePostRequest,
    responseType: posts_pb.deletePostResponse,
    requestSerialize: serialize_posts_deletePostRequest,
    requestDeserialize: deserialize_posts_deletePostRequest,
    responseSerialize: serialize_posts_deletePostResponse,
    responseDeserialize: deserialize_posts_deletePostResponse,
  },
  getPosts: {
    path: '/posts.Posts/getPosts',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.getPostsRequest,
    responseType: posts_pb.getPostsResponse,
    requestSerialize: serialize_posts_getPostsRequest,
    requestDeserialize: deserialize_posts_getPostsRequest,
    responseSerialize: serialize_posts_getPostsResponse,
    responseDeserialize: deserialize_posts_getPostsResponse,
  },
};

exports.PostsClient = grpc.makeGenericClientConstructor(PostsService);
