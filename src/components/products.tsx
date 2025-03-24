'use client';
import { motion, Variants } from "framer-motion";

// Define product interface
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function Products() {
  const products: Product[] = [
    {
      id: 1,
      name: "iPhone",
      description: "Latest smartphone with cutting-edge technology",
      image: "/ip.jpeg",
    },
    {
      id: 2,
      name: "iPad",
      description: "Powerful tablet for work and entertainment",
      image: "/ipad.jpeg",
    },
    {
      id: 3,
      name: "MacBook",
      description: "Premium laptop for professionals",
      image: "/mac.jpg",
    },
  ];

  // Animation variants for cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.03,
      transition: { 
        duration: 0.3 
      }
    }
  };

  return (
    <section id="products" className="py-20 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative range of products crafted to elevate your digital experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name} 
                  className="w-full h-56 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-[#ef9520] to-[#d88418] hover:from-[#d88418] hover:to-[#ef9520] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Explore All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}