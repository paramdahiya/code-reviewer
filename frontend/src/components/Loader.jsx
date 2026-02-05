// render the loading component
import {useEffect, useState} from 'react';
import axios from 'axios';

function Loader(){
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='loader bg-blue-500'>
                <img className='h-24 w-24' src='https://cdn-icons-png.flaticon.com/128/2267/2267359.png'></img>
            </div>
            <div className='text-center font-bold text-[#00d4ff]'>AI is working its magic</div>
            <div className='text-center text-[#e0e0e0]'>Your code is being reviewed</div>
        </div>
    )
}

export default Loader;