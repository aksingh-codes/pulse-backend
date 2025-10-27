import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class AppController {
  @Get()
  test() {
    return { ok: true };
  }
}
