import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "./../utils/axiosInstance.js";
import Loader from "./../components/loader";

export const Context = createContext();

const ContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState({});
    const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);

    const [auth, setAuth] = useState({
        status: 'checking',
        role: null
    });

    // verify auth
    const verifyAuth = async () => {
        try {
            const userRes = await axiosInstance.get(`/api/v1/user/verify`);
            if(userRes.data.success){
                setAuth({
                    status: 'authenticated',
                    role: userRes.data.role
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

    // fetch user profile
    const fetchUserProfile = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/profile`);
            if(response.data.success){
                setUserProfile(response.data.profile);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(auth.status === 'authenticated' && auth.role === 'user'){
            fetchUserProfile();
        }
    },[auth]);

    // fetch jobs for user
    const fetchJobs = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/jobs`);
            if(response.data.success){
                setJobs(response.data.newJobs);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(auth.status === 'authenticated' && auth.role === 'user'){
            fetchJobs();
        }
    },[auth]);

    // fetch applied jobs for user
    const fetchAppliedJobs = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/applied-jobs`);
            if(response.data.success){
                setAppliedJobs(response.data.applications);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(auth.status === 'authenticated' && auth.role === 'user'){
            fetchAppliedJobs();
        }
    },[auth]);

    // fetch saved jobs for user
    const fetchSavedJobs = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/saved-job/`);
            if(response.data.success){
                setSavedJobs(response.data.savedJobs);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(auth.status === 'authenticated' && auth.role === 'user'){
            fetchSavedJobs();
        }
    },[auth]);

    const value = useMemo(()=> ({
        navigate, backendUrl,
        auth, setAuth,
        userProfile, setUserProfile, fetchUserProfile,
        jobs, setJobs,
        appliedJobs, setAppliedJobs, fetchAppliedJobs,
        savedJobs, setSavedJobs,
    }),[auth, userProfile, jobs, appliedJobs, savedJobs, fetchAppliedJobs]);

    return (
        <>
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
        </>
    )
}

export default ContextProvider