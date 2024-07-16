import { IsUUID } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
 @PrimaryGeneratedColumn('uuid')
 @IsUUID()
 id:string;
 
 @Column()
  customerName:string;
}
