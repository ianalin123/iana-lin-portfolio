import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from '@/lib/math';


export default function CS180Project4() {
  useEffect(() => {
    document.title = 'Project 4: NeRF - Iana Lin';
  }, []);

  // Reload animated GIFs periodically to force them to restart.
  // This is a light-weight workaround when the GIF file isn't encoded
  // to loop infinitely. If you convert to a video (mp4/webm) this can be
  // removed and replaced with a <video loop autoPlay muted />.
  const gifRef1 = useRef<HTMLImageElement | null>(null);
  const gifRef2 = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const refs = [gifRef1, gifRef2];
    const intervals: number[] = [];
    // Approximate duration of the GIF in milliseconds. Tweak this to match
    // the actual length of your GIF so the reload is seamless.
    const approxDuration = 3500;

    refs.forEach((r) => {
      const id = window.setInterval(() => {
        const el = r.current;
        if (!el) return;
        // Remove any existing query params then append a cache-busting one
        // so the browser reloads the GIF and it restarts.
        const src = el.src.split('?')[0];
        el.src = `${src}?_=${Date.now()}`;
      }, approxDuration);
      intervals.push(id);
    });

    return () => intervals.forEach((id) => clearInterval(id));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Back button */}
          <Link href="/cs180" className="inline-flex items-center text-synapse-600 dark:text-synapse-400 hover:text-synapse-800 dark:hover:text-synapse-200 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-mono">Back to CS 180</span>
          </Link>

          {/* Project header */}
          <div className="mb-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-synapse-600 rounded-lg flex items-center justify-center">
                {/*  -------------- Icon -------------- */}
                <span className="text-white font-mono text-lg">P4</span>
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
                  {/*  -------------- Title -------------- */}
                  <span className="text-synapse-600 dark:text-synapse-400">Project 4:</span> NeRF
                </h1>
                {/*  -------------- Date -------------- */}
                <p className="text-gray-600 dark:text-gray-300 font-mono">November 13, 2025</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {/*  -------------- Tags -------------- */}
              <span className="px-3 py-1 bg-synapse-100 dark:bg-synapse-900 text-synapse-700 dark:text-synapse-300 rounded-full text-sm">
                Neural Radiance Fields
              </span>
              <span className="px-3 py-1 bg-synapse-100 dark:bg-synapse-900 text-synapse-700 dark:text-synapse-300 rounded-full text-sm">
                Neural Networks
              </span>
              <span className="px-3 py-1 bg-synapse-100 dark:bg-synapse-900 text-synapse-700 dark:text-synapse-300 rounded-full text-sm">
                Plenoptic Function
              </span>
            </div>
          </div>

          {/* Project content */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="vintage-border glassmorphism rounded-2xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Overview</h2>
              {/* -------------- Image -------------- */}
              <img 
                src="/cs180/4/novel_views_lego.gif" 
                alt="NeRF Scene Rendering"
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-500  dark:text-gray-300 font-mono">
                NeRF Scene Rendering
              </p>
              {/* ----------------------------------- */}

              <p className=" text-gray-500  dark:text-gray-300 mt-2 font-mono leading-relaxed ">
              <span className="text-gray-500 dark:text-gray-300 font-bold ">Neural Radiance Fields (NeRFs) </span>
              are neural network models that can 
              <span className="text-neural-600 dark:text-neural-400 font-bold"> represent a 3D scene and render it from different viewpoints.</span> 
              </p>

            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Part 0: Camera Calibration and 3D Scanning</h2>    
              <p className="text-gray-500  dark:text-gray-300 font-mono">
                To 
                the first step is the recover intrisics of our camera (focal length and origin) 
                and the extrinsics to convert from world to camera coordinates.
                <BlockMath math={""} /> 
                {/* -------------- Image Row -------------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-6 max-w-full mx-auto">
                  <div>
                    <img 
                    src="/cs180/4/frustum1.png" 
                    alt="Camera Frustum Visualization 1" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono"> Camera Frustum Visualization 1</p>
                  </div>
                  <div>
                    <img 
                    src="/cs180/4/frustum2.png"
                    alt="Camera Frustum Visualization 2" className="w-full mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">Camera Frustum Visualization 2</p>
                  </div>
                </div>
              </p>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold">1: Fit a Neural Field to a 2D Image</h2>
              <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300 mb-2 mt-8">Model architecture report</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono">
              Number of Layers: 6
              <br/>
              Width: 256
              <br/>
              Max Positional Encoding Frequency: 10
              <br/>
              Learning Rate: 1e-2
              </p>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">Training progression visualizations</h3>
              <div className="max-w-full mx-auto">
                  <img 
                  src="/cs180/4/training_progression_fox.png"
                  alt="Training progression visualization for test image (fox)" 
                  className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                    Training progression visualization for test image (fox)
                  </p>
              </div>
              <div className="max-w-full mx-auto">
                  <img 
                  src="/cs180/4/training_progression_IMG_0048.png"
                  alt="Training progression visualization for Byodo-In Temple, Hawaii" 
                  className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                    Training progression visualization for Byodo-In Temple, Hawaii
                  </p>
              </div>
              <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2 mt-8">Final results for 2 choices of max positional encoding frequency and 2 choices of width</h3>
              <div className="max-w-2xl mx-auto">
                  <img 
                  src="/cs180/4/hyperparameter_tuning_grid_fox.png"
                  alt="Training progression visualization for test image (fox)" 
                  className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                    Training progression visualization for test image (fox)
                  </p>
              </div>
              <div className="max-w-2xl mx-auto">
                  <img 
                  src="/cs180/4/hyperparameter_tuning_grid_IMG_0048.png"
                  alt="Training progression visualization for Byodo-In Temple, Hawaii" 
                  className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                    Training progression visualization for Byodo-In Temple, Hawaii
                  </p>
              </div>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">PSNR curve for training</h3>
               <div className="max-w-2xl mx-auto">
                  <img 
                  src="/cs180/4/psnr_curve_fox.png"
                  alt="PSNR curve throughout training for fox image" 
                  className="mx-auto rounded-lg shadow-lg" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                    PSNR curve throughout training for fox image
                  </p>
                </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">2: Fit a Neural Radiance Field from Multi-view Images</h2>
                <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300 mb-2 mt-8">Model architecture report</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono">
                  Number of Layers: 8
                  <br/>
                  Width: 300
                  <br/>
                  Max Positional Encoding Frequency for coordinates: 10
                  <br/>
                  Max Positional Encoding Frequency for ray direction: 5
                  <br/>
                  Learning Rate: 5e-4 with learning rate decay
                  <br/>
                  Near-far : 0.5 - 2.0
                  <br/>
                  Batch size: 10000 rays
                  <br/>
                  Number of Samples per Ray: 64
                  <br/>
                  Iterations: 20000
                  </p>
                <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-2 mt-8">
                  Brief description of Implementation:
                </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 font-mono">
                  The NeRF pipeline begins with a  data preprocessing step that undistorts raw images using precomputed camera intrinsics and distortion coefficients,
                  then computes an optimal new camera matrix that tightly crops away black borders. 
                  Each image is undistorted, cropped to the valid region of interest, converted to RGB, 
                  and ArUco markers are detected at the original resolution to recover accurate camera-to-world poses via a PnP solve.
                  The undistorted images are then resized to a fixed target width (with focal length consistently rescaled), 
                  split into randomized train/validation sets, and packaged together with their camera poses and a scalar focal length into a single dataset file. 
                  In addition, a synthetic set of test poses is generated by computing a spiral trajectory around the object: camera centers are sampled on a circle around the mean training pose,
                  with rotations constructed to keep the object centered, enabling smooth novel-view renderings.
                  <br />
                  <br />
                  During training, the dataset is wrapped in a ray-sampling loader that flattens all training images and randomly samples pixel locations across all views to form mini-batches of rays.
                  For each batch, 3D points are sampled along each ray between configurable near and far planes with optional stratified perturbation,
                  and the NeRF network predicts colors and densities that are integrated via volume rendering and compared against ground truth RGB with a mean squared error loss.
                  For optimization I use Adam with an optional exponential learning rate decay schedule that is parameterized by the total number of iterations,
                   and the training loop periodically stores rendered validation images and computes PSNR on the held-out set. 
                  The implementation also logs loss over time and generates multiple plots—training loss curves on a log scale, PSNR-vs-iteration plots.
                  </p>
                  <div className="max-w-2xl mx-auto">
                        <img 
                        src="/cs180/4/rays_samples.png"
                        alt="Rays and samples visualization with cameras" 
                        className="mx-auto rounded-lg shadow-lg" />
                        <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                        Rays and samples visualization with cameras
                        </p>
                    </div>
                    <div className="max-w-full mx-auto">
                        <img 
                        src="/cs180/4/training_progression_lego.png"
                        alt="Training progression visualization for test image (fox)" 
                        className="mx-auto rounded-lg shadow-lg" />
                        <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                          Training progression visualization for test image (lego)
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                      <img 
                      src="/cs180/4/psnr_curve_lego.png"
                      alt="PSNR curve on validation set for lego dataset" 
                      className="mx-auto rounded-lg shadow-lg" />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                        PSNR curve on validation set for lego dataset
                      </p>
                    </div>
                  <img 
                    src="/cs180/4/novel_views_lego.gif" 
                    alt="Spherical rendering video of the Lego using provided test cameras   "
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                  />
                  <p className="text-center text-sm text-gray-500  dark:text-gray-300 font-mono">
                   Spherical rendering video of the Lego using provided test cameras   
                  </p> 
            </div>
            
            <div className="vintage-border glassmorphism rounded-xl p-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">2.6: Training with Your Own Data</h2>
              <div className="space-y-6">
                <div>
                  <img 
                    src="/cs180/4/novel_views_custom.gif" 
                    alt="Custom NeRF Scene Rendering"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                  />
                  <p className="text-center text-sm text-gray-500  dark:text-gray-300 font-mono">
                    Custom NeRF Scene Rendering
                  </p>
                  <h3 className="text-lg font-semibold text-neural-600 dark:text-neural-400 mb-2"> Discussion of code or hyperparameter changes you made</h3>
                  <p className="text-gray-500  dark:text-gray-300 font-mono">
                  The main thing I changed was the near-far plane distances to 0.5 and 2.0 respectively to better capture the scene depth.
                  Additionally, I increased the network width to 300 from the 256 I used for the lego dataset.
                  I also used learning rate decay to help with convergence over the longer training time.
                  I kept the learning rate = 5e-4, batch_size = 10k , samples_per_ray = 64, and iterations = 2k the same as the lego dataset.
                  <div className="max-w-2xl mx-auto">
                    <img 
                    src="/cs180/4/training_loss_custom.png"
                    alt="Training loss for custom image" 
                    className="mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                     Training loss for custom image
                    </p>
                  </div>
                  <div className="max-w-full mx-auto">
                    <img 
                    src="/cs180/4/training_progression_custom.png"
                    alt="Training progression visualization for custom image" 
                    className="mx-auto rounded-lg shadow-lg" />
                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2 font-mono">
                      Training progression visualization for custom image
                    </p>
                  </div>
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