import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserComment } from './userComments';
import { Beatmap } from './beatmap';

@Entity()
export class ModeDivision extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    name: string;

    @OneToMany(type => UserComment, userComment => userComment.mode)
    userComments: UserComment[];

    @OneToMany(type => Beatmap, beatmap => beatmap.mode)
    beatmaps: Beatmap[];

}

export enum ModeDivisionType {
    Standard = 1,
    Taiko = 2,
    Fruits = 3,
    Mania = 4,
    Storyboard = 5,
}