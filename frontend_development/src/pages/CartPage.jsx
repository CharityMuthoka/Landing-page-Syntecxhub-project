import { useCart } from "../context/CartContext";
import { services } from "../Data/services";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const phoneNumber = "254720123456";

const generateWhatsAppMessage = () => {
  let message = "Hello, I would like to order the following services:%0A%0A";

  cartItems.forEach((item) => {
    message += `${item.title} (Qty: ${item.quantity}) - KSh ${
      item.price * item.quantity
    }%0A`;
  });

  message += `%0ATotal: KSh ${total}`;

  return message;
};

  return (
    <div className="mt-32 p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>KSh {item.price}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-bold">
            Total: KSh {total}
          </div>
          

   

<a
  href={`https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
>
  <span className="text-xl">📱</span>
  Order via WhatsApp
</a>

          <h3 className="text-xl font-bold mt-12 mb-4">
  Related Services
</h3>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {services.slice(0, 3).map((service) => (
    <div
      key={service.id}
      className="border p-4 rounded cursor-pointer hover:bg-gray-100"
    >
      <img
        src={service.image}
        className="w-full h-32 object-cover"
      />
      <h4 className="mt-2 font-semibold">{service.title}</h4>
      <p>KSh {service.price}</p>
    </div>
  ))}
</div>

        </>
      )}
    </div>
  );
}
