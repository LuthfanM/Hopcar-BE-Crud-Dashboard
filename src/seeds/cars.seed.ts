
import { Car } from '../cars/entities/car.entity';
import { DataSource } from 'typeorm';
import CarsData from '../mock/CarsData.json';
import { v4 as uuidv4 } from 'uuid';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Car],
  synchronize: true,
});

const cars: Partial<Car>[] = CarsData.map((car) => ({
  ...car,
  id: uuidv4(),
}));

AppDataSource.initialize()
  .then(async () => {
    console.log('Initialize Data...');
    await AppDataSource.getRepository(Car).save(cars);
    console.log('Seed Data...');
    await AppDataSource.destroy();
  })
  .catch((err) => {
    console.error('Error:', err);
  });
