import { ImageWithFallbackProps } from "components/ImageWithFallback";
import { ImageProps } from "next/image";

export type Person = {
  /** Name of the person */
  name: string,
  /** Details for the person's profile picture */
  image: ImageProps | ImageWithFallbackProps,
  /** Array of paragraphs to be used as a biography */
  bio: string[],
  /** Name of qualification, if applicable */
  qualification?: string,
  /** Year qualified, if applicable */
  yearQualified?: number,
  /** Array of specialities, if applicable */
  specialities?: string[],
}
