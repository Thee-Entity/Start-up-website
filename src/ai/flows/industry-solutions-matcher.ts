'use server';

/**
 * @fileOverview Provides relevant solutions based on the user's industry.
 *
 * - industrySolutionsMatcher - A function that matches solutions to a given industry.
 * - IndustrySolutionsInput - The input type for the industrySolutionsMatcher function.
 * - IndustrySolutionsOutput - The return type for the industrySolutionsMatcher function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IndustrySolutionsInputSchema = z.object({
  industry: z.string().describe('The industry of the user.'),
});

export type IndustrySolutionsInput = z.infer<typeof IndustrySolutionsInputSchema>;

const IndustrySolutionsOutputSchema = z.object({
  solutions: z.string().describe('A sentence explaining the best services from Thee Entity for this company based on their industry.'),
});

export type IndustrySolutionsOutput = z.infer<typeof IndustrySolutionsOutputSchema>;

export async function industrySolutionsMatcher(input: IndustrySolutionsInput): Promise<IndustrySolutionsOutput> {
  return industrySolutionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'industrySolutionsPrompt',
  input: {schema: IndustrySolutionsInputSchema},
  output: {schema: IndustrySolutionsOutputSchema},
  prompt: `You are an expert in matching industries to the best solutions offered by Thee Entity.

  Given the industry of the user, explain in one sentence the best services from Thee Entity for this company.

  Industry: {{{industry}}}
  `,
});

const industrySolutionsFlow = ai.defineFlow(
  {
    name: 'industrySolutionsFlow',
    inputSchema: IndustrySolutionsInputSchema,
    outputSchema: IndustrySolutionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
