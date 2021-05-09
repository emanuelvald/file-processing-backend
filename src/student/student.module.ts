import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { StudentController } from './student.controller';
import { StudentModel } from './student.model';
import { StudentService } from './student.service';

@Module({
  imports: [SequelizeModule.forFeature([StudentModel])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
