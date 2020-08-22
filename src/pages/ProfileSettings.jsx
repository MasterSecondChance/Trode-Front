import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ProfilePersonal from '../components/ProfilePersonal/ProfilePersonal';
import messagesIllustration from '../assets/hero-image@2x.png';

const ProfileSettings = () => {
  return (
    <>
      <Header />
      <Hero
        title="Ajustes"
        image={messagesIllustration}
      />
      <ProfilePersonal />
    </>
  )
}

export default ProfileSettings