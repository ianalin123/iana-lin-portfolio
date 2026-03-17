import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from '@/lib/math';


export default function CS180Project1() {
  useEffect(() => {
    document.title = 'Project 1: Images of the Russian Empire -- Colorizing the Prokudin-Gorksii Photo Collection - Iana Lin';
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Back button */}
          <Link href="/cs180" className="inline-flex items-center text-neural-600 dark:text-neural-400 hover:text-neural-800 dark:hover:text-neural-200 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-mono">Back to CS 180</span>
          </Link>

          {/* Project header */}
          <div className="mb-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-8 bg-neural-600 rounded-lg flex items-center justify-center">
                {/*  -------------- Icon -------------- */}
                <span className="text-white font-mono text-lg">P1</span>
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
                  {/*  -------------- Title -------------- */}
                  <span className="text-neural-600 dark:text-neural-400">Project 1:</span> Images of the Russian Empire -- Colorizing the Prokudin-Gorksii Photo Collection
                </h1>
                {/*  -------------- Date -------------- */}
                <p className="text-gray-600 dark:text-gray-300 font-mono">September 12, 2025</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {/*  -------------- Tags -------------- */}
              <span className="px-3 py-1 bg-neural-100 dark:bg-neural-900 text-neural-700 dark:text-neural-300 rounded-full text-sm">
                Colorizing Images
              </span>
            </div>
          </div>

          {/* Project content */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="vintage-border glassmorphism rounded-2xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Overview</h2>
              {/* -------------- Image -------------- */}
              <img 
                src="/cs180/1/self_portrait_cropped.jpg" 
                alt="Self-portrait of Sergey Mikhaylovich Prokudin-Gorksii"
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-500  dark:text-gray-300 font-mono">
                Self-portrait of Sergey Mikhaylovich Prokudin-Gorksii
              </p>
              {/* ----------------------------------- */}

              <p className=" text-gray-500  dark:text-gray-300 mt-2 font-mono leading-relaxed ">
              <span className="text-gray-500 dark:text-gray-300 font-bold ">Sergey Mikhaylovich Prokudin-Gorksii </span>
              was a Russian chemist and photographer who 
              <span className="text-neural-600 dark:text-neural-400 font-bold"> pioneered colour photography in the early 20th-century</span> 
              . Prokudin-Gorskii created his negatives by exposing a glass plate of his unique camera three times in rapid succession, each with a different color filters: blue, green, and red.
              He then created positive glass slides of these negatives and projected them on top of each other.
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-2 font-mono">
              <span className="text-gray-500 dark:text-gray-300 font-bold">The goal of this assignment </span>
              is to
              <span className="text-synapse-600 dark:text-synapse-400 font-bold"> automatically produce a color image by processing the digitized Prokudin-Gorksii glass plate images.</span>
              <p className="text-gray-500 dark:text-gray-300 mt-2 font-mono leading-relaxed"></p>
              In order to do this, we will extract the three color channel images, align two of the channels to a reference channel (e.g. the blue channel), and then stack the together in the order of [r, g, b] to create a colored image.
              The question is...
              </p>
              <span className="text-lg text-gray-500 dark:text-gray-300 mt-8 font-mono font-bold">How do we align two images effectively and efficiently? </span>            
              {/* -------------- Image -------------- */}
                <img 
                  src="/cs180/1/10.png" 
                  alt="Image Alignment Schematic"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                  Image Alignment Schematic
                </p>
              {/* ----------------------------------- */}


            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Quantifying Image Alignment</h2>    
              <p className="text-gray-500  dark:text-gray-300 font-mono">
                Our goal can be formulated as an optimization problem where we seek to find the transformation parameters that 
                maximize a certain objective function that measures the alignment between two images.
                <BlockMath math={"Alignment = f({Im}_A, {Im}_B)"} /> 
              </p>

              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-6">Sum of Squared Differences / <InlineMath math="l_2" /> norm </h3>

              <p className="text-gray-500  dark:text-gray-300 mt-2 font-mono">
                <span className="text-gray-500 dark:text-gray-300 font-bold">A simple approach is to use:</span>
                <BlockMath math="f_{SSD}({Im}_A, {Im}_B) = -\left \Vert {Im}_A - {Im}_B \right \Vert_2 = -\sqrt{\sum\limits_{i} \sum\limits_{j} (A_{i,j}-B_{i,j})^2}"/>
                i.e. the negative <InlineMath math="l_2" /> norm of the difference between the two images at each pixel.
                (We add a negative sign to the sum of squares so that we can maximize it instead of minimizing.)
              </p>
              <p className="text-gray-500  dark:text-gray-300 mt-2 font-mono">
                However, this method measures the absolute difference between every pixel of the two images, making it
                <span className="text-neural-600 dark:text-neural-400 font-bold"> sensitive to outliers (random bright/dark spots) and lighting changes between the two images</span>. 
              </p>

              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">Normalized Cross-Correlation (NCC)</h3>

              <p className="text-gray-500  dark:text-gray-300 mt-2 font-mono">
                A more robust approach is to use normalized cross-correlation, which measures the similarity between two images by comparing their intensity patterns.
                <BlockMath math="f_{NCC}({Im}_A, {Im}_B) = \frac{1}{HW}\frac{\sum\limits_{i=1}^{H}\sum\limits_{j=1}^{W}\left((A_{i,j}-\bar{A})(B_{i,j}-\bar{B})\right)}{\sigma_A \sigma_B}"/>
                where <InlineMath math="\bar{A}" /> and <InlineMath math="\sigma_A" /> is the mean intensity of all pixels in A and their standard deviation, respectively. <InlineMath math="H, W" /> are the height, width of the images.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono">
                This method is less sensitive to outliers and lighting changes, as it focuses on the relative pixel brightness differences between images rather than absolute values. 
              </p>

              {/* -------------- Image Row -------------- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-6 max-w-2xl mx-auto">
                <div>
                  <img 
                  src="/cs180/1/tobolsk_ssd.jpg" 
                  alt="Image aligned with SSD Metric" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Image aligned with SSD Metric</p>
                </div>
                <div>
                  <img 
                  src="/cs180/1/tobolsk_aligned.jpg"
                  alt="Image aligned with NCC Metric" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Image aligned with NCC Metric</p>
                </div>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold">Single-Scale Image Alignment </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-10 font-mono">
              The naive alignment approach is to 
              <span className="text-synapse-600 dark:text-synapse-400 font-bold "> search every possible shift between two images</span>
              
              . This method will give the alignment that maximizes the selected metric, based on the raw pixel brightness values. 
              </p>
              <p className="text-gray-500  dark:text-gray-300 mt-2 font-mono"> 
              Given that the three images Prokudin-Gorksii took at each scene were generally aligned,  
              <span className="text-neural-600 dark:text-neural-400 font-bold "> it is reasonable to search for best shift between a selected range [-displacement, displacement]</span>
              . For each image's green and red channels, I tried every shift in both x and y directions within a [-15, 15] pixel range, choosing the shift that maximized the NCC metric with the blue channel.
              </p>
              
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">Challenges with Border Artifacts</h3>
              <p className="text-gray-500  dark:text-gray-300 mt-2 font-mono">
                However, the NCC (as well as SSD) metric treats each pixel equally and every channel equally, which is not ideal. Due to the filming conditions and the filters obscuring light differently across channels, 
                <span className="text-neural-600 dark:text-neural-400 font-bold"> border regions often contain artifacts and noise </span> 
                that can mislead alignment algorithms. Additionally, the digitization process may introduce edge artifacts that don't represent the actual image content.
              </p>
              <p className="text-gray-500  dark:text-gray-300 mt-2 font-mono">
                Since alignment metrics weight all pixels equally, these border pixels can affect the optimization, 
                leading to suboptimal alignments. 
                <span className="text-synapse-600 dark:text-synapse-400 font-bold"> Cropping the borders focuses the alignment on the central, high-confidence image content</span>, 
                significantly improving results.
              </p>
              {/* -------------- Image Row -------------- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-6 max-w-2xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/1/monastery_no_crop.jpg" 
                  alt="Image aligned without cropping" className="max-w-[92%] mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Image aligned without cropping</p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/monastery_aligned.jpg"
                  alt="Image aligned after cropping 11% border pixels" className="max-w-[100%] mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Image aligned after cropping 11% border pixels</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300 mb-2 mt-8">Aligned Low-Resolution Images:</h3>
              <p className="text-sm text-gray-500  dark:text-gray-300"> 
              Note: offsets are in the form <InlineMath math="(\Delta y, \Delta x)"/>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6 max-w-4xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/1/cathedral_aligned.jpg" 
                  alt="" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Cathedral</span><br/>
                  G: (5, 2) <br/>
                  R: (12, 3)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/monastery_aligned.jpg" 
                  alt="" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Monastery</span><br/>
                  G: (-3, 2) <br/>
                  R: (3, 2)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/tobolsk_aligned.jpg" 
                  alt="" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Tobolsk</span><br/>
                  G: (3, 3) <br/>
                  R: (6, 3)
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-500 dark:text-gray-300 mt-2 font-mono font-bold">
              However, this brute-force search is computationally expensive, especially for high-resolution images.
              </p>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Multi-Scale Image Alignment</h2>

              <p className="text-gray-500  dark:text-gray-300 mt-4 font-mono">
              For high-resolution images, searching all possible shifts becomes computationally prohibitive because the optimal pixel displacement is usually be much larger. (Pixels become "smaller" or cover less visual space.)
              <span className="text-synapse-600 dark:text-synapse-400 font-bold "> A multi-scale approach using image pyramids </span> 
              significantly reduces computational requirements
              </p>

              <p className="text-gray-500  dark:text-gray-300 mt-4 font-mono">
              The algorithm works by
              <ul className="space-y-2 text-neural-700 dark:text-neural-600">
                <li> recursively downsampling the both the reference and current image by a factor of 2 (I chose to downsample 2-6 times for a total of 3-7 layers in the image pyramid)
                  <img 
                  src="/cs180/1/11.jpg" 
                  alt="Self-portrait of Sergey Mikhaylovich Prokudin-Gorksii"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                  />
                </li>
                <li> aligning the images at the coarsest scale (i.e. aligning the smallest images)
                </li>
                <li> updating a total_offset variable and refining the alignment at progressively finer scales
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                    <p className="font-mono text-sm text-gray-500  dark:text-gray-300">
                    offset = find_alignment(reference_level, current_level_aligned, search_range)
                    <br/><br/>
                    total_offset = (total_offset[0] + offset[0], total_offset[1] + offset[1])<br/>
                    # we need to double the offset at every level except for the last (finest level) because every image's resolution is doubled <br/>
                    total_offset = (total_offset[0] * 2, total_offset[1] * 2)  <br/><br/>
                    # we can shrink search range at every level <br/>
                    search_range = max(2, search_range // 2)
                    </p>
                  </div> 
                </li>
              </ul>
              This reduces the search space from potentially hundreds or thousands of pixels at each level to a manageable range.
              </p>
              
              

              <h3 className="text-lg font-semibold text-neural-500 mb-2 mt-8">Performance Improvement:</h3>
              <p className="text-gray-500  dark:text-gray-300 mt-4 font-mono">
              ~1.5 seconds per image vs ~5+ seconds with naive search, while achieving identical alignment results on low-resolution images.
              </p>

              <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300 mb-2 mt-8">Aligned High-Resolution Images:</h3>
              <p className="text-sm text-gray-500  dark:text-gray-300"> 
              Note: offsets are in the form <InlineMath math="(\Delta y, \Delta x)"/>
              </p>
              {/* -------------- Image Grid -------------- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 max-w-full mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/1/church_aligned.jpg" 
                  alt="Church" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Church</span><br/>
                  G: (25, 4)<br/>
                  R: (58, -4)
                  </p>
                </div>
                
                <div className="flex-1">
                  <img 
                  src="/cs180/1/harvesters_aligned.jpg" 
                  alt="Harvesters" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Harvesters</span><br/>
                  G: (59, 16)<br/>
                  R: (123, 13)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/emir_aligned.jpg" 
                  alt="Emir" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Emir</span><br/>
                  G: (49, 24)<br/>
                  R: (43, -989)<span className="text-sm text-synapse-600 dark:text-synapse-400 font-bold ">*</span>
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/three_generations_aligned.jpg" 
                  alt="Three Generations" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Three Generations</span><br/>
                  G: (53, 14)<br/>
                  R: (111, 11)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/lady_aligned.jpg" 
                  alt="Lady" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Lady</span><br/>
                  G: (52, 9)<br/>
                  R: (112, 12)
                  </p>
                </div>

                <div className="flex-1">
                  <img 
                  src="/cs180/1/train_aligned.jpg" 
                  alt="Train" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Train</span><br/>
                  G: (42, 5) <br/>
                  R: (87, 32)
                  </p>
                </div>

                <div className="flex-1">
                  <img 
                  src="/cs180/1/icon_aligned.jpg" 
                  alt="Icon" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Icon</span><br/>
                  G: (41, 17) <br/>
                  R: (89, 23)
                  </p>
                </div>

                <div className="flex-1">
                  <img 
                  src="/cs180/1/onion_church_aligned.jpg" 
                  alt="Onion Church" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Onion Church</span><br/>
                  G: (51, 27)<br/>
                  R: (108, 36)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/melons_aligned.jpg" 
                  alt="Melons" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Melons</span><br/>
                  G: (81, 10)<br/>
                  R: (178, 13)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/sculpture_aligned.jpg" 
                  alt="Sculpture" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Sculpture</span><br/>
                  G: (33, -11)<br/>
                  R: (140, -27)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/self_portrait_aligned.jpg" 
                  alt="Self Portrait" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Self Portrait</span><br/>
                  G: (78, 29)<br/>
                  R: (176, 37)
                  </p>
                </div>

                <div className="flex-1">
                  <img 
                  src="/cs180/1/vokhnovo_aligned.jpg" 
                  alt="Vokhnovo" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Vokhnovo</span><br/>
                  <span className="text-xs text-synapse-600 dark:text-synapse-400">Self-chosen</span><br/>
                  G: (-8, 7)<br/>
                  R: (3, -4)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/three_girls_aligned.jpg" 
                  alt="Three Girls" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Three Girls</span><br/>
                  <span className="text-xs text-synapse-600 dark:text-synapse-400">Self-chosen</span><br/>
                  G: (-16, 10)<br/>
                  R: (11, 17)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/1/kivach_waterfall_aligned.jpg" 
                  alt="Kivach Waterfall" className="w-full mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Kivach Waterfall</span><br/>
                  <span className="text-xs text-synapse-600 dark:text-synapse-400">Self-chosen</span><br/>
                  G: (17, 17)<br/>
                  R: (89, 30)
                  </p>
                </div>
              </div>
              <p className="text-sm text-center text-gray-500 dark:text-gray-300 mt-4">
                * Emir image had alignment difficulties due to different brightness patterns across color channels
                </p>
            </div>
            
            <div className="vintage-border glassmorphism rounded-xl p-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Implementation Details & Challenges</h2>
              
              <div className="space-y-6">

                <div>
                  <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2">Normalization Strategy</h3>
                  <p className="text-gray-500  dark:text-gray-300 font-mono">
                  I initially used simple division by 255 for normalization, but this led to graying of the output images (likely due to the initial pixel value ranges not spanning 0-255 but rather something like 50-100). 
                  <br/>
                  <br/>
                  <span className="text-gray-500 dark:text-gray-300 font-bold"> Min-max normalization </span> 
                  was effective for handling the varying brightness ranges across different color channels and images, and resolved this graying issue.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2">The Emir Challenge</h3>
                  <p className="text-gray-500  dark:text-gray-300 font-mono">
                  The Emir image was the image that aligned the worst compared to the others due to significantly different brightness patterns between color channels.
                  The bright clothing in some channels appears dark in others, causing the NCC metric to fail. 
                  <br/>
                  <br/>
                  <span className="text-neural-600 font-bold"> Edge-based alignment methods </span> 
                  (e.g. Sobel-filter or some other image-gradient process) that align based on the edges of the image would likely improve the alignment results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}