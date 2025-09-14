import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const empresas = await prisma.company.findMany();
    const agentes = await prisma.agent.findMany();
    return `Empresas en DB: ${empresas.length} - Agentes en DB: ${agentes.length}`;
  }
}