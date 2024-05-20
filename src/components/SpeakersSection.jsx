

const SpeakersSection = () => {
  const speakers = [
    {
      name: 'Jane Smith',
      title: 'Sr. Solutions Architect',
      description: 'A Senior solutions architect at AWS, helping customers design and implement solutions that meet their specific business needs.',
      image: '/path/to/image1.png',
    },
    {
      name: 'John Doe',
      title: 'AWS Cloud Architect',
      description: 'A seasoned cloud architect with over 10 years experience designing and building secure and scalable cloud solutions on AWS.',
      image: '/path/to/image2.png',
    },
    {
      name: 'David Kim',
      title: 'Cloud Security Engineer',
      description: 'A cloud security engineer specializing in cloud environments and protecting sensitive data.',
      image: 'david.png',
    },
    {
      name: 'Maria Garcia',
      title: 'Machine Learning Engineer',
      description: 'A passionate advocate for open source technologies and mentor for future generations of AI and cloud based enthusiasts.',
      image: '/path/to/image4.png',
    },
    // Add more speakers as needed
  ];

  return (
    <section className="p-6 lg:p-20 bg-gray-light font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-black font-sans font-semibold mb-12">
          <span className="text-orange font-semibold text-xl">SPEAKERS</span>
          <br />
          Meet the Cloud Experts
        </h2>
        <div className="flex overflow-x-scroll space-x-4 px-4">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex-shrink-0 w-80 h-40 bg-white p-4 rounded-lg shadow-lg text-left relative">
              <img src={speaker.image} alt={speaker.name} className="h-20 w-20 rounded-full mx-auto mb-4 absolute " />
              <div className='pl-20 mb-6'>
                <h3 className="text-base font-medium text-black">{speaker.name}</h3>
                <p className="text-gray-500 font-light text-xs">{speaker.title}</p>
              </div>
              
              <p className="text-black text-xs font-normal">{speaker.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {/* Pagination dots can be dynamically rendered based on the number of speakers */}
          <span className="h-3 w-3 bg-gray-300 rounded-full inline-block"></span>
          <span className="h-3 w-3 bg-yellow-500 rounded-full inline-block"></span>
          <span className="h-3 w-3 bg-gray-300 rounded-full inline-block"></span>
          <span className="h-3 w-3 bg-gray-300 rounded-full inline-block"></span>
          <span className="h-3 w-3 bg-gray-300 rounded-full inline-block"></span>
          <span className="h-3 w-3 bg-gray-300 rounded-full inline-block"></span>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
