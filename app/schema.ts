import z from 'zod';

export const personSchema = z.object({
    name: z.string().describe('name of the person'),
    gender: z.enum(['male', 'female']),
    age: z.int().min(5).max(27)
});

export type Person = z.infer<typeof personSchema>;