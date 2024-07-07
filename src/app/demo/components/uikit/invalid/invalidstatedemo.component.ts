import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { Role } from 'src/app/models/role_model';
import { ResolveStart } from '@angular/router';
import { Menu } from 'primeng/menu';
import { HttpService } from 'src/app/demo/service/http.service';
import { TableModule } from 'primeng/table';

@Component({
    templateUrl: './invalidstatedemo.component.html',
    standalone: true,
    imports: [InputTextModule, AutoCompleteModule, FormsModule, CalendarModule, ChipsModule, PasswordModule, InputMaskModule, InputNumberModule, 
        DropdownModule, MultiSelectModule, InputTextareaModule,TableModule]
})
export class InvalidStateDemoComponent implements OnInit {
    roles:Role[]=[];
    selectedRoles:Role[]=[];

    menus:Menu[]=[];
    selectedMenus:Menu[]=[];
   
    roleMenus:any;
    constructor(private httpService:HttpService) {
       
    }
    addMenuToRole(){
        const rolesAndMenus = {
            roles: this.selectedRoles,
            menus: this.selectedMenus
          };
        this.httpService.post<Menu[]>("api/Manager/AddRoleMenu",rolesAndMenus,res=>{
            this.selectedMenus=[];
            this.selectedRoles=[];
            this.httpService.post<Menu[]>("api/Manager/GetRoleMenus",{},res=>{
                this.roleMenus=res;
             });
         });
    }

    ngOnInit() {
        this.httpService.post<Menu[]>("api/Manager/GetRoleMenus",{},res=>{
            this.roleMenus=res;
         });
        this.httpService.post<Menu[]>("api/Manager/GetMenus",{},res=>{
           this.menus=res;
        });
        this.httpService.post<Role[]>("api/Manager/GetRoles",{},res=>{
            this.roles=res;
         });
    }

   
    
}
