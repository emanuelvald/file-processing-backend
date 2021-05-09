import { response } from 'express';
import { Sequelize } from 'sequelize-typescript';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { StudentDto } from './student.dto';
import { StudentModel } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(StudentModel)
    private studentModel: typeof StudentModel,
  ) {}

  create(createStudentDto: StudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: StudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
