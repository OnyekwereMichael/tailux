import { FaArrowUp, FaArrowDown, FaAmazon, FaSpotify, FaXbox, FaTwitch, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGoogle, FaPinterest, FaMicrosoft, FaProductHunt, FaBehance } from "react-icons/fa";
import { useState } from "react";



const products = [
  {
    name: "Surface Pro 9",
    id: "1718635406",
    category: "Tablets",
    brand: <FaMicrosoft className="text-yellow-500 text-xl" />,
    price: 107.45,
    stockStatus: "Available",
    stock: "8.04k",
    views: "1.23k",
    change: "+7.65%",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHnbe9bCyXi37Hn1bihi-q07IYXKKTHNeKQ&s"
  },
  {
    name: "Google Pixel Watch",
    id: "6595752310",
    category: "Wearables",
    brand: <FaGoogle className="text-red-500 text-xl" />,
    price: 599.75,
    stockStatus: "Available",
    stock: "2.58k",
    views: "65.39k",
    change: "+2.82%",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Pinterest Mug",
    id: "5870577187",
    category: "Merch",
    brand: <FaPinterest className="text-red-500 text-xl" />,
    price: 18.99,
    stockStatus: "Limited Supply",
    stock: "22",
    views: "23.33k",
    change: "-1.07%",
    img: "https://images.unsplash.com/photo-1570784331625-907b0c979f63?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Product Hunt Hoodie",
    id: "7543583555",
    category: "Apparel",
    brand: <FaProductHunt className="text-blue-500 text-xl" />,
    price: 45.00,
    stockStatus: "Available",
    stock: "3.56k",
    views: "68.12k",
    change: "-0.25%",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Smart Bulb",
    id: "3711580971",
    category: "Smart Home",
    brand: <FaProductHunt className="text-blue-500 text-xl" />,
    price: 29.99,
    stockStatus: "Not available",
    stock: "0",
    views: "89.15k",
    change: "+5.03%",
    img: "https://plus.unsplash.com/premium_photo-1676750395664-3ac0783ae2c2?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Portable Charger",
    id: "8940068402",
    category: "Electronics",
    brand: <FaBehance className="text-blue-400 text-xl" />,
    price: 39.99,
    stockStatus: "Available",
    stock: "877",
    views: "32.83k",
    change: "+9.98%",
    img: "https://images.unsplash.com/photo-1520287636485-66d0e25add79?w=500&auto=format&fit=crop&q=60"
  },
  // New Items
  {
    name: "Sony WH-1000XM5",
    id: "9274628391",
    category: "Headphones",
    brand: <FaBehance className="text-gray-300 text-xl" />,
    price: 399.99,
    stockStatus: "Available",
    stock: "1.42k",
    views: "45.12k",
    change: "+3.45%",
    img: "https://images.unsplash.com/photo-1609075838859-98ccdee213c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29ueSUyMHR2fGVufDB8fDB8fHww"
  },
  {
    name: "Apple MacBook Air M2",
    id: "5826391048",
    category: "Laptops",
    brand: <FaGoogle className="text-gray-300 text-xl" />,
    price: 1249.00,
    stockStatus: "Limited Supply",
    stock: "320",
    views: "102.4k",
    change: "+6.78%",
    img: "https://images.unsplash.com/file-1705123271268-c3eaf6a79b21image?w=416&dpr=2&auto=format&fit=crop&q=60"
  },


  // sec 

  {
    name: "Portable Charger",
    id: "8940068402",
    category: "Electronics",
    brand: <FaBehance className="text-blue-400 text-xl" />,
    price: 39.99,
    stockStatus: "Available",
    stock: "877",
    views: "32.83k",
    change: "+9.98%",
    img: "https://images.unsplash.com/photo-1520287636485-66d0e25add79?w=500&auto=format&fit=crop&q=60"
  },
  // New Items
  {
    name: "Sony WH-1000XM5",
    id: "9274628391",
    category: "Headphones",
    brand: <FaBehance className="text-gray-300 text-xl" />,
    price: 399.99,
    stockStatus: "Available",
    stock: "1.42k",
    views: "45.12k",
    change: "+3.45%",
    img: "https://images.unsplash.com/photo-1609075838859-98ccdee213c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29ueSUyMHR2fGVufDB8fDB8fHww"
  },
  {
    name: "Apple MacBook Air M2",
    id: "5826391048",
    category: "Laptops",
    brand: <FaGoogle className="text-gray-300 text-xl" />,
    price: 1249.00,
    stockStatus: "Limited Supply",
    stock: "320",
    views: "102.4k",
    change: "+6.78%",
    img: "https://images.unsplash.com/file-1705123271268-c3eaf6a79b21image?w=416&dpr=2&auto=format&fit=crop&q=60"
  },
   {
    name: "Amazon Echo Studio",
    id: "9517532480",
    category: "Smart Speakers",
    brand: <FaAmazon className="text-orange-500 text-xl" />,
    price: 199.99,
    stockStatus: "Available",
    stock: "12.9k",
    views: "54.7k",
    change: "+3.14%",
    img: "https://plus.unsplash.com/premium_photo-1669075651553-e0e55739bd18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hc29ufGVufDB8fDB8fHww"
  },
  {
    name: "Spotify Premium Gift Card",
    id: "7412589630",
    category: "Gift Cards",
    brand: <FaSpotify className="text-green-500 text-xl" />,
    price: 59.99,
    stockStatus: "Limited Supply",
    stock: "220",
    views: "15.3k",
    change: "+0.85%",
    img: "https://images.unsplash.com/photo-1560443936-251401213816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvdGlmeSUyMGdpZnQlMjBjYXJkfGVufDB8fDB8fHww"
  },
  {
    name: "Xbox Series X Controller",
    id: "3579514680",
    category: "Gaming",
    brand: <FaXbox className="text-green-600 text-xl" />,
    price: 69.99,
    stockStatus: "Available",
    stock: "8.44k",
    views: "39.2k",
    change: "-1.15%",
    img: "https://images.unsplash.com/photo-1659700785595-cf5907e6146f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eCUyMGJveHxlbnwwfHwwfHx8MA%3D%3D"
  },
 
  {
    name: "Twitch Streaming Kit",
    id: "3692581470",
    category: "Streaming",
    brand: <FaTwitch className="text-purple-500 text-xl" />,
    price: 349.99,
    stockStatus: "Available",
    stock: "2.41k",
    views: "18.7k",
    change: "+5.40%",
    img: "https://images.unsplash.com/photo-1729860648897-270eddd9026b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHdpdGNofGVufDB8fDB8fHww"
  },
  {
    name: "LinkedIn Premium Subscription",
    id: "1593574862",
    category: "Services",
    brand: <FaLinkedin className="text-blue-500 text-xl" />,
    price: 39.99,
    stockStatus: "Unlimited",
    stock: "∞",
    views: "10.4k",
    change: "+2.17%",
    img: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Twitter Blue Subscription",
    id: "7539514862",
    category: "Social Media",
    brand: <FaTwitter className="text-sky-500 text-xl" />,
    price: 11.99,
    stockStatus: "Unlimited",
    stock: "∞",
    views: "45.2k",
    change: "-0.78%",
    img: "https://images.unsplash.com/photo-1690138871287-02b2fc3b87c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eHxlbnwwfHwwfHx8MA%3D%3D"
  }
];



