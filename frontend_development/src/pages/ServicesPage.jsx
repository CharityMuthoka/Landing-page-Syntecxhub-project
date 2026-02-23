import { useParams, useLocation } from "react-router-dom";
import { services } from "../Data/services";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.trim().toLowerCase() || "";

  const [filteredServices, setFilteredServices] = useState([]);
  const { addToCart } = useCart();
const navigate = useNavigate();


  useEffect(() => {
    const filtered = services.filter((service) => {
      // Only filter by category if no search query
      const matchesCategory = category && !searchQuery ? service.category === category : true;
      const matchesSearch = searchQuery
        ? service.title.toLowerCase().includes(searchQuery)
        : true;

      return matchesCategory && matchesSearch;
    });

    setFilteredServices(filtered);
  }, [category, searchQuery]);

  return (
    <div className="mt-32 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredServices.length > 0 ? (
        filteredServices.map((service) => (
          <div
            key={service.id}
            onClick={() => {
              addToCart(service);   
              navigate("/cart");    
            }}
            className="cursor-pointer border rounded border-gray-300 bg-gray-200 hover:bg-green-400 transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="bg-gray-700 py-2 text-center hover:bg-green-400">
              <h3 className="text-white text-sm font-semibold">
                {service.title}
              </h3>
              <p className="text-white text-xs">
                KSh {service.price}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full text-lg font-semibold">
          No services found.
        </p>
      )}
    </div>
  );
  
   
  
}

