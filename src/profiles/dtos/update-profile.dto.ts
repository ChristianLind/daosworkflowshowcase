import { IsAlpha, IsEmail, MinLength } from "class-validator";

export class UpdateProfileDTO {
    
    @MinLength(1)
    readonly firstName: string;

    @MinLength(1)
    readonly lastName: string;

    readonly description: string;

    readonly zipCode: string;

    readonly city: string;

    @IsEmail()
    readonly email: string;

    readonly phone: string;

    readonly status: boolean;

    constructor(firstName: string, lastName: string, description: string, zipCode: string, city: string, email: string, phone: string, status: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.zipCode = zipCode;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.status = status;
    }
    
}