export class Organizations{
    id:number;
    entryId:number;
    parentEntityId:number|null;
    degree:number;
    name:String;
    parents:RelatedOrganization[];
    subEntities:RelatedOrganization[];

}
export class RelatedOrganization{
    id:number;
    name:string;
}