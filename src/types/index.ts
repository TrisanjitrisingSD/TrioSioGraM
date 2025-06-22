import { Models } from 'appwrite'; // Import Models if you're using Appwrite's document types

export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: string;
  file: File[];
};

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string; // Consider if this should be `string[]` if multiple tags
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: string;
  file: File[];
  location?: string;
  tags?: string; // Consider if this should be `string[]` if multiple tags
};

// Based on your Appwrite setup and how you populate the user object
// If these are directly from Appwrite document, add system properties
export type IUser = {
  $id: string; // Appwrite document ID. Your current `id` property should likely be `$id`
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
  // Add other Appwrite system properties if you use them, e.g., $createdAt, $updatedAt
  // $collectionId?: string;
  // $databaseId?: string;
  // $permissions?: string[];
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type IContextType = {
  user: IUser;
  // THIS IS THE CRITICAL FIX:
  // setUser should be able to set an IUser object, not a boolean.
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLoading: boolean;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};


// --- Additional types often useful with Appwrite and React Query ---

// Represents an individual Appwrite Post document in your collections
// Extend Models.Document if you want to include all Appwrite system properties
export interface AppwritePostDocument extends Models.Document {
  caption: string;
  imageUrl: string;
  location?: string;
  tags?: string[]; // Assuming tags are stored as an array of strings
  creator: Models.Document; // Or a more specific type like AppwriteUserDocument if linked
  likes: string[]; // Array of user IDs who liked it
  // Add any other specific fields for your 'post' collection
}

// Represents the structure returned by Appwrite's listDocuments
export interface DocumentList<T> {
  total: number;
  documents: T[];
}