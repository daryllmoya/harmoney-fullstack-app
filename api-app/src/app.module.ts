import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuppyController } from './puppy/puppy.controller';
import { PuppyService } from './puppy/puppy.service';

@Module({
  imports: [],
  controllers: [AppController, PuppyController],
  providers: [AppService, PuppyService],
})
export class AppModule {}
