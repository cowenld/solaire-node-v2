import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppService {
  @WebSocketServer()
  server: Server;

  pauseNetflix() {
    this.server.emit('pauseNetflix');
  }
}
