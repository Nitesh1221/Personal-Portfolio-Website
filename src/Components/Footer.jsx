import React from 'react'
import PhotoName from './PhotoName'
import PrimeNavBar from './PrimeNavBar'
import SocialContact from './SocialContact'

const Footer = () => {
  return (
    <footer className="bg-neutral-800 absolute bottom-0 left-0 right-0 flex  border ">
      <PhotoName />

      <SocialContact classname="  " />
    </footer>
  );
}

export default Footer