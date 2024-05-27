import React from 'react';

const Agenda = () => {
  
  const agendaData = [
    {
      time: '8:30 am - 9:00 am',
      sessionTitle: 'Welcome & Opening Remarks',
      speakers: ['AWS Student Community Kenya Team'],
    },
    {
      time: '9:00 am - 10:30 am',
      sessionTitle: 'Keynotes',
      speakers: ['AWS Student Community Kenya Team'],
    },
    {
      time: '10:30 am - 11:00 am',
      sessionTitle: 'Coffee Break & Networking',
      speakers: ['AWS Student Community Kenya Team'],
      // description: 'This session provides a fundamental understanding of cloud computing concepts... ',
    },
    {
      time: '11:00 am - 1:00 pm',
      sessionTitle: 'Technical Session',
      speakers: ['John Doe, AWS Cloud Architect'],
      // description: 'This session provides a fundamental understanding of cloud computing concepts... ',
    },
    {
      time: '1:00 pm - 2:00 pm',
      sessionTitle: 'Lunch Break',
      speakers: ['AWS Student Community Kenya Team'],
      // description: 'This session provides a fundamental understanding of cloud computing concepts... ',
    },
    {
      time: '2:00 pm - 4:00 pm',
      sessionTitle: 'Technical Session',
      speakers: ['AWS Student Community Kenya Team'],
      // description: 'This session provides a fundamental understanding of cloud computing concepts... ',
    },
    {
      time: '4:00 pm - 5:00 pm',
      sessionTitle: 'Closing and Deepracer Team',
      speakers: ['AWS Student Community Kenya Team'],
      // description: 'This session provides a fundamental understanding of cloud computing concepts... ',
    },
    // Add more agenda items as needed
  ];

  return (
    <section id='agenda' className='p-4 md:p-10 font-sans'>
      <h2 className='text-center text-2xl font-bold mb-8'>Event Agenda</h2>
      <div className="hidden md:block">
        <table className="w-full border-collapse border-none rounded">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Session Title</th>
              <th className="px-4 py-3 text-left">Speaker(s)</th>
              {/* <th className="px-4 py-3">Description</th> */}
            </tr>
          </thead>
          <tbody>
            {agendaData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-dark'}>
                <td className="border px-4 py-2 font-semibold">{item.time}</td>
                <td className="border px-4 py-2">{item.sessionTitle}</td>
                <td className="border px-4 py-2">{item.speakers.join(', ')}</td>
                {/* <td className="border px-4 py-2">{item.description}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="block md:hidden">
        {agendaData.map((item, index) => (
          <div key={index} className={`p-4 mb-4 rounded ${index % 2 === 0 ? 'bg-white' : 'bg-gray-dark'}`}>
            <div className="mb-2">
              <span className="font-semibold">Time:</span> {item.time}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Session Title:</span> {item.sessionTitle}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Speaker(s):</span> {item.speakers.join(', ')}
            </div>
            <div>
              <span className="font-semibold">Description:</span> {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;
