import { IsString, IsNotEmpty } from 'class-validator';

export class GetCategoryDto {
    
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;
}
