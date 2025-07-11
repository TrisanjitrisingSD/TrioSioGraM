import GridPostList from '@/components/shared/GridPostList';
import Loader from '@/components/shared/Loader';
import SearchResults from '@/components/shared/SearchResults';
import { Input } from '@/components/ui/input';
import useDebounce from '@/hooks/useDebounce';
import { useGetPosts, useSearchPosts } from '@/lib/react-query/queriesAndMutations';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Explore = () => {
  const { ref, inView } = useInView();
  const { data: posts, fetchNextPage, hasNextPage } = useGetPosts(); // posts is InfiniteData<DocumentList<AppwriteDocument>, string | null> | undefined

  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebounce(searchValue, 500);
  // searchedPosts is DocumentList<Models.Document> | undefined
  const { data: searchedPosts, isFetching: isSearchFetching } = useSearchPosts(debouncedValue);

  useEffect(() => {
    if (inView && !searchValue && hasNextPage) { // Add hasNextPage check
      fetchNextPage();
    }
  }, [inView, searchValue, fetchNextPage, hasNextPage]); // Add fetchNextPage and hasNextPage to deps

  if (!posts) {
    return (
      <div className='flex-center w-full h-full '>
        <Loader />
      </div>
    );
  }

  const shouldShowSearchResults = searchValue !== '';

  // Check if posts.pages exists and then if every item.documents is empty
  // item can be undefined, so add item?.documents
  const shouldShowPosts = !shouldShowSearchResults && posts.pages.every((item) => item?.documents?.length === 0);

  return (
    <div className='explore_container'>
      <div className='explore-inner_container' >
        <h2 className='h3-bold md:h2-bold w-full'>Search Posts</h2>
        <div className='flex gap-1 px-4 w-full rounded-lg bg-dark-4'>
          <img
            src='/assets/icons/search.svg'
            width={24}
            height={24}
            alt="search"
          />
          <Input type="text" placeholder='Search' className='explore-search' value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className='flex-between w-full max-w-5xl mt-16 mb-7'>
        <h2 className='body-bold md:h3-bold'>Popular Today</h2>
        <div className='flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer'>
          <p className='small-medium md:base-mmedium text-light-2'> All</p>
          <img src='/assets/icons/filter.svg' width={20} height={20} alt="filter" />
          <div className='flex flex-wrap gap-9 w-full max-w-5xl'>
            {shouldShowSearchResults ? (
              // Pass searchedPosts.documents (if searchedPosts exists) or an empty array
              <SearchResults
                isSearchFetching={isSearchFetching}
                searchedPosts={searchedPosts?.documents || []} // Crucial change here
              />
            ) : shouldShowPosts ? (
              <p className='text-light-4 mt-10 text-center w-full'>End of posts</p>
            ) : (
              posts.pages.map((item, index) => (
                // Add conditional check for item if it can be undefined from pages array
                item && <GridPostList key={`page-${index}`} posts={item.documents} />
              ))
            )}
          </div>
        </div>
      </div>
      {hasNextPage && !searchValue && (
        <div ref={ref} className='mt-10'>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Explore;