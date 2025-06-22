import { type ClassValue } from "clsx";
export declare function cn(...inputs: ClassValue[]): string;
export declare const convertFileToUrl: (file: File) => string;
export declare function formatDateString(dateString: string): string;
export declare const multiFormatDateString: (timestamp?: string) => string;
export declare const checkIsLiked: (likeList: string[], userId: string) => boolean;
