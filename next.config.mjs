/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    API_KEY: process.env.API_KEY,
    SHEET_ID: process.env.SHEET_ID,
    CLIENT_SERVICE_ACCOUNT: process.env.CLIENT_SERVICE_ACCOUNT,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
}

export default nextConfig
