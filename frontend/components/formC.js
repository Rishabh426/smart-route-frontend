"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TravelForm({ onSubmit }) {
  const locations = ["almora", "pithoragarh", "bhowali", "haldwani"];
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [templeVisit, setTempleVisit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ticket, setTicket] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch('http://localhost:5003/api/timeslots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to,
          date,
          time,
          vehicleType,
          vehicleNumber,
          templeVisit,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.message || 'Something went wrong');
      console.log("successfull");
      setTicket(data.ticketId); 
      
      <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
      <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
      </svg>
      Loading...
      </button>
      setTimeout(() => {
        router.push("/user/pass");
      }, 5000);

    } catch (err) {
      setError(err.message);
    } finally {
      
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        <div className="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjEyMCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iMTgwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSIyNDAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjMwMCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iMzYwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI0MjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjQ4MCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNTQwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI2MDAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjY2MCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNzIwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI3ODAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9Ijg0MCIgcj0iNjAiLz48Y2lyY2xlIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iOTAwIiByPSI2MCIvPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI5NjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjEwMjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjEwODAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjExNDAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjEyMDAiIHI9IjYwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            
            <h1 className="text-3xl font-bold text-center text-white relative z-10 transform transition-all duration-300 hover:scale-105 animate-text-shadow">
              Smart Route
            </h1>
            <p className="text-center text-blue-100 mt-2 relative z-10 animate-pulse">
              Your Travel Partner
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-gray-900">
            <div className="space-y-2 group">
              <label htmlFor="from" className="block text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                From
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <select
                  id="from"
                  name="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500 group-hover:shadow-md"
                  required
                >
                  <option value="" disabled>Where are you departing from?</option>
                  {locations.map((location) => (
                    <option 
                      key={`from-${location}`} 
                      value={location}
                      disabled={location === to && to !== ""}
                    >
                      {location.charAt(0).toUpperCase() + location.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" style={{ zIndex: -1, filter: "blur(4px)" }}></div>
              </div>
            </div>
            <div className="space-y-2 group">
              <label htmlFor="to" className="block text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                To
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <select
                  id="to"
                  name="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500 group-hover:shadow-md"
                  required
                >
                  <option value="" disabled>Where would you like to go?</option>
                  {locations.map((location) => (
                    <option 
                      key={`to-${location}`} 
                      value={location}
                      disabled={location === from && from !== ""}
                    >
                      {location.charAt(0).toUpperCase() + location.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" style={{ zIndex: -1, filter: "blur(4px)" }}></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2 group">
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                  Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500 group-hover:shadow-md"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" style={{ zIndex: -1, filter: "blur(4px)" }}></div>
                </div>
              </div>
              
              {/* Add time input field */}
              <div className="space-y-2 group">
                <label htmlFor="time" className="block text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                  Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500 group-hover:shadow-md"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" style={{ zIndex: -1, filter: "blur(4px)" }}></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 group">
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                  Vehicle Type
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-4a.996.996 0 00-.293-.707l-4-4A1 1 0 0015 4H3z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="vehicleType"
                    name="vehicleType"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    placeholder="Car, Bus, Bike, etc."
                    className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500 group-hover:shadow-md"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" style={{ zIndex: -1, filter: "blur(4px)" }}></div>
                </div>
              </div>
              
              <div className="space-y-2 group">
                <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                  Vehicle Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 5h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2zM4 7h2v2H4V7zm0 4h2v2H4v-2zm0 4h2v2H4v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="vehicleNumber"
                    name="vehicleNumber"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    placeholder="Enter vehicle registration"
                    className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500 group-hover:shadow-md"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" style={{ zIndex: -1, filter: "blur(4px)" }}></div>
                </div>
              </div>
            </div>

            <div className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group border border-gray-700 hover:border-blue-500">
              <input
                id="templeVisit"
                name="templeVisit"
                type="checkbox"
                checked={templeVisit}
                onChange={(e) => setTempleVisit(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded transition-all duration-200 group-hover:border-blue-400"
              />
              <label htmlFor="templeVisit" className="ml-2 block text-sm text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
                Include temple visits in the route
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-medium rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-45 -translate-x-full group-hover:animate-shine"></span>
              
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">Find My Route</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}