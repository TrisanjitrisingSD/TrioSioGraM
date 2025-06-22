import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

// ✅ Appwrite Client Setup
export const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL!)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID!);

// ✅ Export Appwrite Configuration Constants
export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID!,
  url: import.meta.env.VITE_APPWRITE_URL!,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID!,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID!,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID!,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID!,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID!,
};

// ✅ Export Appwrite Services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
