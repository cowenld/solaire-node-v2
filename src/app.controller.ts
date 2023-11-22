import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('solaire')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  pauseNetflix() {
    this.appService.pauseNetflix();
    return { message: 'Pausing netflix' };
  }
}
