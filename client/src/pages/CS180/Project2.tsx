import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { CodeBlock, InlineCode } from '@/components/CodeBlock';
import { InlineMath, BlockMath } from '@/lib/math';



export default function CS180Project2() {
  useEffect(() => {
    document.title = 'Project 2: Fun with Filters and Frequencies - Iana Lin';
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Back button */}
          <Link href="/cs180" className="inline-flex items-center text-synapse-600 dark:text-synapse-400 hover:text-synapse-600 dark:hover:text-synapse-100 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-mono">Back to CS 180</span>
          </Link>

          {/* Project header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-synapse-600 rounded-lg flex items-center justify-center">
                {/*  -------------- Icon -------------- */}
                <span className="text-white font-mono text-lg">P2</span>
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
                  {/*  -------------- Title -------------- */}
                  <span className="text-synapse-600 dark:text-synapse-400">Project 2:</span> Fun with Filters and Frequencies
                </h1>
                {/*  -------------- Date -------------- */}
                <p className="text-gray-600 dark:text-gray-300 font-mono">September 26, 2025</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {/*  -------------- Tags -------------- */}
              <span className="px-3 py-1 bg-synapse-100 dark:bg-synapse-900 text-synapse-700 dark:text-synapse-300 rounded-full text-sm">
                Image Frequencies
              </span>
            </div>
          </div>

          {/* Project content */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="vintage-border glassmorphism rounded-2xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Overview</h2>
              
              {/* -------------- Image Row -------------- */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-6 max-w-4xl mx-auto">
                <div>
                  <img 
                  src="/cs180/2/spatial.png" 
                  alt="A zebra car I saw on my run in spatial domain" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">A zebra car I saw on my run in spatial domain</p>
                </div>
                <div>
                  <img 
                  src="/cs180/2/freq.png"
                  alt="...vs frequency domain" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">...vs frequency domain</p>
                </div>
              </div>

              <p className="text-gray-500 dark:text-gray-300 font-mono leading-relaxed mb-4">
                Understanding images from a 
                <span className="text-neural-600 dark:text-neural-400 font-bold "> frequency perspective </span> rather than 
                <span className="text-synapse-600 dark:text-synapse-400 font-bold"> spatial perspective </span>
                is crucial in digital image processing.
                Images are made up of different frequency components, with              
                <span className="text-neural-600 dark:text-neural-400 font-bold"> low frequencies capturing the general structure </span> of an image and 
                <span className="text-synapse-600 dark:text-synapse-400 font-bold"> high frequencies capturing small/fine details</span>. 
                By manipulating the constituent frequencies of images, we can blur, sharpen, and blend images seamlessly.
              </p>

              <p className="text-gray-500 dark:text-gray-300 font-mono leading-relaxed mb-4">
                <span className="font-bold">The goal of this assignment </span>
                is to 
                
                <span className="text-neural-600 dark:text-neural-400 font-bold"> demonstrate how image processing in the frequency domain can be used to achieve interesting visual effects</span>.
              </p>
            </div>
            
            <div className="vintage-border glassmorphism rounded-2xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Convolutions</h2>
              <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2 mt-6">1.1 From Scratch!</h3>

              <p className="text-gray-500 dark:text-gray-300 mt-2 font-mono leading-relaxed ">
              
              Mathematically, convolution is defined as:

              <BlockMath math="
              (A * B) [i, j]= \sum\limits_{l=-\infty}^{\infty} \sum\limits_{l=-\infty}^\infty A [k, l] B[i - k, j - l]
              "/>

              for convolution of two single-channel images/filters, <InlineMath math="A \hspace{0.1cm}\& \hspace{0.1cm}B"/>, both of dimension <InlineMath math="(H, W)"/>
              </p>

              <p className="text-gray-500 dark:text-gray-300 mt-2 font-mono leading-relaxed ">
              Convolution is an <span className="text-neural-600 dark:text-neural-400 font-bold"> associative and communative </span> operation, i.e. 
              <BlockMath math="
              A * B = B * A \\
              \& \\
              A * (B - C) = A * B - A * C
              "/>
              </p>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-6">Let's take a look at what convolution does! </h3>


              <span className="text-lg text-gray-500 dark:text-gray-300 font-bold "></span>
              <p className="text-gray-500 dark:text-gray-300 mt-2 font-mono leading-relaxed ">
              <span className="text-grey-600 dark:text-grey-400">The following are a couple of filters/kernels:</span>
              <BlockMath math="
              \begin{align*}
                D_x &= \begin{bmatrix}
                      1 & 0 & -1
                    \end{bmatrix}
                \hspace{0.5cm}
                D_y &= \begin{bmatrix}
                      1 \\
                      0 \\
                      -1
                    \end{bmatrix}
                \hspace{0.5cm}
                Box &= \frac{1}{9}\begin{bmatrix}
                  1 & 1 & 1 \\
                  1 & 1 & 1 \\
                  1 & 1 & 1 \\
                \end{bmatrix}
              \end{align*}
                " />
              

              <span className="text-neural-600 dark:text-neural-400">And an image convolved with these filters/kernels:</span>

              {/* -------------- Image -------------- */}
                <img 
                  src="/cs180/2/selfie.png" 
                  alt="Original Image (f): my sister and I skating together again!"
                  className="w-full max-w-sm  mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                   Original Image (<InlineMath math="f" />): my sister and I skating together again!
                </p>
              {/* ----------------------------------- */}

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/2/selfie_dx.png" 
                  alt="f * D_x" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold"><InlineMath math="f * D_x" /></span>
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/selfie_dy.png" 
                  alt="f * D_" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold"><InlineMath math="f * D_y" /></span>
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/box.png" 
                  alt="f * Box" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold"><InlineMath math="f * Box" /></span>
                  <br/>
                  * Should look blurry, but here, it is still relatively clear since the kernel (3x3) is small compared to my image
                  </p>
                </div>
              </div>
              </p>
              <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2 mt-6">Code Implementation</h3>
              <p className="text-gray-500 dark:text-gray-300 mt-2 font-mono leading-relaxed ">
              In practice, convolution is a very commonly used operation, leading to many performance optimizations 
             (through formulation of convolution as matrix-multiplication followed by parallelization)
              
              Let's compare the runtime it takes to convolve an image and filter using SciPy's convolve2d, a function from a prebuild library, 
              with two naive implementations.
              <br/>
              <br/>
              <br/>
              Scipy convolution time: 0.1677 seconds
              <br/>
              <br/>
              VERSUS
              <br/>
              <br/>
              <CodeBlock 
                language="python" 
                filename=""
                showLineNumbers
              >
              {`def convolve_four_loops(image, kernel):

  ... (handling of padding) ...
  # In my implementation, I used zero-padding, i.e. just add zeros to the edge of the original image
  # But I found that when using Sci-py's convolve2d, 'symm' padding, i.e. mirror the edge pixels,
  # was the best for the processing I was doing

  for i in range(ih):
      for j in range(iw):
          sum = 0
          for m in range(kh):
              for n in range(kw):
                  sum += kernel[m, n] * padded_image[i + m, j + n] # this is scalar multiplication
          output[i, j] = sum

    return output`}
              </CodeBlock>
              Four loops convolution time: 19.7630 seconds
              <CodeBlock 
                language="python" 
                filename=""
                showLineNumbers
              >
              {`def convolve_two_loops(image, kernel):
              
  ... (handling of padding) ...

    for i in range(ih):
        for j in range(iw):
            region = padded_image[i:i+kh, j:j+kw]
            output[i, j] = np.sum(region * kernel) # this is element-wise multiplication followed by sum of all elements


    return output`}
              </CodeBlock>
              Two loops convolution time: 19.6246 seconds
              </p>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Filters!</h2>    
              <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2 mt-6">1.2 Finite Difference Operator</h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono">
              The finite difference operator is a simple filter that approximates the derivative of an image in a specific direction. i.e.
              <BlockMath math="
              \begin{align*}
                \frac{\partial f}{\partial x} \approx f * D_x
                \hspace{0.5cm}
                \frac{\partial f}{\partial y} \approx f * D_x
              \end{align*}
                " />
              Each operator highlights regions of rapid intensity change (in the x and y directions, respectively), which often correspond to edges in the image.
              To detect edges regardless of their orientation, we can compute the derivative magnitude: 
              <BlockMath math="\Vert \nabla f \Vert_2 = \sqrt{\left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2}" />
              <span className="text-neural-600 dark:text-neural-400 mt-2 font-mono font-bold">Let's visualize these derivatives and magnitudes</span> for <InlineMath math="f = " /> "camera_man.png", as well as a thresholded version of the gradient magnitude
              </p>
              {/* -------------- Image -------------- */}
                <img 
                  src="/cs180/2/camera.png" 
                  alt="Original Image f =  'camera_man.png' "
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                   Original Image (<InlineMath math="f" />): "camera_man.png"
                </p>
              {/* ----------------------------------- */}
              {/* -------------- Image Row -------------- */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6 max-w-5xl mx-auto">
                <div>
                  <img 
                  src="/cs180/2/camera_dx.png" 
                  alt="f * D_x" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"><InlineMath math="f * D_x" /></p>
                </div>
                <div>
                  <img 
                  src="/cs180/2/camera_dy.png"
                  alt="f * D_y" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"><InlineMath math="f * D_y" /></p>
                </div>
                <div>
                  <img 
                  src="/cs180/2/camera_grad.png" 
                  alt="\Vert \nabla f \Vert_2" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"><InlineMath math="\Vert \nabla f \Vert_2" /></p>
                </div>
                <div>
                  <img 
                  src="/cs180/2/camera_thres.png"
                  alt="\Vert \nabla f \Vert_2 \geq 0.32" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"><InlineMath math="\Vert \nabla f \Vert_2 \geq 0.32" /> 
                  <br/>
                  (thresholded gradient magnitude)
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono">
              * Note how the thresholded gradient magnitude image clearly highlights the strong edges in the image.
              </p>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-6">1.3 Derivative of Gaussian (DoG) Filters</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono">
              In real-world images, noise can create false edges and make it difficult to accurately detect true edges. 
              To mitigate this, we can smooth the image using a Gaussian filter before applying the derivative operator.
              This combination (of Gaussian smoothing and finite difference operator) is known as the Derivative of Gaussian (DoG) filter.
              {/* -------------- Image Row -------------- */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6 max-w-5xl mx-auto">
                <div>
                  <img 
                  src="/cs180/2/camera_dx_blur.png" 
                  alt="f_{smoothed} * D_x" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"><InlineMath math="f_{smoothed} * D_x" /></p>
                </div>
                <div>
                  <img 
                  src="/cs180/2/camera_dy_blur.png"
                  alt="f_{smoothed} * D_y" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"><InlineMath math="f_{smoothed} * D_y" /></p>
                </div>
                <div>
                  <img 
                  src="/cs180/2/camera_grad_blur.png" 
                  alt="\Vert \nabla f_{smoothed} \Vert_2" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"><InlineMath math="\Vert \nabla f_{smoothed} \Vert_2" /></p>
                </div>
                <div>
                  <img 
                  src="/cs180/2/camera_thres_blur.png"
                  alt="\Vert \nabla f_{smoothed} \Vert_2 \geq 0.1" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"><InlineMath math="\Vert \nabla f_{smoothed} \Vert_2 \geq 0.1" /> 
                  <br/>
                  (thresholded gradient magnitude)
                  </p>
                </div>
              </div>     
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono">
              Comparing these derivatives and magnitudes with those from a plain Finite Difference Operator convolution,
              we can see how DoG creates a more robust edge detection filter.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono ">
              To understand why the Derivative of Gaussian (DoG) filter reduces high-frequency noise
              while preserving important low-frequency structures in the image (thus making edges more distinct), let's break down the process into two steps:

              <ol>
                <li>smoothing the image to reduce noise that obscures or distracts from edges (remove high-frequencies)
                  <BlockMath math="
                  \begin{align*}
                    f_{smoothed} &= f * G_{\sigma}  \\
                  \end{align*}
                  " />
                </li>
                <li>applying a derivative operation on the smoothed image to detect edges.
                  <BlockMath math="
                  \begin{align*}
                    \frac{\partial}{\partial x} (f * G_{\sigma}) &\approx  f_{smoothed} * D_x =  (f * G_{\sigma}) * D_x\\
                    \frac{\partial}{\partial y} (f * G_{\sigma}) &\approx  f_{smoothed} * D_y = (f * G_{\sigma}) * D_y\\
                  \end{align*}
                  " />
                </li>
               </ol>
              Using the associative property of convolution, we can rewrite the above as:
              <BlockMath math="
              \begin{align*}
                \frac{\partial}{\partial x} (f * G_{\sigma}) &\approx  f * (G_{\sigma} * D_x) = f * DoG_x  \\
                \frac{\partial}{\partial y} (f * G_{\sigma}) &\approx  f * (G_{\sigma} * D_y) = f * DoG_y \\
              \end{align*}
              " />
              This means that we can first convolve the Gaussian filter with the derivative filter to create a single DoG filter, and then convolve the image with this DoG filter to get the same result.
              This is computationally more efficient, especially for larger images and filters.
              
                  
              To verify that both methods yield the same result, I computed the maximum difference between the two methods' results for both x and y derivatives, which were both very small:
              <br/>
              <br/>
              Max difference in X derivatives: 0.004088<br/>
              Max difference in Y derivatives: 0.004337

              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-mono ">
              {/*
              <span className="text-base text-neural-600 dark:text-neural-400 mt-2 font-mono font-bold">An aside: Why Gaussian? </span>
              To understand why the Gaussian filter is effective for smoothing images, it's important to note the 
              The standard deviation <InlineMath math=", \sigma" /> controls the extent of the smoothing effect: a larger <InlineMath math=", \sigma" /> results in more blurring, while a smaller <InlineMath math=", \sigma" /> preserves more detail.
            
              The DoG filter is defined as:
              <BlockMath math="
              \begin{align*}
                DoG_x &= G_{\sigma * D_x \\
                DoG_y &= G_{\sigma * D_y
              \end{align*}
                " />
              where <InlineMath math="G_{, \sigma, (k,k)}" /> is a Gaussian filter with standard deviation <InlineMath math=", \sigma" /> of size <InlineMath math="(k,k)" />.
              The Gaussian filter is defined as:
              <BlockMath math="
              G_{, \sigma, (k,k)} = \frac{1}{2\pi, \sigma^2} e^{-\frac{x^2 + y^2}{2, \sigma^2}}
              " />
              
              Here are a couple approximate (discretized to integers) Gaussian filters for different values of <InlineMath math=", \sigma" /> and of different sizes:
              <BlockMath math="
              \begin{align*}
                G_{, \sigma=1, (3,3)} &= \frac{1}{16}\begin{bmatrix}
                      1 & 2 & 1 \\
                      2 & 4 & 2 \\
                      1 & 2 & 1 \\
                    \end{bmatrix}
                \hspace{0.5cm}
                G_{, \sigma=2. (5,5)} &= \frac{1}{273}\begin{bmatrix}
                      1 & 4 & 6 & 4 & 1 \\
                      4 & 16 & 24 & 16 & 4 \\
                      6 & 24 & 36 & 24 & 6 \\
                      4 & 16 & 24 & 16 & 4 \\
                      1 & 4 & 6 & 4 & 1 \\
                    \end{bmatrix}
              \end{align*}
              " />
              */}
              *  I chose <InlineMath math="\sigma = 2.0" /> and a <InlineMath math="k = int(2 * np.ceil(3 * std) + 1)" /> (to capture 99% of the Gaussian distribution) 
              for the above results because it seemed to get rid of enough noise while preserving the low-frequency edges of the camera-man.
              <br/>
              ** To choose the thresholds for the gradient magnitude, I tried a few values and chose the ones that seem to throw away all the background (e.g. grass) 
              and keep the edges of the camera-man.
              </p>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold">Image "Sharpening"</h2>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">2.1 How it works</h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono ">

              The Gaussian filter we used earlier acts as low pass filter that retains only the low frequencies. 
              If we subtract the blurred version (only low frequencies) from the original image, we get the high frequencies of the image.
              An image often looks "sharper" if it has more high frequencies, so we can make images look "sharper" by adding these high frequencies to the original image.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mt-2 mb-0 font-mono">
              Let's visualize the process of the unsharp filter (from left to right):
              </p>
              {/* -------------- Image Grid -------------- */}
              {/* Taj Mahal Row */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 max-w-5xl mx-auto">
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/taj_mahal.jpg" 
                    alt="Original Image (f):'taj_mahal.jpg'" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    Original Image (<InlineMath math="f" />): "taj_mahal.jpg"
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/taj_mahal_blurred.jpg" 
                    alt="Low Frequencies" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    <InlineMath math="f * G_{\sigma = 2}" />
                    <br/>
                    (Low Frequencies)
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/taj_mahal_high.jpg" 
                    alt="High Frequencies" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    <InlineMath math="f - (f * G_{\sigma = 2})" />
                    <br/>
                    (High Frequencies)
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/sharp_a1_s2_taj_mahal.jpg" 
                    alt="Sharpened Image" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    <InlineMath math="f + \alpha(f - (f * G_{\sigma = 2}))" />
                    <br/>
                    (Sharpened with <InlineMath math="\alpha=1" />)
                    </p>
                  </div>
              </div>
              
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">Unsharp Mask Filter</h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono ">
              We can also combine this process into a single convolution operation called the unsharp mask filter.
              <br/>
              <br/>
              Let <InlineMath math = "f"/> denote a grayscale 2D image, <InlineMath math = "\alpha"/> denote the sharpening parameter, <InlineMath math = "G_{\sigma}"/> denote a Gaussian filter, and <InlineMath math = "\delta"/> denote a 2-D unit impulse.

              Starting from the definition of the unsharp procedure, we apply the properties of convolution to get a single convolution operation:
              
              <BlockMath math="\begin{align}
                f + \alpha(f - f * g) &= f * \delta + \alpha(f * \delta - f * g) \\
                &= f * \delta + \alpha(f * \delta) - \alpha(f * g) \\
                &= f * \delta + f * (\alpha\delta) - f * (\alpha g) \\
                &= f * ((1 + \alpha)\delta - \alpha g)
              \end{align}
               " />
              </p>
              
              
              
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">Visualizing the effects of the sharpening parameter, <InlineMath math = "\alpha"/></h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono ">
              <InlineMath math = "\alpha"/> denotes the sharpening parameter, i.e. the "strength" of sharpening. 
              The larger the <InlineMath math = "\alpha"/>, the more of the high-frequency components we are adding, creating a stronger sharpening effect.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 max-w-5xl mx-auto">
                <div className="flex-1">
                    <img 
                    src="/cs180/2/guilin_china.jpg" 
                    alt="Guilin, China" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    <span className="font-bold">Guilin, China</span>
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/sharp_a1_s2_china.jpg" 
                    alt="Guilin, China α=1" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300  font-mono">
                    <InlineMath math = "\alpha = 1 , \sigma = 2"/>
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/sharp_a4_s2_china.jpg" 
                    alt="Guilin, China α=4" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300  font-mono">
                    <InlineMath math = "\alpha = 4 , \sigma = 2"/>
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/sharp_a10_s2_china.jpg" 
                    alt="Guilin, China α=10" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300  font-mono">
                    <InlineMath math = "\alpha = 10 , \sigma = 2"/>
                    </p>
                  </div>
                </div>

                {/* Peach Row */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 max-w-5xl mx-auto">
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/peach.jpg" 
                    alt="Peach from Oregon" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    <span className="font-bold">Peach from Oregon</span>
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/sharp_a1_s2_peach.jpg" 
                    alt="Peach α=1" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    <InlineMath math = "\alpha = 1 , \sigma = 2"/>
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/sharp_a4_s2_peach.jpg" 
                    alt="Peach α=4" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    <InlineMath math = "\alpha = 4 , \sigma = 2"/>
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                    src="/cs180/2/sharp_a10_s2_peach.jpg" 
                    alt="Peach α=10" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                    <InlineMath math = "\alpha = 10 , \sigma = 2"/>
                    </p>
                  </div>
                </div>
              

              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-8 mt-8">Experiment: Sharpen an Image, Blur It, then Sharpen It Again</h3>
                {/* -------------- Image -------------- */}
                 <div className="flex-1 max-w-sm mx-auto">
                  <img 
                    src="/cs180/2/ducks_geese.jpg" 
                    alt="Ducks and geese in Dongshan, China"
                    className="mx-auto rounded-lg shadow-lg"
                  />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-bold font-mono">
                    Ducks and geese in Dongshan, China
                  </p>
                </div>
                {/* ----------------------------------- */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/2/s.jpg" 
                  alt="Sharpened" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Sharpened (<InlineMath math = "\alpha = 2 , \sigma = 2"/>)</span>
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/bs.jpg" 
                  alt="Sharpened → Blurred" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Sharpened → Blurred</span>
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/sbs.jpg" 
                  alt="Sharpened → Blurred → Sharpened" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Sharpened → Blurred → Sharpened</span>
                  <br/>
                  * Looks less sharp compared to original and to first sharpening 
                  </p>
                </div>
              </div>

            
              
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Hybrid Images</h2>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">2.2</h3>


              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/2/nutmeg.jpg" 
                  alt="Nutmeg" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Nutmeg
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/derek.jpg" 
                  alt="Derek" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Derek
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/nutmegderek_5,9,1.png" 
                  alt="Nutmeg and Derek Hybrid (BW-BW)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Nutmeg and Derek Hybrid (BW-BW)</span>
                  <br/>
                  <InlineMath math="\sigma_{high} = 5, \sigma_{low} = 9, \alpha = 1"/>
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/2/deer.jpg" 
                  alt="Nara, Japan Deer" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Nara, Japan Deer
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/cow.jpg" 
                  alt="Tilden, Berkeley Cow" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                   Tilden, Berkeley Cow
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/deercow_5,10,1.png" 
                  alt="Nara, Japan Deer and Tilden, Berkeley Cow Hybrid (BW-BW)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Nara, Japan Deer and Tilden, Berkeley Cow Hybrid (BW-BW)</span>
                  <br/>
                  <InlineMath math="\sigma_{high} = 5, \sigma_{low} = 10, \alpha = 1"/>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/2/carlos.jpg" 
                  alt="Carlos (my cat)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Carlos (my cat)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/port.jpg" 
                  alt="Self-portrait" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Self-portrait
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/carlosport_5,12,1.png" 
                  alt="Carlos and Iana Self-Portrait Hybrid (BW-BW)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Carlos and Iana Self-Portrait Hybrid (BW-BW)</span>
                  <br/>
                  <InlineMath math="\sigma_{high} = 5, \sigma_{low} = 10, \alpha = 1"/>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/2/carlos_fft.jpeg" 
                  alt="Carlos (my cat)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Carlos (my cat)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/port_fft.jpeg" 
                  alt="Self-portrait" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Self-portrait
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/hybrid_fft.jpeg" 
                  alt="Carlos and Iana Self-Portrait Hybrid (BW-BW)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Carlos and Iana Self-Portrait Hybrid (BW-BW)</span>
                  <br/>
                  <InlineMath math="\sigma_{high} = 5, \sigma_{low} = 10, \alpha = 1"/>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/2/carlos_aligned.jpg" 
                  alt="Carlos Aligned" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Carlos Aligned (<InlineMath math="c"/>)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/port_aligned.jpg" 
                  alt="Self-portrait Aligned" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Self-portrait Aligned (<InlineMath math="s"/>)
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/hf.jpg" 
                  alt="" className="mx-auto max-w-4xs rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  High Frequency Component
                  <br/>
                  <InlineMath math="c - (c * G_{\sigma_{high} = 10})" />
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/lf.jpg" 
                  alt="Self-portrait" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  Low Frequency Component
                  <br/>
                  <InlineMath math="s * G_{\sigma_{low} = 5}" />
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-10 font-mono">
              I found that the output hybrid image seems to look better when
              using 
              <span className="text-synapse-600 dark:text-synapse-400 mt-2 font-mono font-bold "> color only for the high-frequency component</span>
              , and grayscale for the low-frequency component
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="flex-1">
                  <img 
                  src="/cs180/2/nutmegderek_5,9,0.5_color.png" 
                  alt="Nutmeg and Derek Hybrid (RGB-BW)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Nutmeg and Derek Hybrid (RGB-BW)</span>
                  <br/>
                  <InlineMath math="\sigma_{high} = 5, \sigma_{low} = 9, \alpha = 0.5"/>
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/deercow_5,10,0.5_color.png" 
                  alt="Nara, Japan Deer and Tilden, Berkeley Cow Hybrid (RGB-BW)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Nara, Japan Deer and Tilden, Berkeley Cow Hybrid (RGB-BW)</span>
                  <br/>
                  <InlineMath math="\sigma_{high} = 5, \sigma_{low} = 10, \alpha = 0.5"/>
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                  src="/cs180/2/carlosport_5,10,0.5_color.png" 
                  alt="Carlos and Iana Self-Portrait Hybrid (BW-BW)" className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                  <span className="font-bold">Carlos and Iana Self-Portrait Hybrid (RGB-BW)</span>
                  <br/>
                  <InlineMath math="\sigma_{high} = 5, \sigma_{low} = 10, \alpha = 0.5"/>
                  </p>
                </div>
            </div>
            

          
            </div>
            
            <div className="vintage-border glassmorphism rounded-xl p-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Gaussian and Laplacian Stacks</h2>

              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-8 mt-8">2.3</h3>
              {/* -------------- Image -------------- */}
                <img 
                  src="/cs180/2/stacks_visualization.png" 
                  alt="Recreation of Figure 3.42 in Szelski"
                  className="max-w-full mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                   Recreation of Figure 3.42 in Szelski
                </p>
              {/* ----------------------------------- */}
              
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-8 mt-8">2.4 Multiresolution Blending (a.k.a. the oraple!)</h3>
              {/* -------------- Image -------------- */}
                <img 
                  src="/cs180/2/oraple.png" 
                  alt="Oraple"
                  className="max-w-full mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                  Oraple (vertical seam mask)
                </p>
              {/* ----------------------------------- */}
              {/* -------------- Image -------------- */}
                <img 
                  src="/cs180/2/shanghai.png" 
                  alt="Shanghai -- Day and Night"
                  className="max-w-full mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                 Shanghai -- Day and Night (horizontal seam mask)
                </p>
              {/* ----------------------------------- */}
              {/* -------------- Image -------------- */}
                <img 
                  src="/cs180/2/akaza.png" 
                  alt="Akaza -- Before and After"
                  className="max-w-full mx-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">
                  Akaza -- Before and After (circular mask)
                </p>
              {/* ----------------------------------- */}
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}