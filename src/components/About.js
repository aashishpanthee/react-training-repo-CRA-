import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Default User',
        avatar_url: '',
        bio: 'Loading bio...',
        location: 'Unknown',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/JagritGaire');
    const userProfile = await data.json();
    this.setState({
      user: {
        name: userProfile.name || 'Unknown User',
        avatar_url: userProfile.avatar_url,
        bio: userProfile.bio || 'No bio available',
        location: userProfile.location || 'Unknown',
      },
    });
  }

  render() {
    const { name, avatar_url, bio, location } = this.state.user;

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
  }
}

export default About;
