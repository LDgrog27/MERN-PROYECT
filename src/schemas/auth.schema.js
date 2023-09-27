import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        required_error: 'Email is invalid'
    }),
    password: z.string({
        required_error: 'Password is required',
        message: 'Password must be 6 characters at least'
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).email({
        required_error: 'Email is invalid',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'Password must be 6 characters at least',
    })
})