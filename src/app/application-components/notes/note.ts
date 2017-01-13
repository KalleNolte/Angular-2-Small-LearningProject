export class Note {
    createdAt: Date;
    deletedAt: Date;
    title: string;
    note: string;
    author: string;
    color: string;

    constructor(note: Object){
         Object.assign(this, note);
         this.createdAt = new Date();
         this.author = 'Kalle';
    }
}