/** @type {import('next').NextConfig} */
const nextConfig = {
    // This property is specifically used to customize how images are handled in Next.js.
    images: {
        // Defining external domains that are allowed to host images.
        // In Next.js, if you want to use images from external domains (other than your own domain),
        // you need to explicitly list those domains in the configuration.
        // Here, images from 'github.com' and 'lh3.googleusercontent.com' are allowed.
        domains: ["github.com", "lh3.googleusercontent.com"], 
    }
}

module.exports = nextConfig