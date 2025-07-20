import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { Person } from "src/person/entities/person.entity";

export class CreateCustomerDto {
        
    @ApiProperty({ 
        example: {
            "name": "John Doe",
            "phone": "(90) 9 9999-8888",
            "email": "fulano@email.com",
            "address": "Rua dos bobos, nº 0"
        }
    })       
    person: Person; 
    
    @ApiProperty({ example: 'John Doe' })  
    vip: boolean;
}
