const Places = () => {
  const placesData = [
    {
      title: 'Leh Local Sightseeing',
      price: '$50 / Per Person',
      duration: '3 Days',
      location: 'Los Angeles',
      rating: '8.0 Superb',
    },
    {
      title: 'Thiksey',
      price: '$18 / Per Person',
      duration: '3 Days',
      location: 'Leh',
      rating: '8.0 Superb',
    },
    {
      title: 'Nubra',
      price: '$200 / Per Person',
      duration: '3 Days',
      location: 'Leh',
      rating: '8.0 Superb',
    },
    {
      title: 'Sangam',
      price: '$18 / Per Person',
      duration: '3 Days',
      location: 'Leh',
      rating: '8.0 Superb',
    },
    {
      title: 'Tsomorir',
      price: '$187 / Per Person',
      duration: '3 Days',
      location: 'Leh',
      rating: '8.0 Superb',
    },
    {
      title: 'Magneti Hill',
      price: '$187 / Per Person',
      duration: '3 Days',
      location: 'Los Angeles',
      rating: '8.0 Superb',
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-center text-5xl font-bold text-gray-800 mb-8 pb-8">Favourite Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 pb-16">
        {placesData.map((place, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="text-yellow-500 text-2xl font-bold">{place.rating}</div>
              <h3 className="text-lg font-semibold text-gray-800">{place.title}</h3>
              <p className="text-green-500 text-lg font-semibold">{place.price}</p>
            </div>
            <div className="text-sm text-gray-600 flex justify-between items-center">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a2 2 0 00-2 2v14l6-3 6 3V4a2 2 0 00-2-2H6z" />
                </svg>
                {place.duration}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 3.879a7 7 0 019.9 0 7 7 0 010 9.9l-3.388 3.387a1 1 0 01-1.414 0L5.05 13.779a7 7 0 010-9.9zm2.828 1.415a5 5 0 00-1.415 3.535v.5a5 5 0 001.415 3.535l3.536 3.536 3.535-3.536a5 5 0 00-7.071-7.071z"
                    clipRule="evenodd"
                  />
                </svg>
                {place.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
