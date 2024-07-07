import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/demo/service/http.service';
import { User } from 'src/app/models/user_model';
import { Role } from 'src/app/models/role_model';

@Component({
    templateUrl: './buttondemo.component.html',
    standalone: true,
    imports: [ButtonModule, RippleModule, SplitButtonModule,TableModule,MultiSelectModule,FormsModule]
})
export class ButtonDemoComponent implements OnInit {

    constructor(private httpService:HttpService) { }
    
    selectedUsers:any[];
    users:any[];

    selectedRoles:any[];
    roles:any[];

    userRoles:any[];
    RemoveAllUserRoles(){
        this.httpService.post<Role>("api/manager/RemoveAllUserRoles",{},res=>{
            this.httpService.post<User[]>("api/manager/GetUsers",{},res=>{
                this.userRoles=res;
               });
           });   
    }
    addRoleToUser(){
        const userAndMenu = {
            users: this.selectedUsers,
            roles: this.selectedRoles
          };
        this.httpService.post<Role>("api/manager/AddUserRole",userAndMenu,res=>{
            this.httpService.post<User[]>("api/manager/GetUsers",{},res=>{
                this.userRoles=res;
                this.selectedRoles=[];
                this.selectedUsers=[];
               });
           });
    }
    ngOnInit() {
        this.httpService.post<User[]>("api/manager/GetUsers",{},res=>{
            this.users = res;
            this.userRoles=res;
           });
        this.httpService.post<Role[]>("api/manager/GetRoles",{},res=>{
            this.roles = res;
           });
    }

   
    
}
