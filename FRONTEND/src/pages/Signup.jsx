import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.fullname.trim() || !formData.email.trim() || !formData.password.trim()) {
            alert('Please fill in all fields.')
            return
        }

        try {
            setLoading(true)
            const response = await axios.post(import.meta.env.VITE_SIGNUP_API, formData, { withCredentials: true })
            alert('✅ Signup successful!')
            navigate('/login')
        } catch (error) {
            alert('❌ Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full min-h-screen relative bg-[#FEFAF1] flex flex-col items-center p-6 overflow-hidden">
            <div className='w-full absolute bottom-0 left-0'>
                <img className='w-full h-145 md:h-200 xl:h-145' src="/wave.png" alt="wave" />
            </div>

            <div className="flex justify-between w-full z-20 mb-16 items-center">
                <img className='h-12' src="logo.png" alt="logo" />
                <div className='flex gap-4'>
                    <button onClick={() => navigate('/login')} className='w-24 h-10 border border-gray-400 rounded-lg bg-[#FEFAF1] hover:bg-[#C7AB97] hover:border-none transition-all transform hover:scale-90'>Log in</button>
                    <button onClick={() => navigate('/signup')} className='w-24 h-10 rounded-lg bg-[#C7AB97] text-white transition-all transform hover:scale-90'>Sign up</button>
                </div>
            </div>

            <div className='w-full md:w-1/3 flex justify-center -mt-20 md:-mt-0 md:hidden z-10'>
                <img className='h-100 md:h-130' src="/login.png" alt="signup illustration" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 z-20 w-full max-w-6xl md:mt-30 xl:mt-0">
                <div className="w-full md:w-2/5 bg-white rounded-3xl border-3 border-t-0 border-[#00000080] p-10 flex flex-col gap-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <h1 className='text-2xl font-medium text-center'>Create a New Account</h1>

                        <input
                            className="w-full px-4 py-3 rounded-xl outline-none bg-white border border-gray-300"
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Enter your full name..."
                            required
                        />

                        <input
                            className="w-full px-4 py-3 rounded-xl outline-none bg-white border border-gray-300"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email..."
                            required
                        />

                        <input
                            className="w-full px-4 py-3 rounded-xl outline-none bg-white border border-gray-300"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password..."
                            required
                        />

                        <button
                            disabled={loading}
                            className='mt-4 px-6 py-3 bg-[#C7AB97] text-xl font-medium rounded-2xl transition-all transform hover:scale-90 disabled:opacity-60 disabled:cursor-not-allowed'
                            type="submit"
                        >
                            {loading ? "Signing up..." : "Sign up"}
                        </button>
                    </form>
                </div>

                <div className='w-full md:w-1/3 justify-center -mt-20 md:-mt-0 hidden lg:block'>
                    <img className='h-100 md:h-130' src="/login.png" alt="signup illustration" />
                </div>
            </div>
        </div>
    )
}

export default Signup
