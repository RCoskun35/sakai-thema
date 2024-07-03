export class Employee{
    id:number;
    name:String;
    surname:String;
    email:String;
    organizationId:number;
    organization:Organization;
}
export class Organization{
    id:number;
    name:string;
}