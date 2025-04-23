
"use client"

import SubmitButton from "@/components/submit"
import { useState } from "react"

export default function Signup() {
    const [formFocus, setFormFocus] = useState(false);
    
    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-md relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-75 animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjEyMCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iMTgwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSIyNDAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjMwMCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iMzYwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI0MjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjQ4MCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNTQwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI2MDAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjY2MCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNzIwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI3ODAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9Ijg0MCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iOTAwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI5NjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjEwMjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjEwODAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjExNDAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjEyMDAiIHI9IjYwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            {[...Array(5)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute rounded-full bg-white opacity-30 animate-float"
                                    style={{
                                        width: `${Math.random() * 6 + 2}px`,
                                        height: `${Math.random() * 6 + 2}px`,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 5}s`,
                                        animationDuration: `${Math.random() * 10 + 10}s`
                                    }}
                                />
                            ))}
                        </div>
                        <h1 className="text-3xl font-bold text-center text-white relative z-10 transform transition-all duration-300 hover:scale-105 animate-text-shadow">
                            Smart Route
                        </h1>
                    </div>
                    
                    {/* Form content */}
                    <div className="px-8 py-6 bg-gray-900">
                        <div className="mb-6">
                            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Sign Up
                            </div>
                            <p className="text-gray-400 mt-2">Create your account and start your journey</p>
                        </div>
                        
                        <div className="space-y-1">
                            <LabelledInput label="Username" placeholder="Enter username" />
                            <div className="grid grid-cols-2 gap-4">
                                <LabelledInput label="First Name" placeholder="Enter first name" />
                                <LabelledInput label="Last Name" placeholder="Enter last name" />
                            </div>
                            <LabelledInput label="Password" type="password" placeholder="Enter password" />
                            <LabelledInput label="Confirm Password" type="password" placeholder="Confirm password" />
                            
                            <div className="mt-8 flex justify-center">
                                <button 
                                    className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
                                >
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-700 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Sign Up</span>
                                    <span className="relative invisible">Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fixed inset-0 -z-10 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-white animate-twinkle"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

function LabelledInput({ label, placeholder, type }) {
    return (
        <div className="group mb-4">
            <label className="block mb-2 text-sm font-semibold text-gray-300 group-focus-within:text-blue-400 transition-colors duration-200">
                {label}
            </label>
            <div className="relative">
                <input 
                    type={type || "text"} 
                    className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                    placeholder={placeholder} 
                    required 
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" style={{ zIndex: -1, filter: "blur(4px)" }}></div>
            </div>
        </div>
    )
}