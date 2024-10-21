// package: posts
// file: posts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class createPostRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): createPostRequest;
    getDescription(): string;
    setDescription(value: string): createPostRequest;
    clearImagesList(): void;
    getImagesList(): Array<string>;
    setImagesList(value: Array<string>): createPostRequest;
    addImages(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): createPostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: createPostRequest): createPostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: createPostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): createPostRequest;
    static deserializeBinaryFromReader(message: createPostRequest, reader: jspb.BinaryReader): createPostRequest;
}

export namespace createPostRequest {
    export type AsObject = {
        title: string,
        description: string,
        imagesList: Array<string>,
    }
}

export class createPostResponse extends jspb.Message { 

    hasPost(): boolean;
    clearPost(): void;
    getPost(): Post | undefined;
    setPost(value?: Post): createPostResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): createPostResponse.AsObject;
    static toObject(includeInstance: boolean, msg: createPostResponse): createPostResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: createPostResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): createPostResponse;
    static deserializeBinaryFromReader(message: createPostResponse, reader: jspb.BinaryReader): createPostResponse;
}

export namespace createPostResponse {
    export type AsObject = {
        post?: Post.AsObject,
    }
}

export class updatePostRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): updatePostRequest;
    getTitle(): string;
    setTitle(value: string): updatePostRequest;
    getDescription(): string;
    setDescription(value: string): updatePostRequest;
    clearImagesList(): void;
    getImagesList(): Array<string>;
    setImagesList(value: Array<string>): updatePostRequest;
    addImages(value: string, index?: number): string;
    getArchive(): boolean;
    setArchive(value: boolean): updatePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): updatePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: updatePostRequest): updatePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: updatePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): updatePostRequest;
    static deserializeBinaryFromReader(message: updatePostRequest, reader: jspb.BinaryReader): updatePostRequest;
}

export namespace updatePostRequest {
    export type AsObject = {
        Id: string,
        title: string,
        description: string,
        imagesList: Array<string>,
        archive: boolean,
    }
}

export class updatePostResponse extends jspb.Message { 

    hasPost(): boolean;
    clearPost(): void;
    getPost(): Post | undefined;
    setPost(value?: Post): updatePostResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): updatePostResponse.AsObject;
    static toObject(includeInstance: boolean, msg: updatePostResponse): updatePostResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: updatePostResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): updatePostResponse;
    static deserializeBinaryFromReader(message: updatePostResponse, reader: jspb.BinaryReader): updatePostResponse;
}

export namespace updatePostResponse {
    export type AsObject = {
        post?: Post.AsObject,
    }
}

export class deletePostRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): deletePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): deletePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: deletePostRequest): deletePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: deletePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): deletePostRequest;
    static deserializeBinaryFromReader(message: deletePostRequest, reader: jspb.BinaryReader): deletePostRequest;
}

export namespace deletePostRequest {
    export type AsObject = {
        Id: string,
    }
}

export class deletePostResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): deletePostResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): deletePostResponse.AsObject;
    static toObject(includeInstance: boolean, msg: deletePostResponse): deletePostResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: deletePostResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): deletePostResponse;
    static deserializeBinaryFromReader(message: deletePostResponse, reader: jspb.BinaryReader): deletePostResponse;
}

export namespace deletePostResponse {
    export type AsObject = {
        message: string,
    }
}

export class getPostsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): getPostsRequest;
    getPage(): number;
    setPage(value: number): getPostsRequest;
    getS(): string;
    setS(value: string): getPostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getPostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: getPostsRequest): getPostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getPostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getPostsRequest;
    static deserializeBinaryFromReader(message: getPostsRequest, reader: jspb.BinaryReader): getPostsRequest;
}

export namespace getPostsRequest {
    export type AsObject = {
        limit: number,
        page: number,
        s: string,
    }
}

export class getPostsResponse extends jspb.Message { 
    clearPostsList(): void;
    getPostsList(): Array<Post>;
    setPostsList(value: Array<Post>): getPostsResponse;
    addPosts(value?: Post, index?: number): Post;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): _meta | undefined;
    setMeta(value?: _meta): getPostsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getPostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: getPostsResponse): getPostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getPostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getPostsResponse;
    static deserializeBinaryFromReader(message: getPostsResponse, reader: jspb.BinaryReader): getPostsResponse;
}

export namespace getPostsResponse {
    export type AsObject = {
        postsList: Array<Post.AsObject>,
        Meta?: _meta.AsObject,
    }
}

export class _meta extends jspb.Message { 
    getTotalpages(): number;
    setTotalpages(value: number): _meta;
    getCount(): number;
    setCount(value: number): _meta;
    getPage(): number;
    setPage(value: number): _meta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): _meta.AsObject;
    static toObject(includeInstance: boolean, msg: _meta): _meta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: _meta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): _meta;
    static deserializeBinaryFromReader(message: _meta, reader: jspb.BinaryReader): _meta;
}

export namespace _meta {
    export type AsObject = {
        totalpages: number,
        count: number,
        page: number,
    }
}

export class Post extends jspb.Message { 
    getId(): string;
    setId(value: string): Post;
    getTitle(): string;
    setTitle(value: string): Post;
    getCreatedat(): string;
    setCreatedat(value: string): Post;
    getDescription(): string;
    setDescription(value: string): Post;
    clearImagesList(): void;
    getImagesList(): Array<string>;
    setImagesList(value: Array<string>): Post;
    addImages(value: string, index?: number): string;

    hasArchive(): boolean;
    clearArchive(): void;
    getArchive(): boolean | undefined;
    setArchive(value: boolean): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        Id: string,
        title: string,
        createdat: string,
        description: string,
        imagesList: Array<string>,
        archive?: boolean,
    }
}
