import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { loginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new loginModel();
  userRole!: string;

  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(private service:AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
    {

    }
  }

  onSubmit(form: NgForm)
  {
    this.service.login(form.value).subscribe({
      next: (res) => {
        if(res == "Username or password is incorrect")
        {
          form.resetForm();;
          this.toastr.error('Incorrect username or password.','Authentication failed');
        }
        else if(res == "Not allowed to login")
        {
          form.resetForm();
          this.toastr.error('Verify the email before sign in.','Authentication failed');
        }
        else
        {
          localStorage.setItem('token', res);
          this.userRole = this.service.getRole();

          if(this.userRole == 'Admin')
          {
            this.router.navigateByUrl('/admin/admin-dashboard');
          }
          else if(this.userRole == 'Department Head')
          {
            this.router.navigateByUrl('/department-head/department-head-dashboard');
          }
          else{
            this.router.navigateByUrl('/team-member/team-member-dashboard');
          }
          this.toastr.success('Login successfull');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
