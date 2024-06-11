import route from '../assets/route.png'
const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-black">
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <img src={route} className='h-16 w-16'  />
            <p>Wish You A Happy and Safe Journey With US..</p>
          </div>
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="font-semibold mb-2 text-xl">Quick Links</h3>
            <ul>
              <li><button className="text-black hover:text-gray-500">About</button></li>
              <li><button className="text-black hover:text-gray-500">Offers & Discounts</button></li>
              <li><button className="text-black hover:text-gray-500">Get Coupon</button></li>
              <li><button className="text-black hover:text-gray-500">Contact Us</button></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="font-semibold mb-2 text-xl">New Products</h3>
            <ul>
              <li>Woman Cloth</li>
              <li>Fashion Accessories</li>
              <li>Man Accessories</li>
              <li>Rubber made Toys</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="font-semibold mb-2 text-xl">Support</h3>
            <ul>
                <li><button className="text-black hover:text-gray-500">Frequently Asked Questions</button></li>
              <li><button className="text-black hover:text-gray-500">Terms & Conditions</button></li>
              <li><button className="text-black hover:text-gray-500">Privacy Policy</button></li>
              <li><button className="text-black hover:text-gray-500">Report a Payment Issue</button></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center  mt-8 text-md pt-5">
          <p className="text-gray-600">
            Copyright ©2024 All rights reserved | This template is made with ❤️ by 
            <span className="text-yellow-500"> webthehimalayas</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
