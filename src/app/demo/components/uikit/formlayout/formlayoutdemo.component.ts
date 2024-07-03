import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Employee, Organization } from 'src/app/models/employee_model';
import { TableModule } from 'primeng/table';
import { HttpService } from 'src/app/demo/service/http.service';
import { MultiSelectModule } from 'primeng/multiselect';
import { TokenModel } from 'src/app/models/token_model';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
    templateUrl: './formlayoutdemo.component.html',
    standalone: true,
    imports: [InputTextModule, ButtonModule, InputTextareaModule, DropdownModule, FormsModule,TableModule,MultiSelectModule,
         PasswordModule, FormsModule, CheckboxModule
    ]
})
export class FormLayoutDemoComponent {
constructor(private httpService:HttpService){
    this.employees = [];
  this.organizations = [];

}
password:string="";
    email:string;
getToken(email,password){
    this.httpService.post<TokenModel>("api/Auth/Login",{emailOrUserName:email,password:password},res=>{
        console.log(res);
        localStorage.removeItem('token');
        localStorage.setItem('token',res.data.token);
    });
}
GetFull(){
    this.httpService.post<Employee[]>("api/Organizations/GetFullEmployees",{},res=>{
        this.organizations=[];
        this.employees=res;
        res.forEach(employee => {
            const org: Organization = new Organization();
            org.id = employee.organization.id;
            org.name = employee.organization.name;
            if (!this.organizations.some(o => o.id === org.id)) {
              this.organizations.push(org);
            }
          });
    });
}
GetByUser(){
    this.httpService.post<Employee[]>("api/Organizations/GetEmployeesToUser",{},res=>{
        this.organizations=[];
        this.employees=res;
        res.forEach(employee => {
            const org: Organization = new Organization();
            org.id = employee.organization.id;
            org.name = employee.organization.name;
            if (!this.organizations.some(o => o.id === org.id)) {
              this.organizations.push(org);
            }
          });
    });
}
organizations:Organization[];

ngOnInit() {
    this.httpService.post<Employee[]>("api/Organizations/GetFullEmployees",{},res=>{
        res.forEach(employee => {
            const org: Organization = new Organization();
            org.id = employee.organization.id;
            org.name = employee.organization.name;
            if (!this.organizations.some(o => o.id === org.id)) {
              this.organizations.push(org);
            }
          });
        this.employees=res;
       
    });
}   
    selectedState: any = null;
    employees:Employee[];
    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;

}
