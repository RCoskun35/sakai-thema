import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { NgFor, NgIf } from '@angular/common';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Organization } from 'src/app/models/employee_model';
import { Organizations } from 'src/app/models/organization_model';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone: true,
    imports: [NgFor, NgIf, AppMenuitemComponent]
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    authModel:any[]=[];
    constructor(public layoutService: LayoutService) { }
    menus:Organizations[]=[];
    visible:boolean=true;
    setVisible(i:number){
        if(i==0)
        return true;
        
         var result = this.authModel.some(item=>item==i);
         if(result)
            return result;
         var entry = this.menus.find(item=>item.entryId==i);
         var result2 = entry.parents.some(item => this.authModel.some(auth => auth == item.id));
        if(result2)
            return true;
            
         

        return false;

    }
   
    ngOnInit() {
    var decode: JwtPayload | any = jwtDecode(localStorage.getItem('token'));
        
        this.menus =JSON.parse(localStorage.getItem('menus'));
        this.authModel=decode.menu;
        this.model = [
            {
                setVisible:this.setVisible(0),
                label: 'Home',
                items: [
                    { label: 'Organizasyonlar', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'UI Components',
                setVisible:this.setVisible(0),
                items: [
                    { label: 'Personeller', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/formlayout'] },
                    
                        
                            {
                                label: 'Rol',
                                setVisible:this.setVisible(0),
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/uikit/input'],
                                
                            },
                            {
                                label: 'Menü',
                                setVisible:this.setVisible(0),
                                icon: 'pi pi-fw pi-sliders-h',
                                routerLink: ['/uikit/floatlabel']
                            },
                            {
                                label: 'Rol-Menü',
                                setVisible:this.setVisible(0),
                                icon: 'pi pi-fw pi-cog',
                                routerLink: ['/uikit/invalidstate']
                            },
                            {
                                label: 'Kullanıcı-Rol',
                                setVisible:this.setVisible(0),
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/uikit/button']
                            }
                    ,
                    {
                        label: 'İşlemler',
                        setVisible:this.setVisible(0),
                        icon: 'pi pi-fw pi-table',
                        module:'Islemler',
                        routerLink: ['/uikit/table'],
                        items: [
                            {
                                label: 'Siparişler',
                                setVisible:this.setVisible(2),
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: ['/uikit/list'],
                                
                            },
                            {
                                label: 'Ürünler',
                                setVisible:this.setVisible(7),
                                module:'Urunler',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/uikit/tree']
                            },
                            {
                                label: 'Raporlar',
                                setVisible:this.setVisible(12),
                                icon: 'pi pi-fw pi-tablet',
                                routerLink: ['/uikit/panel']
                            },
                            {
                                label: 'Faturalar',
                                setVisible:this.setVisible(17),
                                icon: 'pi pi-fw pi-image',
                                routerLink: ['/uikit/overlay']
                            }
                        ]
                    },
                    { label: 'Media', icon: 'pi pi-fw pi-image', setVisible:this.setVisible(0),routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', setVisible:this.setVisible(0),routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', setVisible:this.setVisible(0),routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file',setVisible:this.setVisible(0), routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar',setVisible:this.setVisible(0), routerLink: ['/uikit/charts'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', setVisible:this.setVisible(0),routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Pages',
                setVisible:this.setVisible(0),
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        setVisible:this.setVisible(0),
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        setVisible:this.setVisible(0),
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                setVisible:this.setVisible(0),
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                                
                            },
                            {
                                label: 'Error',
                                setVisible:this.setVisible(0),
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                setVisible:this.setVisible(0),
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        setVisible:this.setVisible(0),
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },
                    {
                        label: 'Not Found',
                        setVisible:this.setVisible(0),
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                    {
                        label: 'Empty',
                        setVisible:this.setVisible(0),
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                ]
            },
            
        ];

        this.removeInvisibleItems(this.model);
        
    }
     removeInvisibleItems(model) {
        function filterItems(items) {
            return items
                .filter(item => item.setVisible !== false)
                .map(item => {
                    if (item.items) {
                        item.items = filterItems(item.items);
                    }
                    return item;
                });
        }
    
        this.model = filterItems(model);
    }
    
}
