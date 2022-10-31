import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURL = `${environment.baseUrl}`;

  formModel = this.fb.group({
    Email: ['',  [Validators.required, Validators.email]],
    FirstName: ['',  [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    LastName: ['',  [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup) {
    let confirmPasswordctrl = fb.get('ConfirmPassword');
    if (confirmPasswordctrl?.errors == null || 'passwordMismatch' in confirmPasswordctrl.errors) {
      if (fb.get('Password')?.value != confirmPasswordctrl?.value) {
        confirmPasswordctrl?.setErrors({ passwordMismatch: true });
      }
      else {
        confirmPasswordctrl?.setErrors(null);
      }
    }

  }

  register() {
    var body = {
      Email: this.formModel.value.Email,
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(`${this.BaseURL}/Account/Register`, body, {responseType: 'text'});
  }

  login(formData: any) {
    return this.http.post(`${this.BaseURL}/Account/Login`, formData, {responseType: 'text'});
  }

  forgotpassword(formData: any){
    return this.http.post(`${this.BaseURL}/Account/ForgotPassword`, formData, {responseType: 'text'});
  }

  resetpassword(formData: any){
    return this.http.post(`${this.BaseURL}/Account/ResetPassword`, formData, {responseType: 'text'});
  }

  getUserProfile() {
    return this.http.get(`${this.BaseURL}/UserProfile`);
  }

  changepassword(formData: any){
    return this.http.post(`${this.BaseURL}/Account/change-password`, formData, {responseType: 'text'});
  }

  roleMatch(allowedRoles:any): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach((element: any) => {
      if (userRole == element) {
        isMatch = true;
      }
    });
    return isMatch;
  }
  getRole(){
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
    var userRole = payLoad.role;
    return userRole;
  }
  getEmployeeId(){
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
    var employeeId = payLoad.EmployeeID;
    return employeeId;
  }

}
