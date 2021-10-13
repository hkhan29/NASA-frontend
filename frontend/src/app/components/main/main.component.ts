import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  myForm = this.formBuilder.group({
    date: new FormControl('')
  });

  display: any;

  constructor(private formBuilder: FormBuilder, private backendService: BackendService, private datePipe: DatePipe) {}

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    let date = this.datePipe.transform(form.value.date, 'YYYY-MM-dd');
    this.backendService.getPhotos(`${date}`)
      .subscribe(data =>{ this.display = data });
  }

}
