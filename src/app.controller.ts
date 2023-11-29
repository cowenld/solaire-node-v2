import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

// this is the control hub, this get should be the websocket opening
// I should open a connection after the movie is started ie - prisoner of azkhban
// Then a websocket channel should be open for the user, or just generally subbed to the channel anyway

@Controller()
@ApiTags('solaire')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/pause')
  pauseNetflix() {
    this.appService.pauseNetflix();
    return { message: 'Pausing netflix' };
  }
}
