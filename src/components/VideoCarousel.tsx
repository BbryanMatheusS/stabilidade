'use client';

import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { VideoCard } from './VideoCard';
import { VideoModal } from './VideoModal';

const videos = [
  {
    id: 'lfcLWibZo1Y',
    title: 'Planejamento Estratégico vs. Gestão',
    description: 'Qual a Verdadeira Diferença?'
  },
  {
    id: 'lfcLWibZo1Y',
    title: 'Marshmello ft. Bastille - Happier (Clipe Musical Oficial)',
    description: 'Descrição breve do vídeo 2.'
  },
  {
    id: 'lfcLWibZo1Y',
    title: 'Marshmello & Anne-Marie - FRIENDS *HINO OFICIAL DA FRIENDZONE*',
    description: 'Descrição breve do vídeo 3.'
  },
  {
    id: 'lfcLWibZo1Y',
    title: 'Marshmello - Verão (Video Musical Oficial) com Lele Pons',
    description: 'Descrição breve do vídeo 4.'
  },
  {
    id: 'lfcLWibZo1Y',
    title: 'Coldplay - Paradise (Official Video)',
    description: 'Descrição breve do vídeo 5.'
  },
  {
    id: 'lfcLWibZo1Y',
    title: 'Coldplay - Yellow (Official Video)',
    description: 'Descrição breve do vídeo 6.'
  },
  {
    id: 'lfcLWibZo1Y',
    title: 'Coldplay - Hymn For The Weekend (Official Video)',
    description: 'Descrição breve do vídeo 7.'
  },
  {
    id: 'lfcLWibZo1Y',
    title: 'Coldplay - A Sky Full Of Stars (Official Video)',
    description: 'Descrição breve do vídeo 8.'
  },
];

export function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      emblaApi?.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  if (showGrid) {
    return (
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Vídeos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              title={video.title}
              description={video.description}
              onClick={() => setSelectedVideo(video.id)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowGrid(false)}
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <ChevronUp className="w-4 h-4" /> Ver Menos
          </button>
        </div>

        {selectedVideo && (
          <VideoModal
            videoId={selectedVideo}
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </section>
    );
  }

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Vídeos</h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {videos.map((video) => (
            <div className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] px-2">
              <VideoCard
                key={video.id}
                videoId={video.id}
                title={video.title}
                description={video.description}
                onClick={() => setSelectedVideo(video.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight />
      </button>

      {/* "Ver todos" */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowGrid(true)}
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <ChevronDown className="w-4 h-4" /> Ver Todos
        </button>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo}
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}
