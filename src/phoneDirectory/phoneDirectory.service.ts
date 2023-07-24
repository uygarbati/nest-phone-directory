import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePhoneDirectoryDto } from './dto/create-phoneDirectory.dto';
import { PhoneDirectory } from './interfaces/phoneDirectory.interface';

@Injectable()
export class PhoneDirectoryService {
    constructor(@Inject('PHONE_DIRECTORY_MODEL') private readonly phoneDirectoryModel: Model<PhoneDirectory>) { }

    async create(createPhoneDirectoryDto: CreatePhoneDirectoryDto): Promise<PhoneDirectory> {
        const createdCat = this.phoneDirectoryModel.create(createPhoneDirectoryDto);
        return createdCat;
    }

    async findAll(): Promise<PhoneDirectory[]> {
        return this.phoneDirectoryModel.find().exec();
    }

    async findOne(id: string): Promise<PhoneDirectory> {
        return this.phoneDirectoryModel.findById(id);
    }

    async remove(id: string) {
        return this.phoneDirectoryModel.deleteOne({ _id: id }).exec();
    }
}