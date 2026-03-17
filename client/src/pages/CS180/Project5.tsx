import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function CS180Project5() {
  useEffect(() => {
    document.title = 'Project 5: Diffusion Models - Iana Lin';
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/cs180"
            className="inline-flex items-center text-neural-600 dark:text-neural-400 hover:text-neural-800 dark:hover:text-neural-200 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-mono">Back to CS 180</span>
          </Link>

          <div className="mb-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-neural-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-mono text-lg">P5</span>
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
                  <span className="text-neural-600 dark:text-neural-400">Project 5:</span> Diffusion Models
                </h1>
                <p className="text-gray-600 dark:text-gray-300 font-mono">December 13, 2025</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-neural-100 dark:bg-neural-900 text-neural-700 dark:text-neural-300 rounded-full text-sm">
                Diffusion Models
              </span>
              <span className="px-3 py-1 bg-neural-100 dark:bg-neural-900 text-neural-700 dark:text-neural-300 rounded-full text-sm">
                Neural Networks
              </span>
              <span className="px-3 py-1 bg-neural-100 dark:bg-neural-900 text-neural-700 dark:text-neural-300 rounded-full text-sm">
                Generative Models
              </span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <div className="vintage-border glassmorphism rounded-2xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-2">
              </p>
              <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
                <img
                  src="/cs180/5/mountain-tree256.png"
                  alt="Mountain and Tree Flip Image"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
                <img
                  src="/cs180/5/mountain-tree256flip.png"
                  alt="Mountain and Tree Flip Image"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Mountain and Tree Flip Image</p>
            </div>

            {/* Part 0: Text-to-Image Prompts */}
            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-4">Part 0: Text-to-Image (DeepFloyd)</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-2">Random seed: 1024</p>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-4">
              </p>
              <div className="space-y-4 mb-6 text-sm text-gray-500 dark:text-gray-300 font-mono">
                <p>Prompts:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    hands using a figure skate as a knife to cut into a hyper-realistic raw steak-shaped cake
                  </li>
                  <li>
                    an overhead drone-scan style view of an abandoned ice-skating rink at dawn, the ice cracked and reflecting
                    the first light, faint figure skating loops etched on it, muted pastel palette
                  </li>
                  <li>
                    a translucent hawk soaring over mountains, its wings filled with floating code snippets instead of feathers
                  </li>
                  <li>
                    a mixed-media style portrait of a girl running statistical regressions on a foggy mountain trail, numbers dissolving into mist
                  </li>
                </ul>
              </div>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Reflection: More inference steps improved quality; long/abstract prompts introduced more mistakes/strangeness.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <figure className="space-y-2 text-center">
                  <div className="flex flex-wrap justify-center gap-3 max-w-xxs mx-auto">
                    <img src="/cs180/5/steak30.png" alt="Steak prompt 30 steps" className="rounded-lg shadow-md" />
                    <img src="/cs180/5/steak80.png" alt="Steak prompt 80 steps" className="rounded-lg shadow-md" />
                  </div>
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Steak cake (30, 80 steps)</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <div className="flex flex-wrap justify-center gap-3 max-w-xxs mx-auto">
                    <img src="/cs180/5/rink50.png" alt="Rink prompt 50 steps" className="rounded-lg shadow-md" />
                    <img src="/cs180/5/rink100.png" alt="Rink prompt 100 steps" className="rounded-lg shadow-md" />
                  </div>
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Abandoned rink (50, 100 steps)</figcaption>
                </figure>
                <figure className="space-y-2 text-center max-w-xxs mx-auto">
                  <div className="flex flex-wrap justify-center gap-3">
                    <img src="/cs180/5/hawk50.png" alt="Hawk prompt 50 steps" className="rounded-lg shadow-md" />
                    <img src="/cs180/5/hawk100.png" alt="Hawk prompt 100 steps" className="rounded-lg shadow-md" />
                  </div>
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Hawk (50, 100 steps)</figcaption>
                </figure>
                <figure className="space-y-2 text-center max-w-xxs mx-auto">
                  <div className="flex flex-wrap justify-center gap-3">
                    <img src="/cs180/5/runner20.png" alt="Runner prompt 20 steps" className="rounded-lg shadow-md" />
                    <img src="/cs180/5/runner50.png" alt="Runner prompt 50 steps" className="rounded-lg shadow-md" />
                  </div>
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Runner (20, 50 steps)</figcaption>
                </figure>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.1 Forward Process (Adding Noise)</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Increasing noise on the Campanile via the forward diffusion process.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/campanile250.png" alt="Campanile noisy t=250" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 250</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/campanile500.png" alt="Campanile noisy t=500" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 500</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/campanile750.png" alt="Campanile noisy t=750" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 750</figcaption>
                </figure>
              </div>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
              Gaussian blur struggles to recover structure from heavily noised inputs.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/blur250.png" alt="Gaussian blur t=250" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 250</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/blur500.png" alt="Gaussian blur t=500" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 500</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/blur750.png" alt="Gaussian blur t=750" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 750</figcaption>
                </figure>
              </div>
            </div>

            
              

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.3 One-Step Denoising</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Single UNet denoise pass recovers detail but degrades as noise increases.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/campanile250.png" alt="Campanile noisy t=250" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 250</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/campanile500.png" alt="Campanile noisy t=500" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 500</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/campanile750.png" alt="Campanile noisy t=750" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 750</figcaption>
                </figure>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/os250.png" alt="One-step denoise t=250" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 250</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/os500.png" alt="One-step denoise t=500" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 500</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/os750.png" alt="One-step denoise t=750" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">t = 750</figcaption>
                </figure>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.4 Iterative Denoising</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Strided timesteps progressively denoise toward the clean estimate.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/iterative90.png" alt="Iterative step 90" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">t=90</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/iterative240.png" alt="Iterative step 240" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">t=240</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/iterative390.png" alt="Iterative step 390" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">t=390</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/iterative540.png" alt="Iterative step 540" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">t=540</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/iterative690.png" alt="Iterative step 690" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">t=690</figcaption>
                </figure>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/campanile.jpg" alt="Campanile original" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/os990.png" alt="One-step at heavy noise" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">One-step (t≈990)</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/blur990.png" alt="Gaussian blur" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Gaussian blur</figcaption>
                </figure>
                <figure className="space-y-2 text-center">
                  <img src="/cs180/5/clean.png" alt="Iterative final" className="w-24 h-24 mx-auto rounded-lg shadow-md" />
                  <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Iterative final</figcaption>
                </figure>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.5 Diffusion Sampling</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Unconditional samples from noise (prompt: &quot;a high quality photo&quot;).
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/diffsample1.png" alt="Sample 1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/diffsample2.png" alt="Sample 2" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">2</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/diffsample3.png" alt="Sample 3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/diffsample4.png" alt="Sample 4" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">4</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/diffsample5.png" alt="Sample 5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">5</figcaption>
                </figure>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.6 Classifier-Free Guidance</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                CFG boosts fidelity; sampling with guidance scale &gt; 1.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg1.png" alt="CFG sample 1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg2.png" alt="CFG sample 2" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">2</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg3.png" alt="CFG sample 3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg4.png" alt="CFG sample 4" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">4</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg5.png" alt="CFG sample 5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">5</figcaption>
                </figure>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.7 SDEdit / Image-to-Image</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Denoising with different start noise levels (higher = less edits).
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_campanile1.png" alt="Campanile i_start=1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_campanile3.png" alt="Campanile i_start=3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_campanile5.png" alt="Campanile i_start=5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_campanile7.png" alt="Campanile i_start=7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_campanile10.png" alt="Campanile i_start=10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_campanile20.png" alt="Campanile i_start=20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/campanile.jpg" alt="Campanile original" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_dino1.png" alt="Dino i_start=1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_dino3.png" alt="Dino i_start=3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_dino5.png" alt="Dino i_start=5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_dino7.png" alt="Dino i_start=7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_dino10.png" alt="Dino i_start=10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_dino20.png" alt="Dino i_start=20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/dino.jpg" alt="Dino original" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
                <div className="flex flex-wrap justify-center gap-3">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_fox1.png" alt="Fox i_start=1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_fox3.png" alt="Fox i_start=3" className="w-20 h-20 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_fox5.png" alt="Fox i_start=5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_fox7.png" alt="Fox i_start=7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_fox10.png" alt="Fox i_start=10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cfg_fox20.png" alt="Fox i_start=20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">i_start=20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/fox.jpg" alt="Fox original" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.7.1 Editing Web & Hand-Drawn Inputs</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Progression from low to high noise starts
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-fish1.png" alt="Cat-fish i_start=1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-fish3.png" alt="Cat-fish i_start=3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-fish5.png" alt="Cat-fish i_start=5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-fish7.png" alt="Cat-fish i_start=7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-fish10.png" alt="Cat-fish i_start=10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-fish20.png" alt="Cat-fish i_start=20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-fish.png" alt="Original cat" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/bear1.png" alt="Bear i_start=1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/bear3.png" alt="Bear i_start=3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/bear5.png" alt="Bear i_start=5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/bear7.png" alt="Bear i_start=7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/bear10.png" alt="Bear i_start=10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/bear20.png" alt="Bear i_start=20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/bear.png" alt="Original bear" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/sketch1.png" alt="Hand sketch i_start=1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/sketch3.png" alt="Hand sketch i_start=3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/sketch5.png" alt="Hand sketch i_start=5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/sketch7.png" alt="Hand sketch i_start=7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/sketch10.png" alt="Hand sketch i_start=10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/sketch20.png" alt="Hand sketch i_start=20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/sketch.png" alt="Original" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.7.2 Inpainting</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Filling masked regions while preserving context. From left to right: Original, Mask, Hole, Inpainted.
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-3">
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/campanile.jpg" alt="Original Campanile" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/campanile-inpaint-mask.png" alt="Campanile mask" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Mask</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/campanile-inpaint-hole.png" alt="Campanile hole" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Hole</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/campanile-inpaint.png" alt="Campanile inpainted" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Inpainted</figcaption>
                  </figure>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/elmo.jpeg" alt="Original Elmo" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/elmo-inpaint-mask.png" alt="Elmo mask" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Mask</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/elmo-inpaint-hole.png" alt="Elmo hole" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Hole</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/elmo-inpaint.png" alt="Elmo inpainted" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Inpainted</figcaption>
                  </figure>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/ocean.jpeg" alt="Original Ocean" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/ocean-inpaint-mask.png" alt="Ocean mask" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Mask</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/ocean-inpaint-hole.png" alt="Ocean hole" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Hole</figcaption>
                  </figure>
                  <figure className="space-y-1 text-center">
                    <img src="/cs180/5/ocean-inpaint.png" alt="Ocean inpainted" className="w-24 h-24 rounded-lg shadow-md" />
                    <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Inpainted</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.7.3 Text-Conditional Translation</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Guided edits from different noise levels; Lower noise looks more like text, higher noise looks more lke image.
                <br/>
                Prompt: "A pixel art style image, with high pixel density"
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-pixel1.png" alt="Cat text edit 1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-pixel3.png" alt="Cat text edit 3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-pixel5.png" alt="Cat text edit 5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-pixel7.png" alt="Cat text edit 7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-pixel10.png" alt="Cat text edit 10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat-pixel20.png" alt="Cat text edit 20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cat2.jpeg" alt="Original cat" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cow-pixel1.png" alt="Cow text edit 1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cow-pixel3.png" alt="Cow text edit 3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cow-pixel5.png" alt="Cow text edit 5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cow-pixel7.png" alt="Cow text edit 7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cow-pixel10.png" alt="Cow text edit 10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cow-pixel20.png" alt="Cow text edit 20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/cow.jpeg" alt="Original cow" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/campanile-pixel1.png" alt="Campanile text edit 1" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">1</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/campanile-pixel3.png" alt="Campanile text edit 3" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">3</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/campanile-pixel5.png" alt="Campanile text edit 5" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">5</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/campanile-pixel7.png" alt="Campanile text edit 7" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">7</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/campanile-pixel10.png" alt="Campanile text edit 10" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">10</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/campanile-pixel20.png" alt="Campanile text edit 20" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">20</figcaption>
                </figure>
                <figure className="space-y-1 text-center">
                  <img src="/cs180/5/campanile.jpg" alt="Original campanile" className="w-20 h-20 rounded-lg shadow-md" />
                  <figcaption className="text-xs text-gray-500 dark:text-gray-300 font-mono">Original</figcaption>
                </figure>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.8 Visual Anagrams</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Images that flip into a different concept when rotated 180°. Each row shows the original orientation and flipped version at different resolutions.
              </p>
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-mono mb-3">64×64 resolution</p>
                  <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
                    <figure className="space-y-2 text-center">
                      <img src="/cs180/5/man-camp.png" alt="Man and campfire flip" className="w-32 h-32 rounded-lg shadow-md mx-auto" />
                      <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Old man ↔ Campfire</figcaption>
                    </figure>
                    <figure className="space-y-2 text-center">
                      <img src="/cs180/5/clock-cry.png" alt="Clock and face flip" className="w-32 h-32 rounded-lg shadow-md mx-auto" />
                      <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Clocks ↔ face</figcaption>
                    </figure>
                    <figure className="space-y-2 text-center">
                      <img src="/cs180/5/mountain-tree.png" alt="Mountain and tree flip" className="w-32 h-32 rounded-lg shadow-md mx-auto" />
                      <figcaption className="text-sm text-gray-500 dark:text-gray-300 font-mono">Mountain ↔ Oak tree</figcaption>
                    </figure>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-mono mb-3">256×256 resolution</p>
                  <div className="space-y-6">
                      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                        <figure className="space-y-2 text-center max-w-xs mx-auto">
                          <img src="/cs180/5/man-camp256.png" alt="Old man" className="rounded-lg shadow-md mx-auto" />
                          <figcaption className="text-sm text-center text-gray-500 dark:text-gray-300 font-mono break-words">An oil painting of an old man</figcaption>
                        </figure>
                        <figure className="space-y-2 text-center max-w-xs mx-auto">
                          <img src="/cs180/5/man-camp256flip.png" alt="Campfire" className="rounded-lg shadow-md mx-auto" />
                          <figcaption className="text-sm text-center text-gray-500 dark:text-gray-300 font-mono break-words">An oil painting of people around a campfire</figcaption>
                        </figure>
                        <figure className="space-y-2 text-center max-w-xs mx-auto">
                          <img src="/cs180/5/clock-cry256.png" alt="Melted clocks" className="rounded-lg shadow-md mx-auto" />
                          <figcaption className="text-sm text-center text-gray-500 dark:text-gray-300 font-mono break-words">An oil painting of a pile of melted clocks</figcaption>
                        </figure>
                        <figure className="space-y-2 text-center max-w-xs mx-auto">
                          <img src="/cs180/5/clock-cry256flip.png" alt="Crying face" className="rounded-lg shadow-md mx-auto" />
                          <figcaption className="text-sm text-center text-gray-500 dark:text-gray-300 font-mono break-words">An oil painting of a surreal crying face</figcaption>
                        </figure>
                        <figure className="space-y-2 text-center max-w-xs mx-auto">
                          <img src="/cs180/5/mountain-tree256.png" alt="Mountain" className="rounded-lg shadow-md mx-auto" />
                          <figcaption className="text-sm text-center text-gray-500 dark:text-gray-300 font-mono break-words">A water color drawing of a mountain</figcaption>
                        </figure>
                        <figure className="space-y-2 text-center max-w-xs mx-auto">
                          <img src="/cs180/5/mountain-tree256flip.png" alt="Oak tree" className="rounded-lg shadow-md mx-auto" />
                          <figcaption className="text-sm text-center text-gray-500 dark:text-gray-300 font-mono break-words">A water color drawing of an oak tree</figcaption>
                        </figure>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">1.9 Hybrid Images</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Combining low- and high-frequency noise estimates to blend two prompts.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="space-y-3 max-w-xs">
                  <img src="/cs180/5/palm-hand256.png" alt="Hybrid palm + map" className="mx-auto rounded-lg shadow-md" />
                  <p className="text-sm text-gray-500 dark:text-gray-300 font-mono text-center">Palm × Map hybrid</p>
                </div>
                <div className="space-y-3 max-w-xs">
                  <img src="/cs180/5/balloon-pig256.png" alt="Hybrid balloon + pig" className="mx-auto rounded-lg shadow-md" />
                  <p className="text-sm text-gray-500 dark:text-gray-300 font-mono text-center">Balloon × Pig hybrid</p>
                </div>
                <div className="space-y-3 max-w-xs">
                  <img src="/cs180/5/landscape-bookshelf256.png" alt="Hybrid landscape + bookshelf" className="mx-auto rounded-lg shadow-md" />
                  <p className="text-sm text-gray-500 dark:text-gray-300 font-mono text-center">Landscape × Bookshelf hybrid</p>
                </div>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-2xl p-8 mb-8 mt-12">
              <h2 className="text-center font-serif text-3xl font-semibold mb-4">Part B: Training a Diffusion Model from Scratch</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Implementing and training UNet-based denoising and flow matching models on MNIST.
              </p>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">Part 1.2: Training a UNet-based Denoiser</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Visualizing the noising process and training a UNet to denoise MNIST digits at σ = 0.5.
              </p>
              <div className="mb-6">
                <img src="/cs180/5/noising.png" alt="Noising process visualization" className="max-w-2xl mx-auto rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Noising process at different σ levels</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
                <div>
                  <img src="/cs180/5/uncond-e1.png" alt="Uncond epoch 1" className="rounded-lg shadow-md mx-auto" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 1</p>
                </div>
                <div>
                  <img src="/cs180/5/uncond-e5.png" alt="Uncond epoch 5" className="rounded-lg shadow-md mx-auto" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 5</p>
                </div>
              </div>
              <div>
                <img src="/cs180/5/uncond-loss.png" alt="Uncond training loss" className="max-w-2xl mx-auto rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Training loss curve</p>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">Part 1.2.2: Out-of-Distribution Testing</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Testing the denoiser on varying noise levels it wasn't trained on.
              </p>
              <div>
                <img src="/cs180/5/ood.png" alt="Out-of-distribution results" className="max-w-3xl mx-auto rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Performance across different σ values</p>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">Part 1.2.3: Denoising Pure Noise</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Training a denoiser to denoise pure noise. The patterns observed in the generated outputs seem to resemble an average of the MNIST digits stacked on top of each other
                This is likely because there is no prior information about the digits in each noise sample. 
                Thus, to minimize loss, the denoiser has to learn the average of the digits.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
                <div>
                  <img src="/cs180/5/purenoise-e1.png" alt="Results after epoch 1" className="rounded-lg shadow-md mx-auto" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 1 </p>
                </div>
                <div>
                  <img src="/cs180/5/purenoise-e5.png" alt="Results after epoch 5" className="rounded-lg shadow-md mx-auto" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 5</p>
                </div>
              </div>
              <div>
                <img src="/cs180/5/purenoise-loss.png" alt="Training loss curve" className="max-w-2xl mx-auto rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Training loss over 5 epochs</p>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">Part 2: Flow Matching Model</h2>
              <h3 className="text-lg font-semibold text-synapse-600 dark:text-synapse-400 mb-4 text-center">2.3: Time-Conditioned UNet</h3>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Training a time-conditioned UNet to predict flow from noisy to clean data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <img src="/cs180/5/time-e1.png" alt="Epoch 1 samples" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 1</p>
                </div>
                <div>
                  <img src="/cs180/5/time-e5.png" alt="Epoch 5 samples" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 5</p>
                </div>
                <div>
                  <img src="/cs180/5/time-e10.png" alt="Epoch 10 samples" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 10</p>
                </div>
              </div>
              <div className="mb-8">
                <img src="/cs180/5/time-loss.png" alt="Time-conditioned training loss" className="max-w-2xl mx-auto rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Training loss curve</p>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8 mb-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">2.6: Class-Conditioned UNet with CFG</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Adding class conditioning to control digit generation with classifier-free guidance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <img src="/cs180/5/class-e0.png" alt="Class-conditioned epoch 1" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 1</p>
                </div>
                <div>
                  <img src="/cs180/5/class-e5.png" alt="Class-conditioned epoch 5" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 5</p>
                </div>
                <div>
                  <img src="/cs180/5/class-e10.png" alt="Class-conditioned epoch 10" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 10</p>
                </div>
              </div>
              <div>
                <img src="/cs180/5/class-loss.png" alt="Class-conditioned training loss" className="max-w-2xl mx-auto rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Training loss curve</p>
              </div>
            </div>

            <div className="vintage-border glassmorphism rounded-xl p-8">
              <h2 className="text-center font-serif text-2xl font-semibold mb-6">Training Without LR Scheduler</h2>
              <p className="text-gray-500 dark:text-gray-300 font-mono text-center mb-6">
                Compensating for removal of exponential learning rate decay by lowering the learning rate to 5e-3.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <img src="/cs180/5/nodecay-e0.png" alt="No decay epoch 1" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 1</p>
                </div>
                <div>
                  <img src="/cs180/5/nodecay-e5.png" alt="No decay epoch 5" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 5</p>
                </div>
                <div>
                  <img src="/cs180/5/nodecay-e10.png" alt="No decay epoch 10" className="rounded-lg shadow-md" />
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Epoch 10</p>
                </div>
              </div>
              <div>
                <img src="/cs180/5/nodecay-loss.png" alt="No decay training loss" className="max-w-2xl mx-auto rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 font-mono">Training loss without scheduler</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}