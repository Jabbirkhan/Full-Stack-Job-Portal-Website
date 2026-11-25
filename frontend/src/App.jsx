import React, { useContext, lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Context } from './context/context';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Loader from './components/loader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/errorBoundary';
import PrivacyPolicy from './pages/privacyPolicy';
import TermsOfService from './pages/termsOfService';

const UserLogin = lazy(() => import('./pages/userLogin'));
const Home = lazy(() => import('./pages/home'));
const Jobs = lazy(() => import('./pages/jobs'));
const Detail = lazy(() => import('./pages/detail'));
const AppliedJobs = lazy(() => import('./pages/appliedJobs'));
const SavedJobs = lazy(() => import('./pages/savedJobs'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Profile = lazy(() => import('./pages/profile'));
const VerifyEmail = lazy(()=> import('./components/verifyEmail'))
const UserForgetPassword = lazy(() => import('./pages/userForgetPassword'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () => {

  const { auth } = useContext(Context);
  const location = useLocation();

  if (auth.status === 'checking') {
    return <Loader />
  }

  if (auth.status === 'unauthenticated' && location.pathname !== '/user-login' && location.pathname !== '/user-forget-password' && location.pathname !== '/privacy-policy' && location.pathname !== '/terms-of-service') {
    return <Navigate to='/user-login' replace />
  }

  return (
    <main>
      <Navbar />
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <Suspense fallback={<Loader />}>
          <Routes>
            {auth.role === 'user' && (
              <>
                <Route path='/' element={<Home />} />
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/applied-jobs' element={<AppliedJobs />} />
                <Route path='/saved-jobs' element={<SavedJobs />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/verify-email' element={<VerifyEmail />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </>
            )}
            <Route path='/user-login' element={auth.status === 'authenticated' ? <Navigate to='/' replace/> : <UserLogin />} />
            <Route path='/user-forget-password' element={<UserForgetPassword />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-service' element={<TermsOfService />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </main>
  )
}

export default App
