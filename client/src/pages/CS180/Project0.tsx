import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function CS180Project0() {
  useEffect(() => {
    document.title = 'Project 0: Becoming Friends with Your Camera - Iana Lin';
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back button */}
          <Link href="/cs180" className="inline-flex items-center text-synapse-600 dark:text-synapse-400 hover:text-synapse-800 dark:hover:text-synapse-200 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-mono">Back to CS 180</span>
          </Link>

          {/* Project header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-synapse-600 rounded-lg flex items-center justify-center">
                {/*  -------------- Icon -------------- */}
                <span className="text-white font-mono text-lg">P0</span>
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
                  {/*  -------------- Title -------------- */}
                  <span className="text-synapse-600 dark:text-synapse-400">Project 0:</span> Becoming Friends with Your Camera
                </h1>
                {/*  -------------- Date -------------- */}
                <p className="text-gray-600 dark:text-gray-400 font-mono">September 2, 2025</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {/*  -------------- Tags -------------- */}
              <span className="px-3 py-1 bg-synapse-100 dark:bg-synapse-900 text-synapse-700 dark:text-synapse-300 rounded-full text-sm">
                Photography
              </span>
            </div>
          </div>

          {/* Project content */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Part 1 -- Selfie: The Wrong Way vs. The Right Way</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              

              {/* -------------- Image -------------- */}
              <div className="mb-6">
                <img 
                  src="/cs180/0/00.png" 
                  alt="Selfie taken 1 ft. away with 0x zoom -vs- 6 ft. away with 2.5x zoom"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Selfie taken 1 ft. away with 0x zoom -vs- 6 ft. away with 2.5x zoom
                </p>
              </div>


              </p>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Part 2 -- Architectural Perspective Compression </h2>
              {/*}
              <ul className="space-y-2 text-neural-700 dark:text-neural-600">
                <li> Understand camera optics and image formation principles</li>
                <li> Learn digital image representation and color spaces</li>
                <li> Practice basic image manipulation and filtering techniques</li>
                <li> Explore the relationship between analog and digital photography</li>
              </ul>
              */}

              {/* -------------- Image -------------- */}
              <div className="mb-6">
                <img 
                  src="/cs180/0/01.png" 
                  alt="Red Prius taken 30 feet away with 5x zoom -vs- 4 ft. away with 0x zoom"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300  mt-2 font-mono">
                  Red Prius taken 30 feet away with 5x zoom -vs- 4 ft. away with 0x zoom
                </p>
              </div>
            </div>
            
            <div className="vintage-border glassmorphism rounded-xl p-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Part 3  -- The Dolly Zoom, i.e. "Vertigo Shot"</h2>
              <div className="mb-6">
                <img 
                  src="/cs180/0/02.webp" 
                  alt="Dolly Shot:"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300  mt-2 font-mono">
                  Dolly Shot: 
                </p>
              </div>
              {/*
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Coming soon... This section will contain the technical implementation details, 
                code samples, and results from the computational photography experiments.
              </p>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                  Status: In Development
                </p>
              </div> 
              */}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}