import { z } from 'zod'

export const validationAddMedicineSchema = z.object({
	photo: z.any().optional(),
	name: z.string().min(1, { message: 'Name is required' }),
	price: z.number().min(1, { message: 'Price is required' }),
	category: z.string().min(1, { message: 'Category is required' }),
	description: z.string().optional(),
})
