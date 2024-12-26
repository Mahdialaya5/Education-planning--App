import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { GuildlistComponent } from './features/pages/guildlist/guildlist.component';
import { StudentlistComponent } from './features/pages/studentlist/studentlist.component';
import { AddstudentComponent } from './features/pages/addstudent/addstudent.component';
import { AddguildComponent } from './features/pages/addguild/addguild.component';
import { LoginComponent } from './features/pages/login/login.component';
import { AddUserComponent } from './features/pages/add-user/add-user.component';
import { UserlistComponent } from './features/pages/userlist/userlist.component';
import { AuthGuard } from './core/auth/guard.guard';


export const routes: Routes = [ 
 {  path: '', component: HomeComponent ,title:"Home"},
 {  path: 'login', component:LoginComponent ,title:"Login"},
 { path: 'guildlist', component: GuildlistComponent ,title:"Guilds",canActivate:[ AuthGuard]},
 {  path: 'studentlist', component: StudentlistComponent ,title:"Students",canActivate:[ AuthGuard]},
 {  path: 'addstudent', component: AddstudentComponent,title:"Addstudent" ,canActivate:[ AuthGuard]},
 {  path: 'addguild', component: AddguildComponent,title:"Addguild",canActivate:[ AuthGuard]},
 {  path: 'adduser', component: AddUserComponent,title:"adduser",canActivate:[ AuthGuard]},
 {  path: 'userlist', component: UserlistComponent,title:"userlist",canActivate:[ AuthGuard]},
 {  path: '**', component: HomeComponent ,title:"Home"}
];
