import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/cr7')
  getInfoCR7(): string {
    return 'hello CR7';
  }

  @Get('/api/m10')
  getInfoM10(): string {
    return 'hello messi';
  }
}
