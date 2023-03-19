import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  public getHello(): any {
    return {
      hello: 'world'
    };
  }

  public getHelloWorld(): string {
    return 'Hello World!';
  }

}
