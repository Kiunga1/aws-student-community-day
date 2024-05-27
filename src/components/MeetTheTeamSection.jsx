import JoycePic from '../assets/joyce.jpeg';
import LinetPic from '../assets/linet.jpg';
import ColincePic from '../assets/colince.png';


const MeetTheTeamSection = () => {
  return (
    <section id='team' className="py-16 bg-gray-light font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-black font-sans font-semibold mb-12">
          <span className="text-orange font-semibold text-xl">TEAM</span>
          <br />
          Meet the Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 lg:p-20">
          <div className="flex flex-col items-center">
            <img src={LinetPic} alt="Linet  Passport photo" className="w-40 h-40 rounded-md mb-4" />
            <h3 className="text-xl font-medium text-black">Linet Kendi</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={ColincePic} alt="Colince passport photo" className="w-40 h-40 rounded-md mb-4" />
            <h3 className="text-xl font-medium text-black">Colince Temoi</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={JoycePic} alt="Joyce Wainaina passport photo" className="w-40 h-40 rounded-md mb-4" />
            <h3 className="text-xl font-medium text-black">Joyce Wainaina</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;


// import React from 'react';

// const MeetTheTeamSection = () => {
//   const teamMembers = [
//     {
//       name: '',
//       image: '../assets/david.png',
//     },
//     {
//       name: 'Daniel Johnson',
//       image: '/path/to/image2.png',
//     },
//     {
//       name: 'William Anderson',
//       image: '/path/to/image3.png',
//     },
//     {
//       name: 'Emily Jones',
//       image: '/path/to/image4.png',
//     },
//     {
//       name: 'Sarah Miller',
//       image: '/path/to/image5.png',
//     },
//     // Add more team members as needed
//   ];

//   return (
//     <section className="py-16 bg-gray-light font-sans">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl text-black font-sans font-semibold mb-12">
//           <span className="text-orange font-semibold text-xl">TEAM</span>
//           <br />
//           Meet the Team
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 lg:p-20">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mb-4" />
//               <h3 className="text-xl font-medium text-black">{member.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetTheTeamSection;