// Your products array here...

export default function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-[#0e0f11] border border-gray-800 rounded-xl p-6 shadow-lg text-white">
      <h2 className="text-xl font-bold mb-5 border-b border-gray-700 pb-3">
        📦 Products Overview
      </h2>

      {/* Scrollable container for mobile */}
      <div className="overflow-x-auto ">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="text-left py-3">Product</th>
              <th className="text-left py-3">Category</th>
              <th className="text-left py-3">Brand</th>
              <th className="text-left py-3">Price</th>
              <th className="text-left py-3">Stock</th>
              <th className="text-left py-3">Views</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((p, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-800 hover:bg-gray-800/40 transition duration-200 ease-in-out"
              >
                <td className="py-4 flex items-center gap-3">
                  <input type="checkbox" className="accent-blue-500" />
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-10 h-10 rounded-lg object-cover border border-gray-700"
                  />
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-gray-500">#{p.id}</div>
                  </div>
                </td>
                <td className="text-gray-300">{p.category}</td>
                <td>{p.brand}</td>
                <td className="font-semibold">${p.price.toFixed(2)}</td>
                <td>
                  <span
                    className={`${
                      p.stockStatus === "Available"
                        ? "text-green-500"
                        : p.stockStatus === "Limited Supply"
                        ? "text-yellow-500"
                        : "text-red-500"
                    } font-medium`}
                  >
                    {p.stockStatus}
                  </span>
                  <div className="text-xs text-gray-500">{p.stock} stock</div>
                </td>
                <td className="flex items-center gap-2">
                  <div>{p.views}</div>
                  <div
                    className={`flex items-center text-xs ${
                      p.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {p.change.startsWith("+") ? (
                      <FaArrowUp className="mr-1" />
                    ) : (
                      <FaArrowDown className="mr-1" />
                    )}
                    {p.change.replace("+", "").replace("-", "")}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4  text-[14px] font-semibold py-2 rounded-lg border border-gray-700 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
        >
          <p className="text-md font-semibold">Previous</p>
        </button>
        <span className="text-gray-400 text-[14px]">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-[14px] font-semibold rounded-lg border border-gray-700 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
        >
          <p className="text-[14px] font-semibold">Next</p>
        </button>
      </div>
    </div>
  );
}

