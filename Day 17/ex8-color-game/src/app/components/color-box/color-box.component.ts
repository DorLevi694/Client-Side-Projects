import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent {

  constructor() { }

  @Input()
  color: string | null = '';


}