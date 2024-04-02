'use client';

import Image from 'next/image';
import { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { FC } from 'react';

interface ImageWithFallbackProps extends ImageProps {
  src: string;
  alt: string;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({
  src,
  alt,
  ...props
}) => {
  const [error, setError] = useState(false);

  return (
    <Image
      alt={alt}
      onError={() => setError(!error)}
      src={error ? '/placeholder.png' : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
