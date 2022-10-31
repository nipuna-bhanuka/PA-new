import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { resetPasswordModel } from 'src/app/models/resetpassword.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetpassword = new resetPasswordModel();

  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(private route: ActivatedRoute, private service:AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetpassword = {
      Email:this.route.snapshot.params['email'],
      Token:this.route.snapshot.params['token'],
      NewPassword: '',
      ConfirmPassword : ''
    }
  }




  onSubmit(form: NgForm)
  {
    this.service.resetpassword(form.value).subscribe({
      next: (res) => {
        if(res == "No user associated with email")
        {
          form.resetForm();;
          this.toastr.error('Incorrect Email.','No user associated with email');
        }
        else if(res == "Password doesn't match its confirmation")
        {
          form.resetForm();
          this.toastr.error('Password mismatch.','New password and Confirm password are different');
        }
        else if(res == "Something went wrong")
        {
          form.resetForm();
          this.toastr.error('Something went wrong.','Unknown Error Occured');
        }
        else
        {
          this.toastr.success('Password has been reset successfully!');
          this.router.navigateByUrl('/login');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
