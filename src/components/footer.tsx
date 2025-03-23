"use client"

export default function Footer() {
    return(
        <footer className="bg-gray-900 text-white py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="text-[#ef9520] mr-2">Trubot Electronics</span>
              </h2>
              <p className="mt-2 text-gray-400">Intelligent automation for the modern business</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left text-gray-400">
            © {new Date().getFullYear()} Trubot. All rights reserved.
          </div>
        </div>
        </footer>
    )
}