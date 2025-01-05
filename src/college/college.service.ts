// src/college/college.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from '../entities/college.entity';
@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
  ) {}

  async getCollegesByCityAndState(city: string, state: string) {
    return this.collegeRepository
      .createQueryBuilder('college')
      .leftJoinAndSelect('college.city', 'city')
      .leftJoinAndSelect('college.state', 'state')
      .where('city.name = :city', { city })
      .andWhere('state.name = :state', { state })
      .getMany();
  }
}
