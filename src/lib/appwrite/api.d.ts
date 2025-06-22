import { INewPost, INewUser, IUpdatePost } from "@/types";
export declare function createUserAccount(user: INewUser): Promise<unknown>;
export declare function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: string;
    username?: string;
}): Promise<import("appwrite").Models.Document | undefined>;
export declare function signInAccount(user: {
    email: string;
    password: string;
}): Promise<import("appwrite").Models.Session | undefined>;
export declare function getCurrentUser(): Promise<import("appwrite").Models.Document | undefined>;
export declare function signOutAccount(): Promise<{} | undefined>;
export declare function createPost(post: INewPost): Promise<import("appwrite").Models.Document | undefined>;
export declare function uploadFile(file: File): Promise<import("appwrite").Models.File | undefined>;
export declare function getFileUrl(fileId: string): Promise<string | undefined>;
export declare function deleteFile(fileId: string): Promise<{
    status: string;
} | undefined>;
export declare function getRecentPosts(): Promise<import("appwrite").Models.DocumentList<import("appwrite").Models.Document>>;
export declare function likePost(postId: string, likesArray: string[]): Promise<import("appwrite").Models.Document | undefined>;
export declare function savePost(postId: string, userId: string): Promise<import("appwrite").Models.Document | undefined>;
export declare function deleteSavedPost(savedRecordId: string): Promise<{
    status: string;
} | undefined>;
export declare function getPostById(postId: string): Promise<import("appwrite").Models.Document | undefined>;
export declare function updatePost(post: IUpdatePost): Promise<import("appwrite").Models.Document | undefined>;
export declare function deletePost(postId: string, imageId: string): Promise<{
    status: string;
} | undefined>;
export declare function getInfinitePosts({ pageParam }: {
    pageParam?: string;
}): Promise<import("appwrite").Models.DocumentList<import("appwrite").Models.Document>>;
export declare function searchPosts(searchTerm: string): Promise<import("appwrite").Models.DocumentList<import("appwrite").Models.Document> | undefined>;
export declare function getUsers(limit?: number): Promise<import("appwrite").Models.DocumentList<import("appwrite").Models.Document> | undefined>;
export declare function getUserById(userId: string): Promise<import("appwrite").Models.Document | undefined>;
