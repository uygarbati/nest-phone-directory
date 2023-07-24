import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreatePhoneDirectoryDto } from './dto/create-phoneDirectory.dto';
import { PhoneDirectoryService } from './phoneDirectory.service';
import { PhoneDirectory } from './interfaces/phoneDirectory.interface';

@Controller('phoneDirectory')
export class PhoneDirectoryController {
    constructor(private readonly phoneDirectoryService: PhoneDirectoryService) { }

    @Post()
    async create(@Body() createCatDto: CreatePhoneDirectoryDto) {
        return this.phoneDirectoryService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<PhoneDirectory[]> {
        return this.phoneDirectoryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.phoneDirectoryService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.phoneDirectoryService.remove(id)
    }
}