import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-rgb-color-editor',
  templateUrl: './rgb-color-editor.component.html',
  styleUrls: ['./rgb-color-editor.component.css']
})
export class RgbColorEditorComponent implements OnInit {

  constructor(private colorService: ColorService) { }

  red$!: Observable<number>;
  green$!: Observable<number>;
  blue$!: Observable<number>;

  ngOnInit(): void {
    this.red$ = this.colorService.getRed();
    this.green$ = this.colorService.getGreen();
    this.blue$ = this.colorService.getBlue();
  }

  setRedValue(value: string){
    this.colorService.setRed(Number.parseInt(value));
  }
  setGreenValue(value: string){
    this.colorService.setGreen(Number.parseInt(value));
  }
  setBlueValue(value: string){
    this.colorService.setBlue(Number.parseInt(value));
  }

  
}
