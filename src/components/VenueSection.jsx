
const VenueSection = () => {
  return (
    <section className="p-8 gap-6 md:p-20 bg-gray-light align-center justify-center max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 font-sans mt-6 ">
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13432.123456789012!2d36.761234!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdef123456789!2sThe%20Hive%20Co-working%20Space!5e0!3m2!1sen!2ske!4v1618384800000!5m2!1sen!2ske"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full h-96"
        ></iframe>
      </div>
      <div className="text-center  mb-6 mt-8">
        <span className="text-orange bold">VENUE</span>
        <h2 className="text-2xl font-bold">Find us Here</h2>
        <p className="text-gray-700">
          The event is happening at a location that fosters creativity and innovation. Mark your calendars and get ready to learn at:
        </p>
        <p className="text-blue-500 font-bold">
          The Hive Co-working Space
          <br />
          Lang’ata Road, Karen, Nairobi, Kenya
        </p>
      </div>
      
    </section>
  );
};

export default VenueSection;
