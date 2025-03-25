"use client"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold flex items-center">
                            <span className="font-arial text-[#ef9520] mr-2">Trubot Electronics</span>
                        </h2>
                        <p className="mt-2 text-gray-400">Intelligent automation for the modern business</p>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex space-x-6 mt-6 md:mt-0">
                        {/* YouTube Icon */}
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ef9520] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.5 6.2c-.3-1.1-1.1-2-2.2-2.3C19.1 3.5 12 3.5 12 3.5s-7.1 0-9.3.4c-1.1.3-1.9 1.2-2.2 2.3C.5 8.4.5 12 .5 12s0 3.6.4 5.8c.3 1.1 1.1 2 2.2 2.3 2.2.4 9.3.4 9.3.4s7.1 0 9.3-.4c1.1-.3 1.9-1.2 2.2-2.3.4-2.2.4-5.8.4-5.8s0-3.6-.4-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"/>
                            </svg>
                        </a>
                        {/* Instagram Icon */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ef9520] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0 2.2c-3.1 0-3.5 0-4.7.1-.9 0-1.5.2-1.8.4-.5.2-.9.5-1.2.8-.3.3-.6.7-.8 1.2-.2.3-.4.9-.4 1.8-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.5.4 1.8.2.5.5.9.8 1.2.3.3.7.6 1.2.8.3.2.9.4 1.8.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.5-.2 1.8-.4.5-.2.9-.5 1.2-.8.3-.3.6-.7.8-1.2.2-.3.4-.9.4-1.8.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.5-.4-1.8-.2-.5-.5-.9-.8-1.2-.3-.3-.7-.6-1.2-.8-.3-.2-.9-.4-1.8-.4-1.2-.1-1.6-.1-4.7-.1zm0 1.8c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 9.8c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8zm4.9-10.3c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/>
                            </svg>
                        </a>
                        {/* WhatsApp Icon */}
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ef9520] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5-1.4c1.5.9 3.2 1.4 5 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2zm3.4 15.1c-.2.6-.7.9-1.4 1-.5.1-1.1.1-1.7-.1-.5-.2-1.1-.5-1.7-.9-1.4-.9-2.5-2-3.1-3.5-.2-.5-.3-1-.3-1.5 0-.5.2-.9.6-1.2.2-.2.4-.2.6-.2h.4c.2 0 .4 0 .5.2.2.2.6.7.8 1 .1.2.2.3.1.5-.1.2-.2.4-.3.5-.2.2-.3.3-.2.6.2.5.6 1 1.1 1.5.6.5 1.1.8 1.7.9.2 0 .4 0 .6-.2.2-.2.5-.6.7-.8.2-.2.4-.2.6-.1.2.1.7.4.9.6.2.2.3.4.2.6z"/>
                            </svg>
                        </a>
                        {/* Facebook Icon */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ef9520] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left text-gray-400">
                    © {new Date().getFullYear()} Trubot. All rights reserved.
                </div>
            </div>
        </footer>
    )
}