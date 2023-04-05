import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pages')
export class PageEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column('varchar', { length: 255, nullable: false })
    public title: string;

    @Column('text', { nullable: false })
    public content: string;

    @Column('varchar', { length: 255, nullable: false })
    public slug: string;

    @Column('varchar', { length: 255, nullable: false })
    public metaTitle: string;

    @Column('text', { nullable: false })
    public metaDescription: string;

    @Column('varchar', { length: 255, nullable: false })
    public metaKeywords: string;

}