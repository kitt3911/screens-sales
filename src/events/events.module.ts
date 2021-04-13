import { Module } from '@nestjs/common';
import { EventsCrudService, EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entity/event.entity';

@Module({
  providers: [EventsService, EventsCrudService],
  controllers: [EventsController],
  imports: [TypeOrmModule.forFeature([Event])],
  exports: [EventsService],
})
export class EventsModule {}
