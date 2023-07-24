import { Mongoose } from 'mongoose';
import { PhoneDirectorySchema } from './schemas/phoneDirectory.schema';

export const phoneDirectoryProviders = [
    {
        provide: 'PHONE_DIRECTORY_MODEL',
        useFactory: (mongoose: Mongoose) => mongoose.model('PhoneDirectory', PhoneDirectorySchema),
        inject: ['DATABASE_CONNECTION'],
    },
];