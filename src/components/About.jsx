import yourImage from '../assets/bg.png'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-screen p-6">
      <div className="relative lg:w-3/5 w-full">
        <div className="absolute top-1/2 -left-16 transform -rotate-90 origin-left bg-blue-900 text-white text-3xl p-2">
          SINCE 2009
        </div>
        <div className="mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Himalayan Trails Ravels Support Company</h1>
          <p className="text-lg text-gray-700 mb-4">
            The journey of Himalayan trails adventure began in 2012 with a pledge - “When you make a promise to your guests, honour it.” A firm belief in honest and transparent deals, no hidden costs and no compromise on any of the tour plans provided to our valuable customers - that's what makes Himalayan trails adventure the first choice of generations of guests from all over the globe. We strive for 100% guest satisfaction and that has earned us immense goodwill. We specialized divisions to cater to the needs of all types of travelers; whether it is a guest looking for the safety and security of escorted group tours, or someone seeking exclusive customised holidays.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" checked readOnly className="mr-2" />
              Inner Line Permit
            </div>
            <div className="flex items-center">
              <input type="checkbox" checked readOnly className="mr-2" />
              Bike For Rent
            </div>
            <div className="flex items-center">
              <input type="checkbox" checked readOnly className="mr-2" />
              Tours
            </div>
            <div className="flex items-center">
              <input type="checkbox" checked readOnly className="mr-2" />
              Trekking and Adventure
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 w-full">
        <img src={yourImage} alt="Himalayan Trails" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default About;
