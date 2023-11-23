import React from 'react';

export default function SortButtons() {
  return (
    <main className="flex bg-screen">

        <div className="flex flex-row">
            <div>
                <button className="font-bold 
                        px-7 py-2 
                        text-black 
                        bg-blue-700 
                        border-2 border-black m-4 rounded 
                        hover:bg-blue-500
                        ">genre
                </button>
            </div>

            <div>
                <button className="font-bold 
                        px-7 py-2 
                        text-black 
                        bg-blue-700 
                        border-2 border-black m-4 rounded 
                        hover:bg-blue-500">year
                </button>
            </div>

            <div>
                <button className="font-bold 
                        px-7 py-2 
                        text-black 
                        bg-blue-700 
                        border-2 border-black m-4 rounded 
                        hover:bg-blue-500">favorites
                </button>
            </div>

            <div>
                
            </div>
        </div>
    </main>
  )
}
