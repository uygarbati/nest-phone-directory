import { Document } from 'mongoose';

export interface PhoneDirectory extends Document {
    readonly name: string;
    readonly phone: number;
}