import fastify from 'fastify';
import { double2 } from 'helpers';
const server = fastify({ logger: true });
server.get('/:num', async (req, reply) => {
    const a = {
        message: {
            text: 'hello'
        }
    };
    return { multiplication: double2(req.params.num) + a.message.text };
});
const start = async () => {
    try {
        await server.listen({ port: 5000 });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
