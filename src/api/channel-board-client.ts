/*
 * Created on Sun Jun 28 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import { SessionApiClient } from "./web-api-client";
import { Long } from "bson";
import { WebApiStruct } from "../talk/struct/web-api-struct";

export class ChannelBoardClient extends SessionApiClient {

    get Scheme() {
        return 'https';
    }

    get Host() {
        return 'talkmoim-api.kakao.com';
    }

    async requestPostList(channelId: Long): Promise<unknown> {
        return this.request('GET', `chats/${channelId.toString()}/posts`);
    }

    async getPost(postId: string): Promise<unknown> {
        return this.request('GET', `posts/${postId}`);
    }

    async getPostEmotionList(postId: string): Promise<unknown> {
        return this.request('GET', `posts/${postId}/emotions`);
    }

    async getPostCommentList(postId: string): Promise<unknown> {
        return this.request('GET', `posts/${postId}/comments`);
    }

    async setPostNotice(postId: string): Promise<unknown> {
        return this.request('POST', `posts/${postId}/set_notice`);
    }

    async unsetPostNotice(postId: string): Promise<unknown> {
        return this.request('POST', `posts/${postId}/unset_notice`);
    }

    async sharePostToChannel(postId: string): Promise<WebApiStruct> {
        return this.request('POST', `posts/${postId}/share`);
    }

}

export class OpenChannelBoardClient extends SessionApiClient {

    get Scheme() {
        return 'https';
    }

    get Host() {
        return 'open.kakao.com';
    }

    async requestPostList(linkId: Long, channelId: Long): Promise<unknown> {
        return this.request('GET', `moim/chats/${channelId.toString()}/posts?link_id=${linkId.toString()}`);
    }

    async getPost(linkId: Long, postId: string): Promise<unknown> {
        return this.request('GET', `moim/posts/${postId}?link_id=${linkId.toString()}`);
    }

    async getPostEmotionList(linkId: Long, postId: string): Promise<unknown> {
        return this.request('GET', `moim/posts/${postId}/emotions?link_id=${linkId.toString()}`);
    }

    async getPostCommentList(linkId: Long, postId: string): Promise<unknown> {
        return this.request('GET', `moim/posts/${postId}/comments?link_id=${linkId.toString()}`);
    }

    async setPostNotice(linkId: Long, postId: string): Promise<unknown> {
        return this.request('POST', `moim/posts/${postId}/set_notice?link_id=${linkId.toString()}`);
    }

    async unsetPostNotice(linkId: Long, postId: string): Promise<unknown> {
        return this.request('POST', `posts/${postId}/unset_notice?link_id=${linkId.toString()}`);
    }

    async sharePostToChannel(linkId: Long, postId: string): Promise<WebApiStruct> {
        return this.request('POST', `moim/posts/${postId}/share?link_id=${linkId.toString()}`);
    }

}