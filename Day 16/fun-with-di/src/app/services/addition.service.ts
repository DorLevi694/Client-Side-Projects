import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable()
export class AdditionService{

    id: number = Math.ceil(Math.random() * 1000)
    constructor(
        private historyService: HistoryService
        )
        {
        console.log('Creating addition service: ' + this.id);

    }

    add(a:number,b:number):number{
        const txt =  `Add => ${a} + ${b} = ${a+b}`;
        this.historyService.logRecord(txt.toString());
        console.log(this.historyService.getHistory());
        return a+b;

    }

    
}