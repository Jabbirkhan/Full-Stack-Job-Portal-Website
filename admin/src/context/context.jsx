import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "./../utils/axiosInstance.js";
import Loader from "./../components/loader";

export const Context = createContext();

const ContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const [recruiterProfile, setRecruiterProfile] = useState({});
    const [postedJobs, setPostedJobs] = useState([]);
    const [applicants, setApplicants] = useState([]);

    const [auth, setAuth] = useState({
        status: 'checking',
        role: null
    });

    // verify auth
    const verifyAuth = async () => {
        try {
            const recruiterRes = await axiosInstance.get(`/api/v1/recruiter/verify`);
            if(recruiterRes.data.success){
                setAuth({
                    status: 'authenticated',
                    role: recruiterRes.data.role
                });
                return
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }

        setAuth({
            status: 'unauthenticated',
            role: null
        });
    }

    useEffect(()=>{
        verifyAuth();
    },[]);

    // fetch recruiter profile
    const fetchRecruiterProfile = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/recruiter/profile`);
            if(response.data.success){
                setRecruiterProfile(response.data.profile);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(auth.status === 'authenticated' && auth.role === 'recruiter'){
            fetchRecruiterProfile();
        }
    },[auth]);

    // fetch posted jobs for recruiter
    const fetchPostedJobs = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/recruiter/all-posted-jobs`);
            if(response.data.success){
                setPostedJobs(response.data.jobs);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(auth.status === 'authenticated' && auth.role === 'recruiter'){
            fetchPostedJobs();
        }
    },[auth]);

    // fetch applicants for recruiter
    const fetchApplicants = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/recruiter/all-applicants`);
            if(response.data.success){
                setApplicants(response.data.applicants);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(auth.status === 'authenticated' && auth.role === 'recruiter'){
            fetchApplicants();
        }
    },[auth]);

    const value = useMemo(()=> ({
        navigate, backendUrl,
        auth, setAuth,
        recruiterProfile, setRecruiterProfile, fetchRecruiterProfile,
        postedJobs, setPostedJobs, fetchPostedJobs,
        applicants, setApplicants,
    }),[auth, recruiterProfile, postedJobs, applicants, fetchPostedJobs]);

    return (
        <>
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
        </>
    )
}

export default ContextProvider