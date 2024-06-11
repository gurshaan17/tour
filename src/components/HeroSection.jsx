

const HeroSection = () => {
    return <div style={{backgroundImage: 'url("../assets/bg.png")', backgroundSize: 'cover', backgroundPosition: 'center'}} className="h-screen">
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-pink-200">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-yellow-500 mb-2 pb-20">Find your Next tour!</h1>
            <p className="text-2xl text-gray-700 mb-8 pb-8">Where would you like to go?</p>
            <div className="flex justify-center items-center space-x-2 bg-gray-200 pt-4 pb-4">
              <input
                type="text"
                placeholder="Where Would you like to go ?"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-yellow-300 text-xl p-3"
              />
              <select className=" text-xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-yellow-300">
                <option value="when">When</option>
                <option value="when">date 1</option>
                <option value="when">date 2</option>
                <option value="when">date 3</option>
                {/* Add more options as needed */}
              </select>
              <button className="p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none">
                SEARCH
              </button>
            </div>
          </div>
        </div>
    </div>
}

export default HeroSection;