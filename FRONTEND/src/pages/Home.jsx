import React, { useEffect, useState } from 'react';
import UrlShortForm from '../components/UrlShortForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // Check if user is logged in by calling backend
    const checkLoginStatus = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_PROFILE_API, {
                withCredentials: true,
            });
            if (response.data.user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            setIsLoggedIn(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post(import.meta.env.VITE_LOGOUT_API, {}, { withCredentials: true });
            setIsLoggedIn(false);
            navigate('/');
        } catch (error) {
            alert('Logout failed');
        }
    };

    if (loading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen relative overflow-hidden bg-[#FEFAF1] p-6">
            {/* Wave background */}
            <div className="w-full h-150 md:h-200 xl:h-150 flex absolute left-0 -bottom-5 lg:-bottom-15">
                <img className="w-full" src="/wave.png" alt="wave" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between z-20 relative">
                <img className="h-12" src="/logo.png" alt="logo" />
                <div className="gap-4 h-auto flex z-50">
                    {isLoggedIn ? (
                        <>
                            <button
                                onClick={() => navigate('/profile')}
                                className="w-20 h-10 border-1 border-gray-400 rounded-lg bg-[#FEFAF1] hover:bg-[#C7AB97] hover:border-none transition-all transform hover:scale-90"
                            >
                                Profile
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-20 h-10 rounded-lg bg-[#c00202] text-white transition-all transform hover:scale-90"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate('/login')}
                                className="w-20 h-10 border-1 border-gray-400 rounded-lg bg-[#FEFAF1] hover:bg-[#C7AB97] hover:border-none transition-all transform hover:scale-90"
                            >
                                Log in
                            </button>
                            <button
                                onClick={() => navigate('/signup')}
                                className="w-20 h-10 rounded-lg bg-[#C7AB97] text-white transition-all transform hover:scale-90"
                            >
                                Sign up
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* URL Shortener Form */}
            <div className="absolute z-20">
                <UrlShortForm />
            </div>
        </div>
    );
};

export default Home;
