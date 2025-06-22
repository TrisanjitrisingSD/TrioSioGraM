import { Models } from 'appwrite'; // Make sure Models is imported
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[]; // This type correctly indicates it's an array of documents
};

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {

  if (isSearchFetching) return <Loader />;

  // FIRST LINE WITH THE ERROR:
  // You are checking if searchedPosts exists AND if its 'documents' property's length is > 0.
  // But searchedPosts IS ALREADY the array of documents. So you check its length directly.
  if (searchedPosts && searchedPosts.length > 0) { // <--- REMOVED .documents HERE
    return (
      // SECOND LINE WITH THE ERROR:
      // You are passing searchedPosts.documents to GridPostList.
      // But searchedPosts IS ALREADY the array of documents. So you pass it directly.
      <GridPostList posts={searchedPosts} /> // <--- REMOVED .documents HERE
    );
  }

  return (
    <p className='text-light-4 mt-10 text-center w-full'>No Results Found</p>
  );
};

export default SearchResults;