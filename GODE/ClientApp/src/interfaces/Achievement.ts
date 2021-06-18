import { IBaseEntity } from "./BaseEntity";

export interface Achievement extends IBaseEntity{
    title: string,
    description: string,
    index: number
}