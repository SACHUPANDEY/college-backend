import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { College } from '../entities/college.entity';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College)
  @JoinColumn({ name: 'college_id' })
  college: College;

  @Column()
  year: number;

  @Column()
  highest_placement: number;

  @Column()
  average_placement: number;

  @Column()
  median_placement: number;

  @Column()
  placement_rate: number;
}
