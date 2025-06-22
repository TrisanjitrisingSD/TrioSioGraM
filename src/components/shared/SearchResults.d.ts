import { Models } from 'appwrite';
type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.DocumentList<Models.Document>;
};
declare const SearchResults: ({ isSearchFetching, searchedPosts }: SearchResultsProps) => import("react/jsx-runtime").JSX.Element;
export default SearchResults;
