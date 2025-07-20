import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { Person } from 'src/person/entities/person.entity';

@Injectable()
export class CustomerService {

  constructor(
   @InjectRepository (Customer)
   private readonly customerRepository: Repository<Customer>,
   
   @InjectRepository (Person)
   private readonly personRepository: Repository<Person>

  ) {}


  async create(createCustomerDto: CreateCustomerDto) {
    const person = await this.personRepository.save(createCustomerDto.person);
    createCustomerDto.person = person;  

    return this.customerRepository.save(createCustomerDto);
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }

  async findAllByName(name: string): Promise<Customer[]> {
    const customers: Customer[] = await this.customerRepository.find({
      where: {
        person: {
          name: ILike(`%${name}%`), // Usa ILike para busca case-insensitive 
        }
      },
      relations: ['person'], // Inclui a relação com o produto
    });

    return customers;
  }

}
