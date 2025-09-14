# Levanta todo el docker
docker compose up -d

# Si todavía muere al levantar, prueba hacer limpieza completa:
docker-compose down -v
docker system prune -af --volumes
docker-compose up --build -d

# Reconstruye desde cero:
docker-compose down -v
docker-compose build --no-cache
docker-compose up


# Inicializa Prisma

Ejecuta en la carpeta de tu backend (donde está schema.prisma):
npx prisma migrate dev --name init

# Verifica
Puedes revisar la DB con pgAdmin o directamente:
# Entra a la carpeta chatgetrol-backend y ejecuta:
npx prisma studio