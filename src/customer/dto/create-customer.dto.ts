import { IsString, IsUUID, IsOptional, IsUrl } from 'class-validator';

export class CreateCustomerDto {
  @IsUUID()
  id: string;

  @IsString()
  customerName: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsString()
  businessType: string;

  @IsString()
  businessName: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  websiteUrl: string;

  @IsString()
  googleReviewUrl: string;
}
