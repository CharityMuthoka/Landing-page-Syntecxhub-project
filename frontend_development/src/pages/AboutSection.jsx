import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/images/COMPANY RETURNS.png"; 


export default function AboutSection() {
  const navigate =useNavigate();
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center pt-20">
          
          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={aboutImage}
              alt="About our services"
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Us
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We provide reliable and professional government and online
              services including KRA services, eCitizen applications,
              business registration, and more.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our goal is to make digital processes simple, fast, and
              stress-free for our clients by offering expert guidance and
              efficient service delivery.
            </p>

            <button onClick={() => navigate('/about-us')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
