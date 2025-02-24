import { z } from 'zod';


export const registrationSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  email: z.string().email({ message: 'Invalid email address' }),  
  phone: z.string().min(8, { message: 'Phone number must be 8 digits only' }),
  password: z.string().min(1, { message: 'Password is required' }), 
  
})    
