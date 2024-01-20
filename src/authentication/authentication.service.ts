import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Authentication } from './schemas/authentication.schema';
import { LoginDto } from './schemas/login.dto';

@Injectable()
export class AuthenticationService {


    constructor (

    @InjectModel(Authentication.name)
    private authenticationModel: mongoose.Model<Authentication>,
    
    
    ){}


    async findAll(){
        return this.authenticationModel.find().exec();
    } 

    async verifyLogin(loginDto: LoginDto) {
        const { username, password } = loginDto
        const user = await this.authenticationModel.findOne({username, password}).exec()
        return user
    }
}
