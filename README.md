This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Step A: Getting Started

First, open up a terminal and go to the root directory of the application (where package.json is). Run 'npm install' to install all necessary node packages.


## Step B: Setting up Login Functionality

# JWT authentication is something I would plan to implement in the future, for reference

1. Go to firebase.google.com.
2. Click "Go to Console".
3. Add project + and enter in a project name.
4. Once it says your project is ready, click "Continue" and you'll be redirected to the dashboard for Firebase.
5. On the left sidebar, click "Build" --> "Authentication".
6. Click "Get Started".
7. Click "Google" tab and then click Enable.
8. Enter in your email in the "Support email for project" input field.
9. In your root directory, create a file called ".env.local" and in it add a line for "GOOGLE_CLIENT_ID=" and "GOOGLE_CLIENT_SECRET=".
10. Return to Firebase and click the Save button to save the provider.
10.5. Next, click on the edit icon for the Google row tab on the right and then click on "Web SDK configuration".
11. Copy the Web client ID and paste it after "GOOGLE_CLIENT_ID=" in your .env.local file.
12. Copy the Web client secret and paste it after "GOOGLE_CLIENT_SECRET=" in your .env.local file.
13. On the 3rd and 4th lines in your .env.local file, add "NEXTAUTH_URL=http://localhost:3000" and then "NEXTAUTH_SECRET=" (add in your own secret value after the equal sign).
14. Go to console.cloud.google.com.
15. On the top, click the drop-down menu and under "All" click on your project name.
16. In the top left corner of the screen, click on the navigation menu, then click on "API & Services" --> "Credentials".
17. Click on the Web client link under "OAuth 2.0 Client IDs".
18. Under "Authorised JavaScript origins", add the URI "http://localhost:3000".
19. Under "Authorised redirect URIs", add the URI "http://localhost:3000/api/auth/callback/google".


## Step C: Run Server

Next, in the project directory, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!