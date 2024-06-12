import React from 'react';

const Map = () => {
  return (
    <div className=" flex justify-center w-half h-96 md:h-[450px]">
      <iframe
        className="w-half h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.2594730698206!2d77.58005861455885!3d34.165283119213235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb262bc66f91%3A0x3a1212caecc6a55!2sHotel%20Jigmet!5e0!3m2!1sen!2sin!4v1656411664238!5m2!1sen!2sin"
        width="900"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
