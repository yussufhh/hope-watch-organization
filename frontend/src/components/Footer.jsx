

import React from 'react'

function Footer() {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-[#1D4ED8] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Hopewatch Revival Organization</h3>
              <p className="text-blue-100 max-w-md">
                Empowering the next generation through education, mentorship, and opportunity. 
                Transforming communities one student at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Connect</h4>
              <div className="space-y-2 text-blue-100">
                <div>info@hopewatch.org</div>
                <div>+254 700 000 000</div>
                <div>Habaswein, Kenya</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                  >
                    {social[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Hopewatch Revival Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
