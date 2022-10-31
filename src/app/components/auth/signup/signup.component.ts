import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(public service: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe({
      next: (res) => {
        if(res == "Registration successfull"){
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successfull');
          this.router.navigate(['/login']);
        }
        else{
          this.service.formModel.reset();
          this.toastr.error('Error Occured!', 'Registration failed');
        }
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

}
