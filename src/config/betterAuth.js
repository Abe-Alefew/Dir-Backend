import { betterAuth} from 'better-auth';
import {mongoAdapter} from 'better-auth/adapters/mongo';

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    basePath:'/api/auth',
    database: mongoAdapter({
        
    }),
    socialProviders:{
        github:{
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,
        },
    },
    emailAndPassword: {
        enabled: false,
    }

});