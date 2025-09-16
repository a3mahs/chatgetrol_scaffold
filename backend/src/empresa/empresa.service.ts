import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { EmpresaResponseDto } from './dto/empresa-response.dto';

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<EmpresaResponseDto[]> {
    return this.prisma.empresa.findMany();
  }

  async findOne(id: number): Promise<EmpresaResponseDto> {
    const empresa = await this.prisma.empresa.findUnique({ where: { id } });
    if (!empresa) {
      throw new NotFoundException(`Empresa con ID ${id} no encontrada`);
    }
    return empresa;
  }

  async create(data: CreateEmpresaDto): Promise<EmpresaResponseDto> {
    return this.prisma.empresa.create({ data });
  }

  async update(id: number, data: UpdateEmpresaDto): Promise<EmpresaResponseDto> {
    await this.findOne(id); // lanza excepción si no existe
    return this.prisma.empresa.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<EmpresaResponseDto> {
    await this.findOne(id); // lanza excepción si no existe
    return this.prisma.empresa.delete({ where: { id } });
  }
}