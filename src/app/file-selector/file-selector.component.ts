import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  public showFileSelector: Boolean = true;
  public filesChosen: Boolean = false;

  private files: any = [];

  @Output() showState: EventEmitter<Boolean> = new EventEmitter();

  constructor(private http: Http) { };

  ngOnInit() {
  }

  private onSubmit(form: NgForm) {
    // TODO call to backend service, converting files to a csv
    console.dir(this.files);
    this.hideHandler();
  }

  private onChange(event) {
    console.log(event);
    this.files = event.target.files || [];
    this.files.length === 0 ? this.filesChosen = false : this.filesChosen = true;
    let formData = new FormData();
    if (this.files.length > 0) {
        for (let i = 0; i < this.files.length; i++) {
            formData.append('file[]', this.files[i]);
        }
        this.http
            .post('/src/assets', formData)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
    // let reader = new FileReader;
    // for (let file of this.files){
    //   console.log(reader.readAsDataURL(file));
    // }
    console.log("files", this.files);
  }

  private hideHandler() {
    this.showState.emit(this.showFileSelector);
    this.toggleShowFileSelector();
  }

  private toggleShowFileSelector() {
    this.showFileSelector = !this.showFileSelector;
  }
}
