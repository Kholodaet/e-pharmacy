import { z } from 'zod'

export const schemaEditForm = z.object({
	shop: z.string().optional(),
	name: z.string().optional(),
	email: z.string().optional(),
	phone: z.string().optional(),
	address: z.string().optional(),
	city: z.string().optional(),
	postal: z.string().optional(),
	delivery: z.enum(['yes', 'no']).optional(),
	password: z.string().optional(),
})
