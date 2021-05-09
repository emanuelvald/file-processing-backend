import { Injectable } from '@nestjs/common';

import { SimulationDto } from './simulation.dto';

@Injectable()
export class SimulationService {
  create(createSimulationDto: SimulationDto) {
    return 'This action adds a new simulation';
  }

  findAll() {
    return `This action returns all simulation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} simulation`;
  }

  update(id: number, updateSimulationDto: SimulationDto) {
    return `This action updates a #${id} simulation`;
  }

  remove(id: number) {
    return `This action removes a #${id} simulation`;
  }
}
