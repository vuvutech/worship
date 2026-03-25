import {
    betterAuth
} from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin, multiSession } from "better-auth/plugins"
import { resend } from "./email/resend";
import { reactResetPasswordEmail } from "./email/rest-password";
import VerifyEmail from "./email/VerifyEmail";
import { render } from "@react-email/render";



export const auth = betterAuth({
    appName: "TheNonStop Series",
    database: prismaAdapter(prisma, {
        provider: "mongodb",
    }),
    additionalFields: {
        user: {
            role: {
                type: "string",
                default: "user",
                input:false
            },
        },
    },
    advanced: {
    database: {
      generateId: false,  
      experimental: { joins: true },
    },
    databaseHooks: {
        user: {
        create: {
            before: async (user: any) => {
            return {
                data: {
                ...user,
                role: "user", 
                },
            };
            },
            after: async (user: any) => {
            //  
            },
        },
        },
    },
    },
    trustedOrigins: [process.env.NEXT_PUBLIC_APP_URL!, "http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
     account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "facebook", "microsoft", "linkedin", "apple"],
      updateAccountOnSignIn: true,
    },
  },
  emailVerification: {
    enabled: true,
    requireEmailVerification: true,
    async sendVerificationEmail({ user, url }) {
        console.log("Sending verification email to:", user.email);
        console.log("Verification URL:", url);
        try {
            const res = await resend.emails.send({
                from: "no-reply@thenonstop.org",
                to: user.email,
                subject: "Verify your email address",
                react: VerifyEmail({
                    username: user.email,
                    verifyLink: url,
                }),
            });
            console.log("Resend response:", res);
        } catch (error) {
            console.error("Failed to send verification email:", error);
        }
    },
  },
    emailAndPassword: {
        autoSignIn: false,
        enabled: true,
        requireEmailVerification: true,
        minPasswordLength: 8,
        async sendResetPassword({ user, url }) {
            try {
                const res = await resend.emails.send({
                    from: "no-reply@thenonstop.org",
                    to: user.email,
                    subject: "Reset your TheNonStop password",
                    react: reactResetPasswordEmail({
                        username: user.email,
                        resetLink: url,
                    }),
                });
                console.log("Resend response (Password Reset):", res);
            } catch (error) {
                console.error("Failed to send reset password email:", error);
            }
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        },
        microsoft: {
            clientId: process.env.MICROSOFT_CLIENT_ID!,
            clientSecret: process.env.MICROSOFT_CLIENT_SECRET!
        },
        apple: {
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SECRET!
        },
        linkedin: {
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!
        }
    },
    plugins: [
        admin(),
        multiSession(),
        nextCookies(),
    ],
    /** if no database is provided, the user data will be stored in memory.
     * Make sure to provide a database to persist user data **/
});