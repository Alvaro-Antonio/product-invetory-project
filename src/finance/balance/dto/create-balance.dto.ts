import { ApiProperty } from "@nestjs/swagger";

export class CreateBalanceDto {
        
        @ApiProperty({ example: 2025, description: 'ID of the balance record' })
        year: number;    
        
        @ApiProperty({ example: 250, description: 'ID of the month for the balance record' })
        totalSpent : number;

        @ApiProperty({ example: 5000, description: 'Total amount invested in the month' })
        totalInvested : number;    
        
        @ApiProperty({ example: 4750, description: 'Total profit made in the month' })
        profit : number;
}
