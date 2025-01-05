import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { College } from './entities/college.entity';
import { City } from './entities/City.entity';
import { State } from './entities/State.entity';
import { CollegePlacement } from './entities/college-placement.entity';
import { CollegeWiseCourse } from './entities/college-wise-course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // PostgreSQL server address
      port: 5432,        // PostgreSQL port (default is 5432)
      username: 'postgres', // your PostgreSQL username
      password: 'Sachin@123', // your PostgreSQL password
      database: 'college', // your database name
      entities: [College,City,State,CollegePlacement,CollegeWiseCourse], // List your entities here
      synchronize: true, // Synchronize entities with database (be careful with this in production)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
