import fastify from 'fastify'
import formBody from '@fastify/formbody';
import indexRoutes from './routes/index'


const server = fastify({logger: true});
server.register(formBody)
server.register(indexRoutes);


server.listen({port: 3010, host: '0.0.0.0'}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
