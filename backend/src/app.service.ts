import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const users = await prisma.user.findMany();
    return `Usuarios en DB: ${users.length}`;
  }
}