import { Controller, Get, Param, Query } from '@nestjs/common';
import { PuppyService } from './puppy.service';
import generateMockPuppies from './puppy.mock-data';

@Controller('api/v1/puppy')
export class PuppyController {
  constructor(private readonly puppyService: PuppyService) {
    (async () => {
      puppyService.puppies = await generateMockPuppies(30);
    })();
  }

  @Get('/all')
  getAllPuppies(@Query('search') search: string) {
    return this.puppyService.getAllPuppies(search);
  }

  @Get('/:id')
  getPuppyById(@Param('id') id: number) {
    return this.puppyService.getPuppyById(id);
  }
}
