import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { EditOrganizationComponent } from './components/organization/edit-organization/edit-organization.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { ViewDepartmentComponent } from './components/departments/view-department/view-department.component';
import { TeamListComponent } from './components/teams/team-list/team-list.component';
import { CreateTeamComponent } from './components/teams/create-team/create-team.component';
import { ViewTeamComponent } from './components/teams/view-team/view-team.component';
import { DepartmentHeadLayoutComponent } from './components/layout/department-head-layout/department-head-layout.component';
import { EditTeamComponent } from './components/teams/edit-team/edit-team.component';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { PaListComponent } from './components/pa-sheet/pa-list/pa-list.component';
import { CreatePAComponent } from './components/pa-sheet/create-pa/create-pa.component';
import { ViewPAComponent } from './components/pa-sheet/view-pa/view-pa.component';
import { EditPaComponent } from './components/pa-sheet/edit-pa/edit-pa.component';
import { ReviewerPaComponent } from './components/pa-sheet/reviewer-pa/reviewer-pa.component';
import { CreateCriteriaComponent } from './components/pa-sheet/create-criteria/create-criteria.component';
import { EditCriteriaComponent } from './components/pa-sheet/edit-criteria/edit-criteria.component';
import { CreateSubcriteriaComponent } from './components/pa-sheet/create-subcriteria/create-subcriteria.component';
import { EditSubcriteriaComponent } from './components/pa-sheet/edit-subcriteria/edit-subcriteria.component';
import { AdminPaComponent } from './components/pa-sheet/admin-pa/admin-pa.component';

import { PanelListComponent } from './components/layout/panel-list/panel-list.component';
import { ReviweeListComponent } from './components/layout/reviwee-list/reviwee-list.component';
import { ReviwerListComponent } from './components/layout/reviwer-list/reviwer-list.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { EmployeeProfileComponent } from './components/employee/employee-profile/employee-profile.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ReviweeEditComponent } from './components/layout/reviwee-edit/reviwee-edit.component';
import { ReviwerEditComponent } from './components/layout/reviwer-edit/reviwer-edit.component';
import { PanelEditComponent } from './components/layout/panel-edit/panel-edit.component';
import { PanelViewComponent } from './components/layout/panel-view/panel-view.component';
import { TimelineComponent } from './components/admin/timeline/timeline.component';

import { AuthGuard } from './guards/auth.guard'
import { HomeComponent } from './components/auth/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ForgetpasswordComponent } from './components/auth/forgetpassword/forgetpassword.component';
import { ConfirmemailComponent } from './components/auth/confirmemail/confirmemail.component';
import { ResetpasswordComponent } from './components/auth/resetpassword/resetpassword.component';
import { VerificationfailComponent } from './components/auth/verificationfail/verificationfail.component';
import { TeamMemberLayoutComponent } from './components/layout/team-member-layout/team-member-layout.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { ViewOrganizationComponent } from './components/layout/view-organization/view-organization.component';
import { TeamMemberDashboardComponent } from './components/dashboard/team-member-dashboard/team-member-dashboard.component';
import { DepartmentHeadDashboardComponent } from './components/dashboard/department-head-dashboard/department-head-dashboard.component';
import { ChangepasswordComponent } from './components/auth/changepassword/changepassword.component';


