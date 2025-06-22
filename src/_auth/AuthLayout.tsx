import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '@/context/AuthContext'; // Import your AuthContext

const AuthLayout = () => {
  const { isAuthenticated } = useUserContext(); // Get isAuthenticated from context

  return (
    <>
      {/* If user is authenticated, redirect to home */}
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        // Render the auth content if not authenticated
        // This section will overlay the main background.
        // Ensure its background is transparent or semi-transparent if you want the main background to show through.
        <section className='flex flex-1 justify-center items-center flex-col py-10'>
          <Outlet />
        </section>
      )}
    </>
  );
};

export default AuthLayout;