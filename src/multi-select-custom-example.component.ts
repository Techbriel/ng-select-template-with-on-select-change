import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
    selector: 'multi-select-custom-example',
    templateUrl: './multi-select-custom-example.component.html',
    styleUrls: ['./multi-select-custom-example.component.scss']
})
export class MultiSelectCustomExampleComponent implements OnInit {
    condition = true;
    githubUsers$: Observable<any[]>;
    selectedUsers = [];
    virtueSelected: boolean = false
    motocycleSelected: boolean = false

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.githubUsers$ = this.dataService.getGithubAccounts('anjm');

        console.log(this.selectedUsers, 'this is a selected user')
    }

    
    onCarSelect(eventData: any){
        if(eventData == 'anjm'){
            this.virtueSelected == true
            console.log('virtueSelected is true now')
        }
        else{
            this.motocycleSelected == true;
            console.log('motorcycle was selected')
        }
      console.log("CHANGE EVENT DATA:", eventData);
      console.log(this.selectedUsers, 'new user selected')
      
    }
    
}
