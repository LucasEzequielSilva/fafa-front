import React from 'react'

export default function Profile() {
  return (
    <div className='w-[80%] shadow-lg grow min-h-screen px-20 py-8'>
        <div className='h-[20vh] w-full flex gap-4'>
            <img className="w-28 h-28 border shadow-md rounded-md" src="https://assetsio.reedpopcdn.com/big_boss.jpg.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" alt="profile-img" />
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4'>
                    <div className='flex gap-2 items-center'>
                        <h3 className='font-bold text-title'>Iván Silva</h3>
                        <p className='text-gray-400 font-medium text-sm'>Sifri</p>
                    </div>
                    <button className='text-white bg-gradient-to-t from-black to-[#444] py-1 px-8 text-sm rounded-md'>Editar</button>
                </div>
                <p className='text-md text-text'>Tu podrás hacer danzar, pero jamás podrás no ser danzado.</p>
            </div>
        </div>
        <div className='h-[30vh] w-full'></div>
        <div className='h-[50vh] w-full'></div>
    </div>
  )
}
