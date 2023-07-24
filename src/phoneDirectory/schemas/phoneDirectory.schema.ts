import * as mongoose from 'mongoose';

export const PhoneDirectorySchema = new mongoose.Schema({
    name: String,
    phone: String,
});