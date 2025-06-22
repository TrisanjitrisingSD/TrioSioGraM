import { Models } from "appwrite";
type GridPostListProps = {
    posts: Models.Document[];
    showUser?: boolean;
    showStats?: boolean;
};
declare const GridPostList: ({ posts, showUser, showStats, }: GridPostListProps) => import("react/jsx-runtime").JSX.Element;
export default GridPostList;
