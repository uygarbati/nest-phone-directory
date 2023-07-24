import { Module } from '@nestjs/common';
import { PhoneDirectoryModule } from './phoneDirectory/phoneDirectory.module';

@Module({
  imports: [PhoneDirectoryModule],
})
export class AppModule { }