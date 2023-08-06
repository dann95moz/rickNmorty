export interface filterCharacter {
    name?:string;
    status?: string;
    species?:string;
    type?:string;
    gender?:string;
    page?:number;
}
export interface Status {
    status?: string[];
    gender?:string[];
}