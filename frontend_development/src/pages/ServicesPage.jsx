import { useParams, useLocation } from "react-router-dom";
import { services } from "../Data/services";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.trim().toLowerCase() || "";

  const [filteredServices, setFilteredServices] = useState([]);

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
        filteredServices.map((service, index) => (
          <div
            key={index}
            className="border rounded border-gray-300 bg-gray-200 hover:bg-green-400 transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t"
            />
            <h3 className="text-white bg-gray-700 py-2 text-center text-sm font-semibold hover:bg-green-400">
              {service.title}
            </h3>
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

