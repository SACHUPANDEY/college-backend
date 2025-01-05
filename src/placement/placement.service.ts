// src/placement/placement.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from '../entities/college-placement.entity';

@Injectable()
export class PlacementService {
  constructor(
    @InjectRepository(CollegePlacement)
    private readonly placementRepository: Repository<CollegePlacement>,
  ) {}

  async getAvgPlacement(college_id: string) {
    return this.placementRepository
      .createQueryBuilder('placement')
      .select('placement.year')
      .addSelect('AVG(placement.highest_placement)', 'avg_highest_placement')
      .addSelect('AVG(placement.average_placement)', 'avg_average_placement')
      .addSelect('AVG(placement.median_placement)', 'avg_median_placement')
      .addSelect('AVG(placement.placement_rate)', 'avg_placement_rate')
      .where('placement.college_id = :college_id', { college_id })
      .andWhere('placement.highest_placement IS NOT NULL')
      .andWhere('placement.highest_placement != 0')
      .groupBy('placement.year')
      .getRawMany();
  }

  async getPlacementSection(college_id: string) {
    const data = await this.placementRepository
      .createQueryBuilder('placement')
      .where('placement.college_id = :college_id', { college_id })
      .andWhere('placement.highest_placement IS NOT NULL')
      .andWhere('placement.highest_placement != 0')
      .getMany();

    // Calculate placement_trend for each record
    for (let i = 1; i < data.length; i++) {
      const previous = data[i - 1];
      const current = data[i];

      
    }

    return data;
  }
}
