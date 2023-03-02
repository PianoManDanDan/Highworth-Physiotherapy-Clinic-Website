export type Person = {
  /** Name of the person */
  name: string,
  /** src and alt text details for the image to use */
  image: {
    src: string,
    altText: string,
  },
  /** Array of paragraphs to be used as a biography */
  bio: string[],
  /** Name of qualification, if applicable */
  qualification?: string,
  /** Year qualified, if applicable */
  yearQualified?: number,
  /** Array of specialities, if applicable */
  specialities?: string[],
}
