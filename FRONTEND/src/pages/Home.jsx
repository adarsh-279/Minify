import React from 'react'
import UrlShortForm from '../components/UrlShortForm'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSignUp = () => {
        navigate('/signup')
    }

    return (
        <>
            <div className='w-full min-h-screen relative overflow-hidden bg-[#FEFAF1] p-6'>
                <div className='w-full flex absolute left-0 -bottom-15'>
                    <img className='w-full' src="/wave.png" alt="" />
                </div>
                <div className='flex items-center justify-between z-20'>
                    <img className='h-12' src="logo.png" alt="" />
                    <div className='gap-4 h-auto flex'>
                        <button onClick={handleLogin} className='w-20 h-10 border-1 border-gray-400 rounded-lg bg-[#FEFAF1] hover:bg-[#C7AB97] hover:border-none duration-300 ease-in-out transition-all transform hover:scale-90'>Log in</button>
                        <button onClick={handleSignUp} className='w-20 h-10 rounded-lg bg-[#C7AB97] transition-all transform hover:scale-90'>Sign up</button>
                    </div>
                </div>
                <div className='absolute z-20'>
                    <UrlShortForm />
                </div>
            </div>
        </>
    )
}

export default Home