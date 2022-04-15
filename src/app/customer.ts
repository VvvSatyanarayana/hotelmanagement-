export class Customer{
    id:number;
    name:string;
    checkin:string;
    checkout:string;
    rooms:number;
    adults:number;
    children:number;
    email:string;
    phoneno:number;


    constructor(id,name,checkin,checkout,rooms,adults,children,email,phoneno){
        this.id=id;
        this.name=name;
        this.checkin=checkin;
        this.checkout=checkout;
        this.rooms=rooms;
        this.adults=adults;
        this.children=children;
        this.email=email;
        this.phoneno=phoneno;

    }
}