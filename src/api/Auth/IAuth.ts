import { IBaseInterface } from "../baseInterface";

export interface IAuth extends IBaseInterface {
    rule: {
        field: string;
        condition: string;
        condition_value: string;
    };
    data: Data
}
export interface Rule {
    field: string;
    condition: string;
    condition_value: string;
}
export interface Data {
    name: string;
    crew: string;
    age: string;
    position: string;
    missions: Missions
}
export interface Missions {
    count: number;
    successful: number;
    failed: number;
}
