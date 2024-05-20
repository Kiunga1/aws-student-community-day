import React from 'react';
import Cloud_computing from '../assets/cloud_computing.png';
import Aws_community_day from '../assets/aws_community_day.png';
import Aws_cloud_clubs from '../assets/aws_cloud_clubs.png';

const About = () => {
  return (
    <section id='about' className="p-4 md:p-20 bg-gray-light h-auto align-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="grid items-center ">
          <img src={Aws_community_day} alt="AWS Community Day" className="w-full mb-4" />
          <div className="grid grid-cols-2 gap-4">
            <img src={Aws_cloud_clubs} alt="AWS Cloud Clubs" className="w-full h-auto" />
            <img src={Cloud_computing} alt="Cloud Computing" className="w-full h-auto" />
          </div>
        </div>
        <div className='p-4 align-center'>
          <h2 className="text-3xl font-bold mb-4 text-black">About The Event</h2>
          <p className="mb-4 text-black text-base">
            The AWS student community day is a one-day event designed to equip students with the knowledge and skills needed to thrive in the ever-growing cloud computing industry. Whether you are a complete beginner curious about the cloud, or an aspiring cloud professional looking to expand your expertise, this event offers an engaging platform to:
          </p>
          <ul className="list-none space-y-4 text-black text-base">
            <li className="flex items-center">
              <span className="text-pink mr-2">✔️</span>
              <span>Deep dive into the world AWS technologies with expert-led talks and workshops</span>
            </li>
            <li className="flex items-center">
              <span className="text-pink mr-2">✔️</span>
              <span>Learn from renowned speakers in the cloud domain</span>
            </li>
            <li className="flex items-center">
              <span className="text-pink mr-2">✔️</span>
              <span>Connect with fellow students and cloud enthusiasts</span>
            </li>
            <li className="flex items-center">
              <span className="text-pink mr-2">✔️</span>
              <span>Explore exciting career paths in cloud computing</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
