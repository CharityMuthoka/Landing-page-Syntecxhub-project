import React from "react";
import {
  services
} from "../../Data/services"; 

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 py-16">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="relative">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          
          {/* Duplicate for seamless loop */}
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-700">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
