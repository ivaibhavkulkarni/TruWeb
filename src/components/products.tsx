'use client';
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "iPhone",
      description: "Description for product one",
      image: "/ip.jpeg",
    },
    {
      id: 2,
      name: "iPad",
      description: "Description for product two",
      image: "/ipad.jpeg",
    },
    {
      id: 3,
      name: "MacBook",
      description: "Description for product three",
      image: "/mac.jpg",
    },
  ];

  return (
    <section id="products" className="py-20 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the full range of our products designed to transform your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-[#ef9520] hover:bg-[#d88418] text-white font-medium py-3 px-8 rounded-md transition-colors">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
