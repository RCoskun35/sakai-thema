import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, SharedModule, TreeNode } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NgStyle, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { NodeService } from '../../service/node.service';
import { HttpService } from '../../service/http.service';
import { Organizations, RelatedOrganization } from 'src/app/models/organization_model';
import { JoinNamesPipe } from '../../pipes/join-names.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TokenModel } from 'src/app/models/token_model';

@Component({
    templateUrl: './dashboard.component.html',
    standalone: true,
    imports: [
        NgStyle,
        TableModule,
        SharedModule,
        ButtonModule,
        MenuModule,
        ChartModule,
        CurrencyPipe,TreeModule, TreeTableModule, SharedModule, NgFor, NgIf,JoinNamesPipe,InputTextModule, PasswordModule, FormsModule, CheckboxModule
    ],
    
})
export class DashboardComponent implements OnInit, OnDestroy {
    
    items!: MenuItem[];
    selectedFiles3: TreeNode = {};
    files3: TreeNode[] = [];
    products!: Product[];
    organizations:Organizations[];
    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor( public layoutService: LayoutService,private nodeService: NodeService,private httpService:HttpService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            
        });
    }
      
      
    ngOnInit() {
        this.httpService.post<Organizations[]>("api/Organizations/GetOrganizationsWithParentsAndChilds",{},res=>{
            this.organizations=res;
        });
    }
   
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

