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
    env: {
        mongodb_uri: 'mongodb+srv://henri:iTDD2952vnkhZMbS@cluster0.todca.mongodb.net/next-blog?retryWrites=true&w=majority',
    }
}

// Changes 2