import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Login: any //initialization

  constructor(private fb: FormBuilder, private api: BackendService, private router: Router) {

    // form building // inside constructor
    this.Login = this.fb.group({
      email: [''],
      password: ['']
    })
  }


  login() {

    let value = this.Login.value


    this.api.login(value).subscribe((res: any) => {

      console.log(res)
      if (res.status === 200) {
        if (res.token) {
          localStorage.setItem('token', res.token)
          this.router.navigate([''])
        }
      }
      else {
        alert('Not accessable')

      }


    })

  }

}
