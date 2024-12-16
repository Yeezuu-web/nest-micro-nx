import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ClientConfigService {
  constructor(private readonly config: ConfigService) {}

  getAuthClientPort(): number {
    return this.config.get('AUTH_CLIENT_PORT');
  }

  getUserClientPort(): number {
    return this.config.get('USER_CLIENT_PORT');
  }

  get authClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: this.getAuthClientPort(),
      },
    };
  }

  get userClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: this.getUserClientPort(),
      },
    };
  }
}
