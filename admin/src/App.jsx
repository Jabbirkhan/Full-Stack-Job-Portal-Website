import React, { useContext, lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Context } from './context/context';
import { ToastContainer } from 'react-toastify';
import RecruiterNavbar from './components/recruiterComponents/recruiterNavbar';
import Loader from './components/loader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/errorBoundary';

const RecruiterLogin = lazy(()=> import('./pages/recruiter/recruiterLogin'))
const AddJob = lazy(() => import('./pages/recruiter/addJob'));
const PostedJobs = lazy(() => import('./pages/recruiter/postedJobs'));
const Applicants = lazy(() => import('./pages/recruiter/applicants'));
const Recruiterprofile = lazy(() => import('./pages/recruiter/recruiterprofile'));
const RecruiterForgetPassword = lazy(() => import('./pages/recruiter/recruiterForgetPassword'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () => {

  const { auth } = useContext(Context);
  const location = useLocation();

  if (auth.status === 'checking') {
    return <Loader />
  }

  if (auth.status === 'unauthenticated' && location.pathname !== '/recruiter-login' && location.pathname !== '/recruiter-forget-password') {
    return <Navigate to='/recruiter-login' replace />
  }

  return (
    <main>
      <RecruiterNavbar />
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <Suspense fallback={<Loader />}>
          <Routes>
            {auth.role === 'recruiter' && (
              <>
                <Route path='/' element={<AddJob />} />
                <Route path='/posted-jobs' element={<PostedJobs />} />
                <Route path='/applicants' element={<Applicants />} />
                <Route path='/profile' element={<Recruiterprofile />} />
              </>
            )}
            <Route path='/recruiter-login' element={auth.status === 'authenticated' ? <Navigate to='/' replace/> : <RecruiterLogin />} />
            <Route path='/recruiter-forget-password' element={<RecruiterForgetPassword />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}

export default App
