import React from 'react';

const Agenda = () => {
  
  const agendaData = [
    {
      time: '9:00 am - 9:30 am',
      sessionTitle: 'Welcome & opening remarks',
      speakers: ['AWS Student Community Kenya Team'],
      description: '',
    },
    {
      time: '9:30 am - 10:30 am',
      sessionTitle: 'Cloud Computing Fundamentals(Beginner Track)',
      speakers: ['John Doe, AWS Cloud Architect'],
      description: 'This session provides a fundamental understanding of cloud computing concepts... ',
    },
    {
      time: '9:30 am - 10:30 am',
      sessionTitle: 'Cloud Computing Fundamentals(Beginner Track)',
      speakers: ['John Doe, AWS Cloud Architect'],
      description: 'This session provides a fundamental understanding of cloud computing concepts... ',
    },
    // Add more agenda items as needed
  ];

  return (
    <div className='p-10'>
      <h2 className='text-center text-2xl font-bold mb-8'>Event Agenda</h2>
      <table className="w-full border-collapse border-none rounded">
        <thead className="bg-black text-white p-4">
          <tr>
            <th className="px-4 py-3">Time</th>
            <th className="px-4 py-3">Session Title</th>
            <th className="px-4 py-3">Speaker(s)</th>
            <th className="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {agendaData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-dark'}>
              <td className="border px-4 py-2">{item.time}</td>
              <td className="border px-4 py-2">{item.sessionTitle}</td>
              <td className="border px-4 py-2">{item.speakers.join(', ')}</td>
              <td className="border px-4 py-2">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Agenda;
