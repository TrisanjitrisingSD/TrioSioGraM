import { Models } from 'appwrite';
type PostStatsProps = {
    post?: Models.Document;
    userId: string;
};
declare const PostStats: ({ post, userId }: PostStatsProps) => import("react/jsx-runtime").JSX.Element;
export default PostStats;
