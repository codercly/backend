import fastify from 'fastify'
import { prisma } from './lib/prisma'
import { createTrip } from './routes/create-trip'
import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod'

const app = fastify()

// app.get('/cadastrar', async () => {
//   await prisma.trip.create({
//     data: {
//       destination: 'Floripa',
//       starts_at: new Date(),
//       ends_at: new Date(),
//     },
//   })

//   return 'Registro feito com sucesso'
// })

// app.get('/listar', async () => {
//   const trips = await prisma.trip.findMany()

//   return trips
// })

// app.get('/teste', () => {
//   return 'hello my ass'
// })

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);


app.register(createTrip)

app.listen({ port: 3333 }).then(() => {
  console.log('server running!')
})
