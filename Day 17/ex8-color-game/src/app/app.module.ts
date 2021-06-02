import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorBoxComponent } from './components/color-box/color-box.component';
import { RgbColorEditorComponent } from './components/rgb-color-editor/rgb-color-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBoxComponent,
    RgbColorEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
