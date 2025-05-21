import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class Balance {

    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'int', nullable: false })
    year: number;

    @Column({ type: 'int', nullable: false })
    totalSpent : number;

    @Column({ type: 'int', nullable: false })
    totalInvested : number;

    @Column({ type: 'int', nullable: false })
    profit : number;
}
