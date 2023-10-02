import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

const passwordRegEx =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class userDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    firstName: string;

    @IsNotEmpty()
    @MinLength(2)
    lastName: string;

    @IsNotEmpty()
    @MinLength(9)
    phoneNumber: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Matches(passwordRegEx)
    @IsNotEmpty()
    password: string 
}