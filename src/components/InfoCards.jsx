
const InfoCard = () => {
  const infoData = [
    {
      icon: '👤', // Placeholder for the icon
      text: '8000+ Our Local Guides',
    },
    {
      icon: '🔒', // Placeholder for the icon
      text: '100% Trusted Tour Agency',
    },
    {
      icon: '🌍', // Placeholder for the icon
      text: '10+ Years of Travel Experience',
    },
    {
      icon: '⭐', // Placeholder for the icon
      text: '98% Our Travelers are Happy',
    },
  ];

  return (
    <div className="flex justify-center space-x-4 pt-20 pb-20">
      {infoData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg bg-white"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <p className="text-center text-lg font-semibold">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
