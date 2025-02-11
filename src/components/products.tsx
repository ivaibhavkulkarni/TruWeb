export default function Products() {
    const products = [
      {
        id: 1,
        name: "Product One",
        description: "Description for product one",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Product Two",
        description: "Description for product two",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: "Product Three",
        description: "Description for product three",
        image: "/placeholder.svg?height=200&width=200",
      },
    ]
  
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  