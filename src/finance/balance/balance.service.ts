import { Injectable } from '@nestjs/common';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';
import { Balance } from './entities/balance.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class BalanceService {

  constructor(
    @InjectRepository(Balance)
    private balanceRepository: Repository<Balance>,
  ) {}
  

  async create(createBalanceDto: CreateBalanceDto) {
    return await this.balanceRepository.save(createBalanceDto);
  }

  findAll() {
    return `This action returns all balance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} balance`;
  }

  async findByYear(year: number) : Promise<Balance | null> {

    const yearNumber : Balance | null = await this.balanceRepository.findOne({
      where: {
        year: year,
      },
    });

    if (yearNumber != null) {
          return yearNumber;
    }

    const createBalanceDto: CreateBalanceDto = {
      year: new Date().getFullYear(),
      totalSpent: 0,
      totalInvested: 0,
      profit: 0,
    };
    return await this.create(createBalanceDto);
  }

  update(id: number, updateBalanceDto: UpdateBalanceDto) {
    return this.balanceRepository.update(id, updateBalanceDto);
  }

  remove(id: number) {
    return `This action removes a #${id} balance`;
  }
}
