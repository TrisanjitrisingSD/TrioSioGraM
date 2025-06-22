type FileUploaderProps = {
    fieldChange: (FILES: File[]) => void;
    mediaUrl: string;
};
declare const FileUploader: ({ fieldChange, mediaUrl }: FileUploaderProps) => import("react/jsx-runtime").JSX.Element;
export default FileUploader;
