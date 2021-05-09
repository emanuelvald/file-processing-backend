import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SimulationModule } from './simulation/simulation.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule, SimulationModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
