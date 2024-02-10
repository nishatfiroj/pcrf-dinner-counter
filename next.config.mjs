/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    API_KEY: process.env.API_KEY,
    SHEET_ID: process.env.SHEET_ID,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    PRIVATE_KEY_ID: process.env.PRIVATE_KEY_ID,
  },
}

export default nextConfig
