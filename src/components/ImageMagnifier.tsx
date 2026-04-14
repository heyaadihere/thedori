import { useState, useRef } from 'react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  className?: string;
  magnifierSize?: number;
  zoomLevel?: number;
}

const ImageMagnifier = ({ src, alt, className = '', magnifierSize = 180, zoomLevel = 2.5 }: ImageMagnifierProps) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMagnifierPos({ x, y });
  };

  return (
    <div
      className="relative overflow-hidden cursor-crosshair"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img ref={imgRef} src={src} alt={alt} className={className} />
      {showMagnifier && (
        <div
          className="absolute pointer-events-none rounded-full border-2 border-gold/30 shadow-xl"
          style={{
            width: magnifierSize,
            height: magnifierSize,
            left: magnifierPos.x - magnifierSize / 2,
            top: magnifierPos.y - magnifierSize / 2,
            backgroundImage: `url(${src})`,
            backgroundSize: `${(imgRef.current?.width || 0) * zoomLevel}px ${(imgRef.current?.height || 0) * zoomLevel}px`,
            backgroundPositionX: -(magnifierPos.x * zoomLevel - magnifierSize / 2),
            backgroundPositionY: -(magnifierPos.y * zoomLevel - magnifierSize / 2),
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
