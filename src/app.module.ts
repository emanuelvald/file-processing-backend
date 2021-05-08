import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { SimulationModule } from './simulation/simulation.module';

@Module({
  imports: [StudentModule, SimulationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
