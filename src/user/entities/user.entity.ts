import { Role } from "src/role/entities/role.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ nullable: false })
    motherName: string;

    @Column({ nullable: false, comment: 'Número de teléfono del usuario' })
    phone: number;

    @Column({ type: 'date', nullable: false, comment: 'Fecha de nacimiento del usuario' })
    birthDate: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: true })
    photo: string;

    @Column({ nullable: true })
    authStrategy: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;

    @Column({ default: "user" })
    role: string;
    
    // @ManyToOne(() => Role, role => role.users)
    // role: Role;
}
