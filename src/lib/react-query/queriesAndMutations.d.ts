import { INewPost, INewUser, IUpdatePost } from '@/types';
import { Models } from 'appwrite';
export declare const useCreateUserAccount: () => import("@tanstack/react-query").UseMutationResult<unknown, Error, INewUser, unknown>;
export declare const useSignInAccount: () => import("@tanstack/react-query").UseMutationResult<Models.Session | undefined, Error, {
    email: string;
    password: string;
}, unknown>;
export declare const useSignOutAccount: () => import("@tanstack/react-query").UseMutationResult<{} | undefined, Error, void, unknown>;
export declare const useCreatePost: () => import("@tanstack/react-query").UseMutationResult<Models.Document | undefined, Error, INewPost, unknown>;
export declare const useGetRecentPosts: () => import("@tanstack/react-query").UseQueryResult<Models.DocumentList<Models.Document>, Error>;
export declare const useLikePost: () => import("@tanstack/react-query").UseMutationResult<Models.Document | undefined, Error, {
    postId: string;
    likesArray: string[];
}, unknown>;
export declare const useSavePost: () => import("@tanstack/react-query").UseMutationResult<Models.Document | undefined, Error, {
    postId: string;
    userId: string;
}, unknown>;
export declare const useDeleteSavedPost: () => import("@tanstack/react-query").UseMutationResult<{
    status: string;
} | undefined, Error, string, unknown>;
export declare const useGetCurrentUser: () => import("@tanstack/react-query").UseQueryResult<Models.Document | undefined, Error>;
export declare const useGetPostById: (postId: string) => import("@tanstack/react-query").UseQueryResult<Models.Document | undefined, Error>;
export declare const useUpdatePost: () => import("@tanstack/react-query").UseMutationResult<Models.Document | undefined, Error, IUpdatePost, unknown>;
export declare const useDeletePost: () => import("@tanstack/react-query").UseMutationResult<{
    status: string;
} | undefined, Error, {
    postId: string;
    imageId: string;
}, unknown>;
export declare const useGetPosts: () => import("@tanstack/react-query").UseInfiniteQueryResult<Models.DocumentList<Models.Document>, Error>;
export declare const useSearchPosts: (searchTerm: string) => import("@tanstack/react-query").UseQueryResult<Models.DocumentList<Models.Document> | undefined, Error>;
export declare const useGetUsers: (limit?: number) => import("@tanstack/react-query").UseQueryResult<Models.DocumentList<Models.Document> | undefined, Error>;
export declare const useGetUserById: (userId: string) => import("@tanstack/react-query").UseQueryResult<Models.Document | undefined, Error>;
