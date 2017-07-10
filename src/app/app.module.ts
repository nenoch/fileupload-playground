import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileSelectorComponent } from './file-selector/file-selector.component';

import { UploadService } from './upload.service';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
