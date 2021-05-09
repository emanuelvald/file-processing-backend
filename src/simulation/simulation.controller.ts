import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { SimulationDto } from './simulation.dto';
import { SimulationService } from './simulation.service';

@Controller('simulation')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) {}

  @Post()
  create(@Body() createSimulationDto: SimulationDto) {
    return this.simulationService.create(createSimulationDto);
  }

  @Get()
  findAll() {
    return this.simulationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.simulationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSimulationDto: SimulationDto) {
    return this.simulationService.update(+id, updateSimulationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.simulationService.remove(+id);
  }
}
