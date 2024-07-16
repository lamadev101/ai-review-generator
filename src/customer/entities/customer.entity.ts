import { IsUUID } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  customerName: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column({ nullable: true })
  address: string;

  @Column({})
  businessType: string;
  @Column()
  businessName: string;
  @Column({ nullable: true })
  websiteUrl: string;
  @Column()
  googleReviewUrl: string;

}
