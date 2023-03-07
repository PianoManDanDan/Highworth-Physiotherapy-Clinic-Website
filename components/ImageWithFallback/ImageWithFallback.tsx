import Image from 'next/image';
import { ImageWithFallbackProps } from './ImageWithFallbackProps';
import { useState } from 'react';

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallbackSrc, ...rest }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Image
      {...rest}
      src={imageError ? fallbackSrc : src}
      onError={() => setImageError(true)}
    />
  );
}

export default ImageWithFallback;
