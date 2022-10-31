import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { changePasswordModel } from 'src/app/models/changepassword.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changepassword = new changePasswordModel();

  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(private service:AuthService, private router: Router, private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
    this.service.changepassword(form.value).subscribe({
      next: (res) => {
        if(res == "Password doesn't match its confirmation")
        {
          form.resetForm();
          this.toastr.error('Password mismatch.','New password and Confirm password are different');
        }
        else if(res == "Same Password")
        {
          form.resetForm();
          this.toastr.error('Same password.','Current password and New password are similar');
        }
        else if(res == "Current password is incorrect")
        {
          form.resetForm();
          this.toastr.error('Invalid current password.','Current password is incorrect');
        }
        else if(res == "Something went wrong")
        {
          form.resetForm();
          this.toastr.error('Something went wrong.','Unknown Error Occured');
        }
        else
        {
          this.toastr.success('Password has been changed successfully!');
          localStorage.removeItem('token');
          this.router.navigateByUrl('/login');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
