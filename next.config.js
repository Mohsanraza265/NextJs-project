/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            
            {
                source:'/admin/:adminId',
                destination: '/',
                permanent:false
            },
            {
                source:'/admin',
                destination: '/',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
