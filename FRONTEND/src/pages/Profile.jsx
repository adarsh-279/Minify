import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }
    const [user, setUser] = useState(null)
    const [urls, setUrls] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_PROFILE_API, {
                    withCredentials: true
                })
                setUser(response.data.user)
                setUrls(response.data.user.urls || [])
            } catch (error) {
                console.log('Failed to fetch user info:', error)
                navigate('/')
            }
        }
        fetchUser()
    }, [])

    const handleLogout = async () => {
        try {
            await axios.post(import.meta.env.VITE_LOGOUT_API, {}, { withCredentials: true })
            navigate('/')
        } catch (error) {
            console.log('Logout failed:', error)
        }
    }

    const handleDelete = async (shortId) => {
        try {
            await axios.delete(`${import.meta.env.VITE_DELETE_URL_API}/${shortId}`, { withCredentials: true })
            setUrls(prev => prev.filter(url => url._id !== shortId))
        } catch (error) {
            console.log('Delete failed:', error)
        }
    }

    if (!user) return <div className="text-center mt-20">Loading profile...</div>

    const backendURL = import.meta.env.VITE_BACKEND_URL

    return (
        <div className="w-full min-h-screen relative bg-[#FEFAF1] overflow-hidden p-6">
            <div className='w-full bottom-0 left-0 fixed'>
                <img className='w-full h-150' src="/wave.png" alt="wave" />
            </div>

            <div className='flex items-center justify-between z-20 relative mb-6'>
                <img className='h-12' src="/logo.png" alt="logo" />
                <div className='flex gap-4'>
                    <button 
                        onClick={navigateHome} 
                        className='w-24 h-10 rounded-lg bg-[#C7AB97] text-black transition-all transform hover:scale-90'
                    >
                        Home
                    </button>
                    <button 
                        onClick={handleLogout} 
                        className='w-24 h-10 rounded-lg bg-[#c00202] text-white transition-all transform hover:scale-90'
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className='z-20 relative mb-8'>
                <h1 className='text-3xl text-center font-bold'>Hello, {user.fullname}!</h1>
                <p className='text-lg text-center mt-2'>Your Recent Minify URLs</p>
            </div>

            <div className='z-20 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {urls.length === 0 ? (
                    <p>No URLs found</p>
                ) : (
                    urls.map((url) => {
                        const fullShortURL = url.shortURL.startsWith('http')
                            ? url.shortURL
                            : `${backendURL}/${url.shortURL}`

                        return (
                            <div key={url._id} className='bg-white p-4 rounded-2xl shadow-md flex flex-col gap-2'>
                                <p>
                                    <strong>Full URL: </strong> 
                                    <a href={url.fullURL} target="_blank" rel="noopener noreferrer" className='text-blue-600'>
                                        {url.fullURL}
                                    </a>
                                </p>
                                <p>
                                    <strong>Short URL: </strong> 
                                    <a href={fullShortURL} target="_blank" rel="noopener noreferrer" className='text-blue-600'>
                                        {fullShortURL}
                                    </a>
                                </p>
                                <p><strong>Date:</strong> {new Date(url.createdAt).toLocaleDateString()}</p>
                                <p><strong>Clicks:</strong> {url.clicks}</p>
                                <button 
                                    onClick={() => handleDelete(url._id)}
                                    className='mt-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600'
                                >
                                    Delete
                                </button>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Profile
