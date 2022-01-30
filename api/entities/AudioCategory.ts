import {BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { v4 } from 'uuid';

export const TIERS = {
    FREE: 'FREE',
    PREMIUM: 'PREMIUM'
}

@Entity()
export class AudioCategory {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column({ type: 'varchar' })
    public name!: string;

    @Column({
        type: 'enum',
        enum: Object.values(TIERS),
        default: TIERS.FREE
    })
    public tier!: string;

    @CreateDateColumn()
    public createdAt!: Date;
    
    @UpdateDateColumn()
    public updatedAt!: Date;

    @BeforeInsert()
    addId() {
        this.id = v4();
    }
}
