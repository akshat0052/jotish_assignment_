import React from 'react'
import { useState } from 'react';
import Home from './home';
import { useNavigate} from 'react-router-dom';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const eventlogic = (e) => {
        e.preventDefault();
        if (username === "Testuser" && password === "Test123") {
            navigate("/Home");
            alert("You login succesfully")
        }
        else {
            alert("Incorrect password or Username.");

        }
    }

    return (
        <div>
            <div className='min-h-screen flex justify-center items-center bg-pink-100'>
                <form onSubmit={eventlogic} className='bg-white p-6 rounded shadow-md flex flex-col gap-4 w-80'>
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={(e) =>setUsername(e.target.value)}
                        type="text"
                        id="username"
                        placeholder="Enter Username"
                        className="border p-2 rounded"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        className="border p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
                    >
                        Login
                    </button>
                </form>
            </div>

        </div>
    )
}
