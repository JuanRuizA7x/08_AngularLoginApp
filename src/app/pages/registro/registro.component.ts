import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent implements OnInit {

  user: UserModel;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.user = new UserModel();
   }

   onSubmit( form: NgForm ) {
    if ( form.invalid ) {
      return;
    } else {
      this.authService.signUp(this.user).subscribe(
        res => console.log(res),
        err => console.error(err.error.error.message)
      );
    }
   }


}
