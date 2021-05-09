import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { StudentModel } from '../student/student.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'file_processing',
      models: [StudentModel],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
