import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true,
})

export class Authentication{
    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const AuthenticationSchema = SchemaFactory.createForClass(Authentication);