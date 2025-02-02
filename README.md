# Next.js 15 - Client-Side Environment Variable Access

This repository demonstrates a common issue in Next.js 15 applications where accessing environment variables within client-side components leads to runtime errors.  The 'process' object, which is used to access environment variables in Node.js, is undefined in the browser environment.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Observe the runtime error in your browser's console.

## Solution

The solution involves using the `next/config` module to access environment variables during the build process, or other methods to provide the information from the server side.  See the `aboutSolution.js` file for a corrected example.