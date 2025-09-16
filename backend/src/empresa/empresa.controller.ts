import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { EmpresaResponseDto } from './dto/empresa-response.dto';

@Controller('empresas')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  async findAll(): Promise<EmpresaResponseDto[]> {
    return this.empresaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<EmpresaResponseDto> {
    return this.empresaService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateEmpresaDto): Promise<EmpresaResponseDto> {
    return this.empresaService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEmpresaDto,
  ): Promise<EmpresaResponseDto> {
    return this.empresaService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<EmpresaResponseDto> {
    return this.empresaService.remove(id);
  }
}