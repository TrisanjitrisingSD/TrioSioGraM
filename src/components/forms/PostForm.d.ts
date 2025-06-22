import { Models } from "appwrite";
type PostFormProps = {
    post?: Models.Document;
    action: 'Create' | 'Update';
};
declare const PostForm: ({ post, action }: PostFormProps) => import("react/jsx-runtime").JSX.Element;
export default PostForm;
