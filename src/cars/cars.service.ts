import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  findOne(id: string): Promise<Car> {
    return this.carsRepository.findOneBy({ id });
  }

  create(car: Car): Promise<Car> {
    return this.carsRepository.save(car);
  }

  async update(id: string, car: Car): Promise<Car> {
    await this.carsRepository.update(id, car);
    return this.carsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.carsRepository.delete(id);
  }
}
