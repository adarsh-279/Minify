import React, { useState } from 'react'
import axios from 'axios'

const UrlShortForm = () => {

    const [formData, setformData] = useState({
        fullURL: '',
        shortURL: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setformData(prev => ({...prev,[name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setformData((prev) => ({ ...prev, shortURL: "" }));

        if (!formData.fullURL.trim()) {
            alert('Please enter a valid URL.')
            return
        }

        try {
            setLoading(true)
            const response = await axios.post(import.meta.env.VITE_SHORTURL_CREATE_API, { url: formData.fullURL }, { withCredentials: true })
            setformData(prev => ({ ...prev, shortURL: response.data.shortURL }))
        } catch (error) {
            console.log('Something went wrong while shortening the url');
        } finally {
            setLoading(false)
        }
    }

        const handleCopy = () => {
            if (formData.shortURL) {
                navigator.clipboard.writeText(formData.shortURL)
                alert('✅ Short URL copied to clipboard!')
            }
        }

    return (
        <>
            <div className='h-full w-full flex items-center justify-between gap-40 pl-35'>
                <div className='w-110 h-110 bg-white rounded-3xl border-3 border-t-0 border-[#00000080] p-10 flex flex-col gap-10'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-2xl font-regular mb-4 text-center'>🔗 Enter your Long URL</h1>
                            <input className="w-full px-4 py-4 rounded-xl outline-none bg-white border" type="text" name="fullURL" id="" value={formData.fullURL} onChange={handleChange}/>
                            <h1 className='text-2xl font-regular mt-10 mb-4 text-center'>Copy your Short URL ⬇️</h1>
                            <div className='relative'>
                                <input className="w-full px-4 py-4 rounded-xl outline-none bg-white border" type="text" name="shortURL" id="" readOnly placeholder='Your short url will appear here...' value={formData.shortURL} />
                                <span className="absolute mt-3 text-2xl cursor-pointer hover:scale-110 transition-transform" title="Copy short URL" onClick={handleCopy}>📋</span>
                            </div>
                            <button disabled={loading} className='px-6 py-4 bg-[#C7AB97] text-xl font-regular rounded-2xl mx-27 my-10 transition-all transform hover:scale-90 disabled:opacity-60 disabled:cursor-not-allowed' type="submit">Generate</button>
                        </form>
                    </div>
                </div>
                <div className=''>
                    <img className='h-150 w-150 -mt-5' src="/home.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default UrlShortForm