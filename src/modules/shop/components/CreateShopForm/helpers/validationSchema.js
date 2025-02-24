import { z } from 'zod'

export const schemaAddForm = z.object({
	shop: z.string().min(1, { message: 'Shop name is required' }),
	name: z.string().min(1, { message: 'Owner name is required' }),
	email: z.string().email({ message: 'Invalid email address' }),
	phone: z.string().min(8, { message: 'Phone number must be 8 digits only' }),
	address: z.string().min(1, { message: 'Address is required' }),
	city: z.string().min(1, { message: 'City is required' }),
	postal: z.string().min(1, { message: 'Postal code is required' }),
	delivery: z.enum(['yes', 'no'], { message: 'Delivery selection is required' }),
	password: z.string().min(1, { message: 'Password is required' }),
})
