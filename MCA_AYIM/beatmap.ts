import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { GuestRequest } from "./guestRequest";
import { ModeDivision } from "./modeDivision";
import { Category } from "./category";

@Entity()
export class Beatmap extends BaseEntity {

    @PrimaryColumn()
    ID!: number;

    @Column()
    setID!: number;

    @Column()
    totalLength!: number;

    @Column()
    hitLength!: number;

    @Column()
    difficulty!: string;

    @Column("double")
    circleSize!: number;

    @Column("double")
    overallDifficulty!: number;

    @Column("double")
    approachRate!: number;

    @Column("double")
    hpDrain!: number;

    @ManyToOne(type => ModeDivision, modeDivision => modeDivision.beatmaps, {
        nullable: false,
        eager: true,
    })
    mode!: ModeDivision;

    @Column()
    circles!: number;

    @Column()
    sliders!: number;

    @Column()
    spinners!: number;

    @Column()
    submitDate!: Date;

    @Column()
    approvedDate!: Date;

    @Column()
    artist!: string;

    @Column()
    title!: string;

    @Column()
    creator!: string;

    @Column()
    creatorID!: number;

    @Column("double")
    BPM!: number;

    @Column()
    genre!: string;

    @Column()
    language!: string;

    @Column()
    favourites!: number;

    @Column("double")
    rating!: number;

    @Column({ default: false })
    storyboard!: boolean;

    @Column({ default: false })
    video!: boolean;

    @Column()
    playCount!: number;

    @Column()
    passCount!: number;

    @Column({ nullable: true })
    packs?: string;

    @Column({ nullable: true })
    maxCombo?: number;

    @Column("double", { nullable: true })
    aimSR?: number;

    @Column("double", { nullable: true })
    speedSR?: number;

    @Column("double")
    totalSR!: number;

    @OneToMany(type => GuestRequest, guestRequest => guestRequest.beatmap)
    guestRequests!: GuestRequest[];

    @ManyToMany(type => Category, category => category.beatmaps)
    @JoinTable()
    categories!: Category[];

}
