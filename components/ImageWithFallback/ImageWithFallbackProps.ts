import { ImageProps, StaticImageData } from "next/image";

export type ImageWithFallbackProps = ImageProps & {
  /** src for fallback image */
  fallbackSrc: string | StaticImageData;
};
