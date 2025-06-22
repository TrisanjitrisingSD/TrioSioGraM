import { Models } from "appwrite";
type UserCardProps = {
    user: Models.Document;
};
declare const UserCard: ({ user }: UserCardProps) => import("react/jsx-runtime").JSX.Element;
export default UserCard;
