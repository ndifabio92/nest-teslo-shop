/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsArray()
  @IsString({ each: true })
  sizes: string[];

  @IsIn(['men', 'women', 'kid', 'unisex'])
  @IsString()
  gender: string;
}
