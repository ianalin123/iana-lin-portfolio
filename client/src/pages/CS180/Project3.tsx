import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { CodeBlock, InlineCode } from '@/components/CodeBlock';
import { InlineMath, BlockMath } from '@/lib/math';
import { ImageComparisonSlider } from '@/components/ImageComparisonSlider';

export default function CS180Project3() {
  useEffect(() => {
    document.title = 'Project 3: (Auto)Stitching Photo Mosaics - Iana Lin';
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-2">
          {/* Back button */}
          <Link href="/cs180" className="inline-flex items-center text-neural-600 dark:text-neural-400 hover:text-neural-600 dark:hover:text-neural-100 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-mono">Back to CS 180</span>
          </Link>

          {/* Project header */}
          <div className="mb-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-neural-600 rounded-lg flex items-center justify-center">
                {/*  -------------- Icon -------------- */}
                <span className="text-white font-mono text-lg">P3</span>
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
                  {/*  -------------- Title -------------- */}
                  <span className="text-neural-600 dark:text-neural-400">Project 3:</span> (Auto)Stitching Photo Mosaics
                </h1>
                {/*  -------------- Date -------------- */}
                <p className="text-gray-600 dark:text-gray-300 font-mono">October 17, 2025</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {/*  -------------- Tags -------------- */}
              <span className="px-3 py-1 bg-neural-100 dark:bg-neural-900 text-neural-700 dark:text-neural-300 rounded-full text-sm">
              Image Warping
              </span>
              <span className="px-3 py-1 bg-neural-100 dark:bg-neural-900 text-neural-700 dark:text-neural-300 rounded-full text-sm">
              Image Mosaicing
              </span>
            </div>
          </div>

          {/* Project content */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="vintage-border glassmorphism rounded-2xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Overview</h2>
               <p className="text-gray-500 dark:text-gray-300 font-mono leading-relaxed mb-4">
                  The goal of this assignment is to play with image warping and mosaicing. 
                  Take two or more photographs and create an image mosaic by registering, projective warping, resampling, and composing them.
                  Along the way, learn how to compute homographies, and how to use them to warp images.
                </p>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Image Warping and Mosaicing</h2>
              <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2 mt-8">A.1: Shoot the Pictures</h3>
                  <p className="text-gray-500 dark:text-gray-300 font-mono leading-relaxed mb-4">

                  Shoot two or more photographs so that the transforms between them are projective (a.k.a. perspective).
                  The most common way is to fix the center of projection (COP) and rotate your camera while capturing photos.
                  </p>

                  {/* -------------- Image Row -------------- */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/IMG_7644.jpg" 
                      alt="Brooklyn Bridge at Sunset..." className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Brooklyn Bridge at Sunset...</p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/IMG_7646.jpg"
                      alt="with a slightly different angle" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">with a slightly different angle</p>
                    </div>
                  </div>

                <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2 mt-8">A.2: Recover Homographies</h3>
                  <p className="text-gray-500 dark:text-gray-300 font-mono leading-relaxed mb-4">
                    We define a single correspondence <InlineMath math="(x, y, 1) \mapsto \lambda (u, v, 1)"/> (homogeneous coordinates)
                    by the projective transformation matrix
                    <BlockMath math="
                      H = \begin{bmatrix}
                            h_{1} & h_{2} & h_{3}\\
                            h_{4} & h_{5} & h_{6}\\
                            h_{7} & h_{8} & h_{9}
                          \end{bmatrix}
                    "/>
                    with
                    <BlockMath math="
                      \lambda
                      \begin{bmatrix} u\\ v\\ 1\end{bmatrix}
                      =
                      H
                      \begin{bmatrix} x\\ y\\ 1\end{bmatrix}
                    "/>

                    Write the scalar equations:

                    <BlockMath math=" \begin{aligned} \lambda u &= h_{1}x + h_{2}y + h_{3},\\\\ \lambda v &= h_{4}x + h_{5}y + h_{6},\\\\ \lambda &= h_{7}x + h_{8}y + h_{9}. \end{aligned} "/>

                    Eliminate <InlineMath math="\lambda"/> using the third equation:

                    <BlockMath math=" \begin{aligned} u\,(h_{7}x + h_{8}y + h_{9}) &= h_{1}x + h_{2}y + h_{3},\\\\ v\,(h_{7}x + h_{8}y + h_{9}) &= h_{4}x + h_{5}y + h_{6}. \end{aligned} "/>

                    Bring all terms to the left-hand side:

                    <BlockMath math=" \begin{aligned} x h_{1} + y h_{2} + h_{3} - u x h_{7} - u y h_{8} - u h_{9} &= 0,\\\\ x h_{4} + y h_{5} + h_{6} - v x h_{7} - v y h_{8} - v h_{9} &= 0. \end{aligned} "/>

                    Assume <InlineMath math="h_{9} = 1"/> (fixing scale) and move constants to the right:

                    <BlockMath math=" \begin{aligned} x h_{1} + y h_{2} + h_{3} - u x h_{7} - u y h_{8} &= u,\\\\ x h_{4} + y h_{5} + h_{6} - v x h_{7} - v y h_{8} &= v. \end{aligned} "/>

                    Flatten the unknowns into vector form:

                    <BlockMath math="
                    \mathbf{h} =
                    \begin{bmatrix}
                    h_{1}\\ h_{2}\\ h_{3}\\ h_{4}\\ h_{5}\\ h_{6}\\ h_{7}\\ h_{8}
                    \end{bmatrix}.
                    "/>

                    For a single correspondence <InlineMath math="(x, y) \mapsto (u, v)"/>, we get two equations:

                    <BlockMath math=" \begin{aligned} [\,x \;\; y \;\; 1 \;\; 0 \;\; 0 \;\; 0 \;\; -u x \;\; -u y\,] \mathbf{h} &= u,\\\\ [\,0 \;\; 0 \;\; 0 \;\; x \;\; y \;\; 1 \;\; -v x \;\; -v y\,] \mathbf{h} &= v. \end{aligned} "/>

                    Thus, to solve for <InlineMath math="h_{1},...,h_{8}"/> (8 unknowns) we need 4 correspondences. Stacking them gives:

                    <BlockMath math="
                    \underbrace{\begin{bmatrix}
                    x_1 & y_1 & 1 & 0 & 0 & 0 & -u_1 x_1 & -u_1 y_1\\
                    0 & 0 & 0 & x_1 & y_1 & 1 & -v_1 x_1 & -v_1 y_1\\
                    x_2 & y_2 & 1 & 0 & 0 & 0 & -u_2 x_2 & -u_2 y_2\\
                    0 & 0 & 0 & x_2 & y_2 & 1 & -v_2 x_2 & -v_2 y_2\\
                    x_3 & y_3 & 1 & 0 & 0 & 0 & -u_3 x_3 & -u_3 y_3\\
                    0 & 0 & 0 & x_3 & y_3 & 1 & -v_3 x_3 & -v_3 y_3\\
                    x_4 & y_4 & 1 & 0 & 0 & 0 & -u_4 x_4 & -u_4 y_4\\
                    0 & 0 & 0 & x_4 & y_4 & 1 & -v_4 x_4 & -v_4 y_4
                    \end{bmatrix}}_{\mathbf{A}}
                    \begin{bmatrix}
                    h_1\\ h_2\\ h_3\\ h_4\\ h_5\\ h_6\\ h_7\\ h_8
                    \end{bmatrix}
                    =
                    \begin{bmatrix}
                    u_1\\ v_1\\ u_2\\ v_2\\ u_3\\ v_3\\ u_4\\ v_4
                    \end{bmatrix}.
                    "/>

                    Finally, solve the system for <InlineMath math="\mathbf{h}"/> to reconstruct the homography:

                    <BlockMath math=" H = \begin{bmatrix} h_1 & h_2 & h_3\\\\ h_4 & h_5 & h_6\\\\ h_7 & h_8 & 1 \end{bmatrix}. "/>
                    
                    * While 4 correspondences is the minimum necessary to solve for 8 unknowns of <InlineMath math="H"/>,
                    having more correspondences makes the final projection transformation matrix more robust to noise in correspondence choices
                    because we can solve the overdetermined system using least squares.                    
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/Bridge_1.jpg" 
                      alt="Point Correspondences" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Point...</p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/Bridge_2.jpg"
                      alt="Correspondencse" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Correspondences</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-300 font-mono leading-relaxed mb-4">
                  <BlockMath math="
                      \begin{align*}
                        D_{\text{bridge}} &= \begin{bmatrix}
                          1.9856953e+00 & -2.64638978e-01 & -7.3019474e+02 \\ 
                          5.3917450e-01 &  1.75160307e+00 & -2.43720728e+02 \\
                          1.16605560e-03 & -6.5845505e-04 &  1.00000000e+00
                        \end{bmatrix}
                      \end{align*}
                      "/>
                    </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 mb-6 max-w-full mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/IMG_7766.jpg" 
                      alt="Window Seat View from NYC → SFO..." className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Window Seat View from NYC → SFO...</p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/IMG_7767.jpg"
                      alt="with a slightly different angle" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">with a slightly different angle</p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/IMG_7526.jpg" 
                      alt="NYC from World Trade Center..." className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">NYC from World Trade Center...</p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/IMG_7527.jpg"
                      alt="with a slightly different angle" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">with a slightly different angle</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 mb-6 max-w-full mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/Plane_1.jpg" 
                      alt="Point..." className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Point...</p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/Plane_2.jpg"
                      alt="Correspondence" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Correspondences</p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/WTC_1.jpg" 
                      alt="Point Correspondences" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Point...</p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/WTC_2.jpg"
                      alt="Correspondences" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Correspondences</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-300 font-mono leading-relaxed mb-4">
                    <BlockMath math="
                      \begin{align*}
                        D_{\text{plane}} &= \begin{bmatrix}
                          8.63027302e-01 & -2.41041893e-01 &  5.463666e+01 \\
                          -1.07625048e-02 &  6.9620174e-01 &  2.1719200e+02 \\
                          -2.462483e-05 & -3.74452092e-04 &  1.00000000e+00 
                        \end{bmatrix}
                        \\
                        \\
                        D_{\text{WTC}} &= \begin{bmatrix}
                          2.526481e+00 & -1.97368342e-01 & -1.27606161e+03 \\
                          5.19956729e-01 &  1.61518991e+00 & -3.57938253e+02 \\
                          1.4607695e-03 & -4.86005876e-04 &  1.00000000e+00 
                        \end{bmatrix}
                      
                      \end{align*}
                      "/>
                  </p>
                <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2 mt-8">A.3: Warp the Images</h3>

                  <span className="text-gray-500 dark:text-gray-300 font-bold font-mono">Rectification:</span>

                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 max-w-4xl mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/Berkeley_Cat_Mural.jpg" 
                      alt="Cat Mural (Berkeley, CA)" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Cat Mural (Berkeley, CA)</p>
                    </div>
                    {/* <div>
                      <img 
                      src="/cs180/3/Cat_Rectified.jpg"
                      alt="Rectification Point Correspondences" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Rectification Point Correspondences</p>
                    </div> */}
                    <div> 
                      <ImageComparisonSlider
                        beforeImage="/cs180/3/Cat_NN.jpg"
                        afterImage="/cs180/3/Cat_Bilinear.jpg"
                        beforeLabel="Nearest Neighbors"
                        afterLabel="Bilinear"
                        className="max-w-full mx-auto"
                      />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                        Nearest Neighbor vs Bilinear Interpolation 
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/Chess_Board.jpg" 
                      alt="3D-Printed Chess Board (World Trade Center, NY)" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">3D-Printed Chess Board (World Trade Center, NY)
                      </p>
                    </div>
                    <div >
                      <ImageComparisonSlider
                        beforeImage="/cs180/3/Chess_NN.jpg"
                        afterImage="/cs180/3/Chess_Bilinear.jpg"
                        beforeLabel="Nearest Neighbors"
                        afterLabel="Bilinear"
                        className="max-w-full max-auto"
                      />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                        Nearest Neighbor vs Bilinear Interpolation 
                      </p>
                    </div>
                  </div>
                <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">A.4: Blend the Images into a Mosaic</h3>
                  <p className="text-gray-500 dark:text-gray-300 font-mono leading-relaxed mb-4">
                    <span className="text-neural-600 dark:text-neural-400 font-bold">Process:</span>
                    <ol className="ml-10">
                      <li>Warp Image 1
                        {/* -------------- Image -------------- */}
                        <div className = "flex-1 max-w-xs mx-auto">
                          <img 
                          src="/cs180/3/warped1.jpg" 
                          alt="Warped Image 1" className="w-full mx-auto rounded-lg shadow-lg" />
                        </div>
                        {/* ----------------------------------- */}
                      </li>
                      <li>Initialize mask to 1 where image has nonzero pixels and 0 elsewhere
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 max-w-lg mx-auto">
                          <div>
                            <img 
                            src="/cs180/3/mask1.jpg" 
                            alt="" className="mx-auto rounded-lg shadow-lg" />
                            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">mask1
                            </p>
                          </div>
                          <div>
                            <img 
                            src="/cs180/3/mask2.jpg" 
                            alt="" className="mx-auto rounded-lg shadow-lg" />
                            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">mask2
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>Use scipy's ndimage.distance_transform_edt to create blurring mask
                          <br/>
                          <br/>
                           (maps each nonzero pixel value to the distance between it and the nearest zero value)
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 max-w-lg mx-auto">
                          <div>
                            <img 
                            src="/cs180/3/dist1.jpg" 
                            alt="" className="mx-auto rounded-lg shadow-lg" />
                            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">dist_transform1
                            </p>
                          </div>
                          <div>
                            <img 
                            src="/cs180/3/dist2.jpg" 
                            alt="" className="mx-auto rounded-lg shadow-lg" />
                            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">dist_transform2
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>Manually set blurring masks to original mask values (1 and 0) where the masks do not overlap
                        <div className="max-w-md mx-auto">
                          <ImageComparisonSlider
                            beforeImage="/cs180/3/weight1.jpg"
                            afterImage="/cs180/3/weight2.jpg"
                            beforeLabel="weight1"
                            afterLabel="weight2"
                            className="max-w-full max-auto"
                          />
                        </div>
                      </li>
                      <li> output = weight1 * warped1 + weight2 * image2
                        <div className="max-w-lg mx-auto">
                          <img 
                          src="/cs180/3/IMG_7644_IMG_7646.jpg"
                          alt="Brooklyn Bridge Mosaic"
                          className="mx-auto rounded-lg shadow-lg" />
                          <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                            Brooklyn Bridge Mosaic
                          </p>
                        </div>
                      </li>
                    </ol> 
                  </p>
                  <p className="text-synapse-600 dark:text-neural-400 font-mono font-bold">Other examples:
                  <div className="max-w-lg mx-auto">
                    <img 
                    src="/cs180/3/IMG_7766_IMG_7767.jpg"
                    alt="Plane View Mosaic" className="mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Plane View Mosaic</p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                      <img 
                      src="/cs180/3/IMG_7526_IMG_7527.jpg"
                      alt="World Trade Center Mosaic" 
                      className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">World Trade Center Mosaic</p>
                  </div>
                  </p>
              </div>
            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Feature Matching for Autostitching</h2>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">B.1: Harris Corner Detection</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/wo_anms.jpg" 
                      alt="Detected Harris corners without ANMS" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                        Detected Harris corners without ANMS
                      </p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/anms.jpg" 
                      alt="Detected Harris corners without ANMS" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                        Detected Harris corners without ANMS
                      </p>
                    </div>
                  </div>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">B.2: Feature Descriptor Extraction</h3>
                <div className="max-w-md mx-auto">
                  <img 
                  src="/cs180/3/anms_features.jpg"
                  alt="Normalized Extracted Features with ANMS"
                  className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Normalized Extracted Features (after ANMS)
                  </p>
                </div>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">B.3: Feature Matching</h3>
                <div className="max-w-5xl mx-auto">
                    <img 
                    src="/cs180/3/matches.jpg"
                    alt="Matched Features"
                    className="mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                    Matched Features
                    </p>
                </div>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">B.4: RANSAC for Robust Homography</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/IMG_7526_IMG_7527.jpg" 
                      alt="World Trade Center Mosaic from Manually-selected Features"  className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                        World Trade Center Mosaic from
                        <span className="text-grey-600 dark:text-grey-400 font-bold"> Manually-selected Features</span>
                      </p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/7526_7527_auto.jpg" 
                      alt="World Trade Center Mosaic from Auto-detected Features" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                        World Trade Center Mosaic from 
                        <span className="text-grey-600 dark:text-grey-400 font-bold"> Auto-detected Features</span>:
                        <br/>
                        Even though the final mosaics were different, they both seemed to capture the overall scene.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/IMG_7766_IMG_7767.jpg" 
                      alt="Plane View Mosaic from Manually-selected Features"  className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                        Plane View Mosaic from
                        <span className="text-grey-600 dark:text-grey-400 font-bold"> Manually-selected Features</span>
                      </p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/7767_7766_auto.jpg" 
                      alt="Plane View Mosaic from Auto-detected Features" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                      Plane View Mosaic from 
                        <span className="text-grey-600 dark:text-grey-400 font-bold"> Auto-detected Features</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                    <div>
                      <img 
                      src="/cs180/3/IMG_0363_IMG_0365.jpg" 
                      alt="TaiEr, China Mosaic from Manually-selected Features"  className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                        TaiEr, China Mosaic from
                        <span className="text-grey-600 dark:text-grey-400 font-bold"> Manually-selected Features</span>
                      </p>
                    </div>
                    <div>
                      <img 
                      src="/cs180/3/0363_0365_auto.jpg" 
                      alt="TaiEr, China Mosaic from Auto-detected Features" className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                      TaiEr, China Mosaic from 
                        <span className="text-grey-600 dark:text-grey-400 font-bold"> Auto-detected Features</span>
                      </p>
                    </div>
                  </div>

          </div>

          <div className="vintage-border glassmorphism rounded-xl p-8">
            <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">Failed Examples</h3>
              <div className="max-w-lg mx-auto">
                <img 
                src="/cs180/3/7644_7646_auto1.jpg" 
                alt="Brooklyn Bridge Mosaic from Auto-detected Features" className="mx-auto rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> 
                <span className="text-grey-600 dark:text-grey-400 font-bold"> Brooklyn Bridge Mosaic from Auto-detected Features</span>
                It was difficult for the RANSAC Algorithm to find the correct homography because Brooklyn Bridge image
                has a largely repeating pattern of wires. While it is easy for humans to identify the corresponding features,
                the algorithm struggles to find them due to the similarity of the features our algorithm can extract.
                </p>
              </div>
          </div>



          </div>
        </div>
      </div>
      
    </div>
  );
}