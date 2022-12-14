import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Relation, OneToMany, ManyToOne } from "typeorm"
import { Section } from './section'
import { Video } from "./media/video"
import { File } from "./media/file"
import { Image } from "./media/image"

@Entity()
export class Widget {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({ nullable:false })
    title?: string
    
    @Column()
    description?: string

    @ManyToOne(()=>Video, video=>video.widgets, { onDelete:"SET NULL" })
    video?:Video

    @ManyToOne(()=>Image, image=>image.widgets, { onDelete:"SET NULL" })
    image?:Video

    @ManyToOne(()=>File, file=>file.widgets, { onDelete:"SET NULL" })
    file?:Video

    @ManyToOne(()=>Section, section=>section.widgets, { onDelete:'CASCADE' })
    section?:Section   
}
