import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem, SharedModule } from 'primeng/api';
import { CountryService } from 'src/app/demo/service/country.service';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { KnobModule } from 'primeng/knob';
import { ColorPickerModule } from 'primeng/colorpicker';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { ChipsModule } from 'primeng/chips';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpService } from 'src/app/demo/service/http.service';
import { Role } from 'src/app/models/role_model';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';

@Component({
    templateUrl: './inputdemo.component.html',
    standalone: true,
    providers: [MessageService],
    imports: [InputTextModule, InputTextareaModule, AutoCompleteModule, FormsModule, CalendarModule, InputNumberModule, ChipsModule, SliderModule, RatingModule, 
        ColorPickerModule, KnobModule, RadioButtonModule, CheckboxModule, InputSwitchModule, ListboxModule, DropdownModule, MultiSelectModule, SharedModule, 
        ToggleButtonModule, SelectButtonModule, ButtonModule,TableModule,ToastModule,ToolbarModule,DialogModule]
})
export class InputDemoComponent implements OnInit {
    roles:any[]=[];
    role:{};

    constructor(private httpService:HttpService) { }

    ngOnInit() {
       this.httpService.post<Role[]>("api/manager/GetRoles",{},res=>{
        this.roles = res;
       })
    }
    roleDialog: boolean = false;
    openNew() {
        this.role = {};
        this.roleDialog = true;
    }
    hideDialog() {
        this.roleDialog = false;
    }
    addRole(){
        this.httpService.post<Role[]>("api/manager/AddRole",this.role,res=>{
            this.httpService.post<Role[]>("api/manager/GetRoles",{},result=>{
                this.roles = result;
               })
           })
    }

}
