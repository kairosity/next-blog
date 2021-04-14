// Auto redirect on first render from '/' to '/blog'

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/blog',
                permanent: true,
            }
        ]
    },
}
