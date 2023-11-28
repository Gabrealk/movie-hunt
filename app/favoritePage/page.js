import Link from "next/link";
import React from "react"

export default function favpage() {
    return (
        <main className="flex justify-center items-center w-full h-screen">
            <div class="w-full max-w-md bg-black p-10 rounded-lg shadow-md">
                <h1 className="text-2x1 text-white font-bold mb-8"> Favorite</h1>
                <form>
                    <label className="block mb-10">
                        <input 
                        type="text" placeholder="Item name" class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                        </input>
                    </label>
                    <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-700 hover:bg-blue-500 text-white rounded-lg">+</button> 
                </form>
                <label>
                    <button className="w-full mt-4 py-2 px-4 bg-purple-700 hover:bg-purple-500 text-white rounded-lg">
                    <Link href="/">&lt;- Back</Link>
                    </button> 
                   </label>
            </div>
        </main>
    );
}