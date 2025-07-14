import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: { url: string }, res: any, next: () => void) {
    console.log(`[${new Date().toISOString()}] | [Start log 3 ] ->`, req.url);
    next();
    console.log(`[${new Date().toISOString()}] | [Start end 4 ] ->`, req.url);
  }
}
