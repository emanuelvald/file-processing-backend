import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'students' })
export class StudentModel extends Model<StudentModel> {
  @Column({ field: 'id', primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ field: 'id_card', type: DataType.DOUBLE })
  idCard: string;

  @Column({
    field: 'student_code',
    type: DataType.STRING(25),
    allowNull: false,
  })
  studentCode: string;

  @Column({ field: 'career', type: DataType.STRING(255) })
  career: string;

  @Column({ field: 'cau_code', type: DataType.STRING(25) }) //, allowNull: false
  cauCode: string;

  @Column({ field: 'cau_segment', type: DataType.STRING(1) }) //, allowNull: false
  cauSegment: string;

  @Column({ field: 'cau_name', type: DataType.STRING(255) })
  cauName: string;

  @Column({ field: 'modality', type: DataType.STRING(50) })
  modality: string;

  @Column({ field: 'shift', type: DataType.STRING(50) })
  shift: string;

  @Column({ field: 'level', type: DataType.STRING(25) })
  level: string;

  @Column({ field: 'ri_period', type: DataType.STRING(25) })
  riPeriod: string;

  @Column({ field: 'list_price_mm', type: DataType.DOUBLE })
  listPriceMm: number;

  @Column({ field: 'list_price_ab', type: DataType.DOUBLE })
  listPriceAb: number;

  @Column({ field: 'list_price_summer_d', type: DataType.DOUBLE })
  listPriceSummerD: number;

  @Column({ field: 'diff_list_price_grade', type: DataType.DOUBLE })
  diffListPriceGrade: number;

  @Column({ field: 'current_prom_mm', type: DataType.DOUBLE })
  currentPromMm: number;

  @Column({ field: 'ticket_a_prom', type: DataType.DOUBLE })
  ticketAProm: number;

  @Column({ field: 'ticket_b_prom', type: DataType.DOUBLE })
  ticketBProm: number;

  @Column({ field: 'ticket_d_prom', type: DataType.DOUBLE })
  ticketDProm: number;

  @Column({ field: 'prom_start_date', type: DataType.DATE })
  promStartDate: string;

  @Column({ field: 'prom_end_date', type: DataType.DATE })
  promEndDate: string;

  @Column({ field: 'list_price_1_course', type: DataType.DOUBLE })
  listPrice1Course: number;

  @Column({ field: 'list_price_3_course', type: DataType.DOUBLE })
  listPrice3Course: number;

  @Column({ field: 'list_price_4_course', type: DataType.DOUBLE })
  listPrice4Course: number;

  @Column({ field: 'list_price_6_course_p', type: DataType.DOUBLE })
  listPrice6CourseP: number;

  @Column({ field: 'list_price_summer_course_p', type: DataType.DOUBLE })
  listPriceSummerCourseP: number;

  @Column({ field: 'additional_prom_d', type: DataType.DOUBLE })
  additionalPromD: number;

  @Column({ field: 'p_fee_prom', type: DataType.DOUBLE })
  pFeeProm: number;

  @Column({ field: 'additional_prom_p', type: DataType.DOUBLE })
  additionalPromP: number;
}
