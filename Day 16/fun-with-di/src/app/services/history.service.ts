export class HistoryService{
    id = Math.ceil(Math.random()* 1000);
    private records: string []=[];

    constructor(){
        console.log('Creating history service: ' + this.id);

    }
    logRecord(txt:string){
        this.records.push(txt);

    }

    getHistory():string[]{
        return [...this.records]
    }
}