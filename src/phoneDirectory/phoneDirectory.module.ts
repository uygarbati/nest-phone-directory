import { Module } from '@nestjs/common';
import { PhoneDirectoryController } from './phoneDirectory.controller';
import { PhoneDirectoryService } from './phoneDirectory.service';
import { phoneDirectoryProviders } from './phoneDirectory.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PhoneDirectoryController],
    providers: [PhoneDirectoryService, ...phoneDirectoryProviders],
})
export class PhoneDirectoryModule { }