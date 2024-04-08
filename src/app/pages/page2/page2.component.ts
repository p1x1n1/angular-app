import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  @Output() userData = new EventEmitter<any>();
  users: any[] =[];
  myForm = new FormGroup({
    "userName": new FormControl('', Validators.required),
    "userSurname": new FormControl('', Validators.required)
  }
  )
  OnSubmit ()  {
    if (this.myForm.valid) {
      const userData = this.myForm.getRawValue();
      this.users.push(userData);
      this.userData.emit(userData);
      this.OnreInitForm();
    }
  }
  OnreInitForm() {
    this.myForm = new FormGroup({
      "userName": new FormControl('', Validators.required),
      "userSurname": new FormControl('', Validators.required)
    }
    )
  }
}