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

  constructor(private formBuilder: FormBuilder, private backendService: BackendService) {}

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    this.backendService.getPhotos(form.value.date)
      .subscribe(data =>{ this.display = data });
  }

}
