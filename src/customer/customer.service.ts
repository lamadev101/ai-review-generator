import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(@InjectRepository(Customer) private customerRepository: Repository<Customer>) { }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: string): Promise<Customer> {
    return this.customerRepository.findOneBy({ id });
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<String> {
    try {
      const customer = this.customerRepository.create(createCustomerDto);
      await this.customerRepository.save(customer)
      return "Customer created successfully!!"
    } catch (error) {
      return "Something went Wrong"
    }
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<String> {
    try {
      const customer = await this.customerRepository.findOneBy({ id })
      if (!customer)
        throw new NotFoundException(`Customer not found by Id ${id}`)
      Object.assign(customer, updateCustomerDto)
      await this.customerRepository.save(customer)
      return "Customer updated successfully!!"
    } catch (error) {
      return "Something went wrong!!"
    }
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
