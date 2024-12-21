import {NestFactory} from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // 在底层使用express
    await app.listen(3000)
}
bootstrap()