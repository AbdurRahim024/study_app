import { Body, Controller, Get } from '@nestjs/common';
import {AuthenticationService} from './authentication.service';
import { LoginDto } from './schemas/login.dto';



@Controller('authentication')
export class AuthenticationController {

    constructor(private authenticationService:  AuthenticationService) {}

    @Get()
    async getUserID(){
    return this.authenticationService.findAll()
    }

    @Get("/login")
    async verifyUser(@Body() loginDto: LoginDto) {
        return this.authenticationService.verifyLogin(loginDto)
    }
}