/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    experimental: {
        appDir: true,
    },
    env: {
        GOOGLE_CLIENT_ID: "474833067812-nk3hnm7ddtkn93ici33hhikh7kdom2ni.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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"
    }
}

module.exports = nextConfig
