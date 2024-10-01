import React from 'react';

const Home = () => {
  const homes = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D',
      price: '300 ETH',
      location: 'New York, NY',
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1661963657305-f52dcaeef418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      price: '450 ETH',
      location: 'Los Angeles, CA',
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
      price: '250 ETH',
      location: 'Miami, FL',
    },
    {
        id: 4,
        image: 'https://plus.unsplash.com/premium_photo-1661876993697-24bc7408a0a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
        price: '350 ETH',
        location: 'Chicago, IL',
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ZlpicXNwa3lseXd8fGVufDB8fHx8fA%3D%3D',
        price: '400 ETH',
        location: 'Austin, TX',
      },
      {
        id: 6,
        image: 'https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
        price: '500 ETH',
        location: 'Seattle, WA',
      },
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1617036958702-0cb93be0552b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxSU1gtbUp4Ul9ZSXx8ZW58MHx8fHx8',
        price: '600 ETH',
        location: 'San Francisco, CA',
      },
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1534600913328-441f6abb4e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxSU1gtbUp4Ul9ZSXx8ZW58MHx8fHx8',
        price: '700 ETH',
        location: 'Denver, CO',
      },
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1512845296467-183ccf124347?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8UlNYLW1KeFJfWUl8fGVufDB8fHx8fA%3D%3D',
        price: '800 ETH',
        location: 'Boston, MA',
      },
      {
        id: 10,
        image: 'https://images.unsplash.com/photo-1543558526-35fdd56df604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8UlNYLW1KeFJfWUl8fGVufDB8fHx8fA%3D%3D',
        price: '900 ETH',
        location: 'Orlando, FL',
      },
      {
        id: 11,
        image: 'https://plus.unsplash.com/premium_photo-1693042450542-325361251ef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8UlNYLW1KeFJfWUl8fGVufDB8fHx8fA%3D%3D',
        price: '1,000 ETH',
        location: 'Phoenix, AZ',
      },
      {
        id: 12,
        image: 'https://images.unsplash.com/photo-1597394933932-7ff6f6d61610?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxSU1gtbUp4Ul9ZSXx8ZW58MHx8fHx8',
        price: '$1,100,000',
        location: 'Las Vegas, NV',
      },
  ];

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-wide drop-shadow-lg animate-pulse">
            Welcome to House of Ether
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200">
            A platform to elevate your experience with buying houses with blockchain.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center my-8">Available Homes</h2>
      <div className="homes-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {homes.map(home => (
          <div key={home.id} className="home-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-200">
            <img src={home.image} alt={`House ${home.id}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{home.price}</h3>
              <p className="text-gray-600">{home.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white mb-10">Blockchain Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl">
          {[
            { title: "Buy a House", tag: "#BlockchainRealEstate", color: "blue" },
            { title: "Secure Document Storage", tag: "#SafeDocuments", color: "purple" },
            { title: "DeFi", tag: "#DeFi", color: "pink" },
            { title: "Instant Transactions", tag: "#FastTransactions", color: "green" },
            { title: "Global Reach", tag: "#GlobalBlockchain", color: "indigo" },
            { title: "Immutable Contracts", tag: "#SmartContracts", color: "red" },
          ].map(({ title, tag, color }, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-lg transform transition hover:-translate-y-2 duration-300`}>
              <h2 className={`text-2xl font-semibold text-${color}-600 mb-4`}>{title}</h2>
              <p className="text-gray-600 mb-4">{tag}</p>
            </div>
          ))}
        </div>


      </div>


 



<div className="py-10 bg-gray-50">
  <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
  <div className="max-w-3xl mx-auto">
    <div className="mb-4">
      <h3 className="font-semibold">How does blockchain improve real estate transactions?</h3>
      <p className="text-gray-600">Blockchain technology ensures that all transactions are secure, transparent, and immutable.</p>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold">What types of properties are listed?</h3>
      <p className="text-gray-600">We offer a wide range of properties including residential homes, commercial spaces, and land.</p>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold">How can I contact support?</h3>
      <p className="text-gray-600">You can reach our support team through the contact form available on our website.</p>
    </div>
  </div>
</div>



<div className="py-10 bg-black">
  <h2 className="text-4xl font-bold  text-white text-center mb-6">About Us</h2>
  <p className="max-w-2xl mx-auto text-center text-white">
    At House of Ether, we strive to redefine the real estate experience by leveraging blockchain technology.
    Our mission is to provide transparency, security, and efficiency in every transaction, allowing buyers and sellers
    to connect seamlessly and trustfully.
  </p>



  
</div>


<footer className="py-4 bg-gray-800 text-white text-center">
  <p className="mb-2">Follow us on:</p>
  <div className="flex justify-center space-x-4 mb-2">
    <a href="#" className="hover:underline">Facebook</a>
    <a href="#" className="hover:underline">Twitter</a>
    <a href="#" className="hover:underline">Instagram</a>
  </div>
  <p className="text-sm">© 2024 House of Ether. All rights reserved.</p>
</footer>





    </>
  );
};

export default Home;
