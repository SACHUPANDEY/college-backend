import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

('states')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
