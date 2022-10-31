import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrgChartModule } from 'angular13-organization-chart';
import { NgChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
// import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { ViewDepartmentComponent } from './components/departments/view-department/view-department.component';
import { ViewTeamComponent } from './components/teams/view-team/view-team.component';
import { CreateTeamComponent } from './components/teams/create-team/create-team.component';
import { TeamListComponent } from './components/teams/team-list/team-list.component';
import { DepartmentHeadLayoutComponent } from './components/layout/department-head-layout/department-head-layout.component';
import { TeamMemberLayoutComponent } from './components/layout/team-member-layout/team-member-layout.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { EditTeamComponent } from './components/teams/edit-team/edit-team.component';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { CreatePAComponent } from './components/pa-sheet/create-pa/create-pa.component';
import { ViewPAComponent } from './components/pa-sheet/view-pa/view-pa.component';
import { PaListComponent } from './components/pa-sheet/pa-list/pa-list.component';
import { EditPaComponent } from './components/pa-sheet/edit-pa/edit-pa.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';

import { PanelListComponent } from './components/layout/panel-list/panel-list.component';
import { ReviweeListComponent } from './components/layout/reviwee-list/reviwee-list.component';
import { ReviwerListComponent } from './components/layout/reviwer-list/reviwer-list.component';

import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { EmployeeProfileComponent } from './components/employee/employee-profile/employee-profile.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ReviweeEditComponent } from './components/layout/reviwee-edit/reviwee-edit.component';
import { ReviwerEditComponent } from './components/layout/reviwer-edit/reviwer-edit.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelEditComponent } from './components/layout/panel-edit/panel-edit.component';
import { PanelViewComponent } from './components/layout/panel-view/panel-view.component';
import { ViewOrganizationComponent } from './components/layout/view-organization/view-organization.component';




import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/auth/home/home.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ForgetpasswordComponent } from './components/auth/forgetpassword/forgetpassword.component';
import { ConfirmemailComponent } from './components/auth/confirmemail/confirmemail.component';
import { ResetpasswordComponent } from './components/auth/resetpassword/resetpassword.component';
import { VerificationfailComponent } from './components/auth/verificationfail/verificationfail.component';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { TimelineComponent } from './components/admin/timeline/timeline.component';

import { EditOrganizationComponent } from './components/organization/edit-organization/edit-organization.component';
import { ReviewerPaComponent } from './components/pa-sheet/reviewer-pa/reviewer-pa.component';
import { CreateCriteriaComponent } from './components/pa-sheet/create-criteria/create-criteria.component';
import { EditCriteriaComponent } from './components/pa-sheet/edit-criteria/edit-criteria.component';
import { CreateSubcriteriaComponent } from './components/pa-sheet/create-subcriteria/create-subcriteria.component';
import { EditSubcriteriaComponent } from './components/pa-sheet/edit-subcriteria/edit-subcriteria.component';
import { AdminPaComponent } from './components/pa-sheet/admin-pa/admin-pa.component';


import { PieChartComponent } from './components/graphs/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/graphs/bar-chart/bar-chart.component';
import { RadarChartComponent } from './components/graphs/radar-chart/radar-chart.component';
import { DepartmentHeadDashboardComponent } from './components/dashboard/department-head-dashboard/department-head-dashboard.component';
import { TeamMemberDashboardComponent } from './components/dashboard/team-member-dashboard/team-member-dashboard.component';
import { ChangepasswordComponent } from './components/auth/changepassword/changepassword.component';
import { AdminBargraphComponent } from './components/graphs/admin-bargraph/admin-bargraph.component';
import { DepartmentBargraphComponent } from './components/graphs/department-bargraph/department-bargraph.component';
import { VanComponent } from './components/van/van.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminLayoutComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CreateDepartmentComponent,
    DepartmentsListComponent,
    ViewDepartmentComponent,
    EditDepartmentComponent,
    ViewTeamComponent,
    TeamListComponent,
    CreateTeamComponent,
    EditTeamComponent,
    DepartmentHeadLayoutComponent,
    TeamMemberLayoutComponent,
    CreatePAComponent,
    ViewPAComponent,
    PaListComponent,
    EditPaComponent,
    AdminDashboardComponent,
    AdminDashboardComponent,
    LandingPageComponent,
    PanelListComponent,
    ReviweeListComponent,
    ReviwerListComponent,

    OrgChartComponent,
    CreateEmployeeComponent,
    EmployeeProfileComponent,
    EmployeeListComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForbiddenComponent,
    ForgetpasswordComponent,
    ConfirmemailComponent,
    ResetpasswordComponent,
    VerificationfailComponent,
    MatchPasswordDirective,
    HeaderComponent,
    FileUploadComponent,
    ReviweeEditComponent,
    ReviwerEditComponent,
    PanelEditComponent,
    PanelViewComponent,
    CreateOrganizationComponent,
    EditOrganizationComponent,
    OrganizationsListComponent,
    ReviewerPaComponent,
    CreateCriteriaComponent,
    EditCriteriaComponent,
    CreateSubcriteriaComponent,
    EditSubcriteriaComponent,
    AdminPaComponent,
    PieChartComponent,
    BarChartComponent,
    RadarChartComponent,
    DepartmentHeadDashboardComponent,
    TeamMemberDashboardComponent,
    TimelineComponent,
    ViewOrganizationComponent,
    ChangepasswordComponent,
    AdminBargraphComponent,
    DepartmentBargraphComponent,
    VanComponent
  ],

  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, FormsModule, ReactiveFormsModule,OrgChartModule, NgChartsModule,BrowserAnimationsModule,ToastrModule.forRoot({progressBar: true})
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
