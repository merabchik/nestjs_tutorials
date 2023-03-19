import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// /home/page

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('page')
  public getPage(): any {
    return {
      title: 'Home Page',
      content: 'This is the home page'
    };
  }
}
