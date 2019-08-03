import { Component } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';

@Component({
    selector    :   'app-admin',
    templateUrl :   './admin.component.html',
    styleUrls   :   ['./admin.component.css']
})
export class AdminComponent{
    adminForm   :   FormGroup;
    ngOnInit(){
    this.adminForm = new FormGroup({
        adminId     :   new FormControl(),
        password    :   new FormControl()   
    });
}
}