const routes: Routes = [
  { path: '', redirectTo: 'organization/landing', pathMatch: 'full' },
  { path: 'organization/list', component: OrganizationsListComponent },
  { path: 'organization/create', component: CreateOrganizationComponent },
  { path: 'organization/update', component: EditOrganizationComponent },
  { path: 'organization/landing', component: LandingPageComponent },
  { path: 'employee-profile', component: EmployeeProfileComponent },

  //admin routing
  {
    path: 'admin',
    component: AdminLayoutComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin']},
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent},
      { path: 'departments-list', component: DepartmentsListComponent },
      { path: 'create-department', component: CreateDepartmentComponent },
      { path: 'view-department', component: ViewDepartmentComponent },
      { path: 'edit-department', component: EditDepartmentComponent },
      { path: 'team-list', component: TeamListComponent },
      { path: 'create-team', component: CreateTeamComponent },
      { path: 'view-team', component: ViewTeamComponent },
      { path: 'create-employee', component: CreateEmployeeComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'edit-team', component: EditTeamComponent },
      { path: 'pa-list', component: PaListComponent },
      { path: 'create-pa', component: CreatePAComponent },
      { path: 'view-pa', component: ViewPAComponent },
      { path: 'edit-pa', component: EditPaComponent },
      { path: 'reviwee-list', component: ReviweeListComponent },
      { path: 'reviwee-edit', component: ReviweeEditComponent },
      { path: 'reviwer-list', component: ReviwerListComponent },
      { path: 'reviwer-edit', component: ReviwerEditComponent },
      { path: 'panel-list', component: PanelListComponent },
      { path: 'panel-edit', component: PanelEditComponent },
      { path: 'panel-view', component: PanelViewComponent },
      { path: 'org-chart', component: OrgChartComponent },
      { path: 'employee-profile', component: EmployeeProfileComponent },
      { path: 'view-organization', component: ViewOrganizationComponent},
      { path: 'image-upload', component: FileUploadComponent },
      { path: 'timeline', component: TimelineComponent},
      { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
      { path: 'reviewer-pa', component: ReviewerPaComponent },
      { path: 'create-criteria', component: CreateCriteriaComponent },
      { path: 'edit-criteria', component: EditCriteriaComponent },
      { path: 'create-subcriteria', component:CreateSubcriteriaComponent },
      { path: 'edit-subcriteria', component:EditSubcriteriaComponent },
      { path: 'admin-pa', component: AdminPaComponent}

    ],
  },
  //departmentHead routing
  {
    path: 'department-head',
    component: DepartmentHeadLayoutComponent, canActivate:[AuthGuard], data:{permittedRoles:['Department Head']},
    children: [
      { path: 'department-head-dashboard', component: DepartmentHeadDashboardComponent},
      { path: 'departments-list', component: DepartmentsListComponent },
      { path: 'view-department', component: ViewDepartmentComponent },
      { path: 'team-list', component: TeamListComponent },
      { path: 'create-team', component: CreateTeamComponent },
      { path: 'view-team', component: ViewTeamComponent },
      { path: 'image-upload', component: FileUploadComponent },
      { path: 'employee-profile', component: EmployeeProfileComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'edit-team', component: EditTeamComponent },
      { path: 'org-chart', component: OrgChartComponent },
      { path: '', redirectTo: 'department-head-dashboard', pathMatch: 'full' },
    ],
  },
  //teamMember routing
  {
    path: 'team-member',
    component: TeamMemberLayoutComponent, canActivate:[AuthGuard], data:{permittedRoles:['Employee']},
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent},
      { path: 'department-head-dashboard', component: DepartmentHeadDashboardComponent},
      { path: 'team-member-dashboard', component: TeamMemberDashboardComponent},
      { path: 'employee-profile', component: EmployeeProfileComponent },
      { path: 'image-upload', component: FileUploadComponent },
      { path: 'org-chart', component: OrgChartComponent },
      { path: '', redirectTo: 'team-member-dashboard', pathMatch: 'full' },
    ],
  },

  //auth routing

  //auth routing
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', component: SignupComponent},
      { path: 'login', component: LoginComponent},
      { path: 'home',component:HomeComponent,canActivate:[AuthGuard]},
      { path: 'forbidden',component:ForbiddenComponent},
      //{ path: 'adminpanel',component:AdminPanelComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin']}},
      { path: 'forgotpassword', component:ForgetpasswordComponent},
      { path: 'confirmemail', component:ConfirmemailComponent},
      { path: 'resetpassword/:email/:token', component:ResetpasswordComponent},
      { path: 'verificationfail', component:VerificationfailComponent},
      { path: 'changepassword', component:ChangepasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
