import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  registrationNumber: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  notes: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
