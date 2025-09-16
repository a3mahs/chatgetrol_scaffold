import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear empresas
  const empresa1 = await prisma.empresa.upsert({
    where: { email: "empresa1@test.com" },
    update: {},
    create: {
      nombre: "Empresa Uno",
      direccion: "Calle 123",
      telefono: "3001234567",
      email: "empresa1@test.com",
      password: "123456",
    },
  });

  const empresa2 = await prisma.empresa.upsert({
    where: { email: "empresa2@test.com" },
    update: {},
    create: {
      nombre: "Empresa Dos",
      direccion: "Carrera 45 #10-20",
      telefono: "3019876543",
      email: "empresa2@test.com",
      password: "abcdef",
    },
  });

  // Crear agentes
  await prisma.agente.upsert({
    where: { email: "agente1@test.com" },
    update: {},
    create: {
      nombre: "Agente Uno",
      email: "agente1@test.com",
      password: "123456",
      role: "ADMIN",
      empresaId: empresa1.id,
    },
  });

  await prisma.agente.upsert({
    where: { email: "agente2@test.com" },
    update: {},
    create: {
      nombre: "Agente Dos",
      email: "agente2@test.com",
      password: "654321",
      role: "USER",
      empresaId: empresa2.id,
    },
  });

  console.log("✅ Seed ejecutado con éxito");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });