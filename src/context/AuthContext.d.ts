import { IContextType } from '@/types';
export declare const INITIAL_USER: {
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
};
declare const AuthProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default AuthProvider;
export declare const useUserContext: () => IContextType;
