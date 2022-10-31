import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forgotPasswordModel } from 'src/app/models/forgotpassword.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
forgotpassword = new forgotPasswordModel();

  constructor(private service:AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
    this.service.forgotpassword(form.value).subscribe({
      next: (res) => {
        if(res == "No user associated with email")
        {
          form.resetForm();
          this.toastr.error('No user associated with email','Enter valid email');
        }
        else
        {
          form.resetForm();
          this.toastr.success('Email sent successfully');
          this.router.navigateByUrl('/login');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
