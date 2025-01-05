import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
