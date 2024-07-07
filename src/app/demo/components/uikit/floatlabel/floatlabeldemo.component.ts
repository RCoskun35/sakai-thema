import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { HttpService } from 'src/app/demo/service/http.service';
import { Menu } from 'primeng/menu';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './floatlabeldemo.component.html',
    standalone: true,
    providers: [MessageService],
    imports: [
        FormsModule,
        InputTextModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        InputMaskModule,
        InputNumberModule,
        DropdownModule,
        MultiSelectModule,
        InputTextareaModule,ToastModule,ToolbarModule,TableModule,DialogModule
    ],
})

export class FloatLabelDemoComponent implements OnInit {

    
menus:any[]=[];
menuDialog:boolean=false;
menu:{};
    constructor(private httpService:HttpService) {
        
    }

    ngOnInit() {
        this.httpService.post<Menu[]>("api/manager/GetMenus",{},res=>{
            this.menus = res;
           })
    }
    
    openNew() {
        this.menu = {};
        this.menuDialog = true;
    }
    hideDialog() {
        this.menuDialog = false;
    }
    addMenu(){
        this.httpService.post<Menu[]>("api/manager/AddMenu",this.menu,res=>{
            this.httpService.post<Menu[]>("api/manager/GetMenus",{},result=>{
                this.menus = result;
               })
           })
    }

   
}
