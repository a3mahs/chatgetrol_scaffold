import { Expose } from 'class-transformer';

export class EmpresaResponseDto {
  @Expose()
  id: number;

  @Expose()
  nombre: string;

  @Expose()
  nit: string;

  @Expose()
  direccion?: string | null; // <--- corregido

  @Expose()
  telefono?: string | null; // <--- corregido

  @Expose()
  email: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}