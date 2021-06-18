export interface IBaseEntity {
    id: string;
}

export interface IUserSpecific extends IBaseEntity {
    userId: string;
}