import * as z from "zod";
export declare const SignupValidation: z.ZodObject<{
    name: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    password: string;
    username: string;
}, {
    email: string;
    name: string;
    password: string;
    username: string;
}>;
export declare const SigninValidation: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const PostValidation: z.ZodObject<{
    caption: z.ZodString;
    file: z.ZodType<File[], z.ZodTypeDef, File[]>;
    location: z.ZodString;
    tags: z.ZodString;
}, "strip", z.ZodTypeAny, {
    caption: string;
    location: string;
    file: File[];
    tags: string;
}, {
    caption: string;
    location: string;
    file: File[];
    tags: string;
}>;
