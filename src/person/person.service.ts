import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {

  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

 async create(createPersonDto: CreatePersonDto) {
    createPersonDto.createdAt = new Date();
    return await this.personRepository.save(createPersonDto);
  }

  findAll() {
    return this.personRepository.find();
  }

  findOne(id: number) {
    return this.personRepository.findOneBy({ id });
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.personRepository.update(id, updatePersonDto);
  }

  remove(id: number) {
    return this.personRepository.delete(id);
  }
}
