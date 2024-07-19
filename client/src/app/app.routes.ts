import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuildlistComponent } from './guildlist/guildlist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddguildComponent } from './addguild/addguild.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { guardGuard } from './guard.guard';


export const routes: Routes = [ 
 {  path: '', component: HomeComponent ,title:"Home"},
 {  path: 'login', component:LoginComponent ,title:"Login"},
 { path: 'guildlist', component: GuildlistComponent ,title:"Guilds",canActivate:[guardGuard]},
 {  path: 'studentlist', component: StudentlistComponent ,title:"Students",canActivate:[guardGuard]},
 {  path: 'addstudent', component: AddstudentComponent,title:"Addstudent" ,canActivate:[guardGuard]},
 {  path: 'addguild', component: AddguildComponent,title:"Addguild",canActivate:[guardGuard]},
 {  path: 'adduser', component: AddUserComponent,title:"adduser",canActivate:[guardGuard]},
 {  path: 'userlist', component: UserlistComponent,title:"userlist",canActivate:[guardGuard]},
 {  path: '**', component: HomeComponent ,title:"Home"}
];
