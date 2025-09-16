import { Module } from '@nestjs/common';
import { EmpresaModule } from './empresa/empresa.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,   // 🔹 Servicio Prisma para toda la app
    EmpresaModule,  // 🔹 CRUD de Empresas
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}