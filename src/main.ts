import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const someService = app.get(AppService);
  const ans = someService.merge([], [], []);
  console.log(ans);
  await app.close();
}
bootstrap();
