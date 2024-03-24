import Image from 'next/image';
import { FC } from 'react';
import styles from './index.module.scss';

interface CusImageProps {
  src: string;
  alt: string;
}

const CusImage: FC<CusImageProps> = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        className={styles.image}
      />
    </div>
  );
};

export default CusImage;
