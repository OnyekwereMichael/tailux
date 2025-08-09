import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaGoogle, FaPinterest, FaMicrosoft, FaProductHunt, FaBehance } from "react-icons/fa";

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
  
];


export default function DataTable() {
  return (
    <div className="bg-[#0e0f11] border border-gray-800 rounded-xl p-6 shadow-lg text-white">
      <h2 className="text-xl font-bold mb-5 border-b border-gray-700 pb-3">
        📦 Products Overview
      </h2>

      {/* Scrollable container for mobile */}
      <div className="overflow-x-auto">
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
            {products.map((p, idx) => (
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
    </div>
  );
}

