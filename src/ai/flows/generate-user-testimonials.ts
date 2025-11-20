// This file is responsible for generating user testimonials using Genkit.
// It defines the input and output schemas, the prompt, and the flow for generating the testimonials.
// It exports the generateUserTestimonials function, the GenerateUserTestimonialsInput type, and the GenerateUserTestimonialsOutput type.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateUserTestimonialsInputSchema = z.object({
  productName: z.string().describe('The name of the product for which to generate testimonials.'),
  numberOfTestimonials: z
    .number()
    .min(1)
    .max(5)
    .default(3)
    .describe('The number of testimonials to generate.'),
});

export type GenerateUserTestimonialsInput = z.infer<typeof GenerateUserTestimonialsInputSchema>;

const GenerateUserTestimonialsOutputSchema = z.object({
  testimonials: z.array(
    z.string().describe('A testimonial from a user of the product.')
  ).describe('The generated testimonials.'),
});

export type GenerateUserTestimonialsOutput = z.infer<typeof GenerateUserTestimonialsOutputSchema>;

export async function generateUserTestimonials(
  input: GenerateUserTestimonialsInput
): Promise<GenerateUserTestimonialsOutput> {
  return generateUserTestimonialsFlow(input);
}

const generateUserTestimonialsPrompt = ai.definePrompt({
  name: 'generateUserTestimonialsPrompt',
  input: {schema: GenerateUserTestimonialsInputSchema},
  output: {schema: GenerateUserTestimonialsOutputSchema},
  prompt: `You are a marketing expert tasked with generating user testimonials for {{productName}}.
  Generate {{numberOfTestimonials}} testimonials from different users, focusing on relief, usability, and life improvement.
  Make the testimonials sound realistic and relatable.
  Each testimonial should be a single paragraph.
  Format:
  - Testimonial 1
  - Testimonial 2
  ...`,
});

const generateUserTestimonialsFlow = ai.defineFlow(
  {
    name: 'generateUserTestimonialsFlow',
    inputSchema: GenerateUserTestimonialsInputSchema,
    outputSchema: GenerateUserTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await generateUserTestimonialsPrompt(input);
    return output!;
  }
);
