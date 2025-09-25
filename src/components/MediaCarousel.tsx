'use client';

import React from 'react';
import Image from 'next/image';

interface MediaCarouselProps {
  youtubeVideoId?: string;
  galleryImages?: string[];
  projectTitle: string;
}

export default function MediaCarousel({ youtubeVideoId, galleryImages, projectTitle }: MediaCarouselProps) {

  // 如果既沒有影片也沒有圖片，返回 null
  if (!youtubeVideoId && (!galleryImages || galleryImages.length === 0)) {
    return null;
  }

  // 如果只有 YouTube 影片，直接顯示影片
  if (youtubeVideoId && (!galleryImages || galleryImages.length === 0)) {
    return (
      <div className="w-full">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title={`${projectTitle} Demo Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }



  return (
    <div className="w-full">
      {/* 如果只有 YouTube 影片，直接顯示影片 */}
      {youtubeVideoId && (!galleryImages || galleryImages.length === 0) && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title={`${projectTitle} Demo Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      {/* 如果有 YouTube 影片和圖片，先顯示影片 */}
      {youtubeVideoId && galleryImages && galleryImages.length > 0 && (
        <div className="mb-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title={`${projectTitle} Demo Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* 簡潔的圖片滑動展示 */}
      {galleryImages && galleryImages.length > 0 && (
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 pb-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                >
                  <div className="relative rounded-xl overflow-hidden" 
                       style={{ maxHeight: '400px' }}>
                    <Image
                      src={image}
                      alt={`${projectTitle} Screenshot ${index + 1}`}
                      width={600}
                      height={800}
                      className="object-contain"
                      unoptimized={true}
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxHeight: '400px',
                        maxWidth: '300px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
