import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About1 = () => {
  const user = useLoaderData();
  const { name, avatar_url, bio, location } = user;

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='p-6 text-center bg-white rounded-lg shadow-lg w-80'>
        <img
          src={avatar_url || 'https://via.placeholder.com/150'}
          alt='Profile'
          className='w-24 h-24 mx-auto mb-4 rounded-full'
        />
        <h2 className='mb-2 text-lg font-bold'>{name}</h2>
        <p className='mb-2 text-sm text-gray-600'>{bio}</p>
        <p className='text-xs text-gray-500'>Location: {location}</p>
      </div>
    </div>
  );
};

export default About1;

export async function fetchUserProfile() {
  const data = await fetch('https://api.github.com/users/JagritGaire');
  return await data.json();
}
