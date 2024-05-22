import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const someService = app.get(AppService);
  const collection_1 = [1, 2, 3];
  const collection_2 = [13, 12, 11];
  const collection_3 = [1, 2, 3];
  const ans = someService.merge(collection_1, collection_2, collection_3);
  console.log(ans);
  await app.close();
}
bootstrap();
