import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  limit?: number;

  @ApiProperty()
  @IsOptional()
  @Min(0)
  offset?: number;
}
