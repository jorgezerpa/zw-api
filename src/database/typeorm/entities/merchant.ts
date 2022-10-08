import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { AuthMerchant } from "./authMerchant"
import { Order } from "./order"
import { PaymentMethod } from "./paypmentMethod"

@Entity()
export class Merchant {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    firstName?: string

    @Column()
    lastName?: string

    @Column()
    username?: string

    @Column()
    email?: string
    
    @Column()
    phone?: number

    @OneToOne(() => AuthMerchant, (authMerchant) => authMerchant.merchant)
    auth?: AuthMerchant 

    @OneToMany(() => Order, (order) => order.merchant) 
    order?: Order[]

    @ManyToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.merchants)
    @JoinTable()
    paymentMethods?: PaymentMethod[]
}