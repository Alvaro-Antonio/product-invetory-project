import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreatePersonDto {

    @IsNotEmpty()
    @ApiProperty({ example: 'John Doe' }) 
    name: string;

    @IsNotEmpty()
    @ApiProperty({ example: '(90) 9 9999-8888' }) 
    phone: string;

    @ApiProperty({ example: 'fulano@email.com' })   
    email?: string;

    @ApiProperty({ example: 'Rua dos bobos, nº 0' }) 
    address?: string;

    createdAt?: Date;
          
}
