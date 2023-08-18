export class User {

    constructor( public id:number,
                public fname:string,
                public lname:string,
                public dob: Date | null,
                public email: string,
                public password: string,
                public mobile: string,
                public gender: string,
        ){}
}

