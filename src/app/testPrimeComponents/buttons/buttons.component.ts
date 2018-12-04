import { Component, OnInit, Pipe, Directive } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { MenuItem } from 'primeng/components/common/menuitem';




@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  message = '';
  items: MenuItem[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

     this.fillMenuItems();
  }

  fillMenuItems() {
    this.items = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] }
    ];

  }

  delete() {
      console.log('Delete');
  }

  update() {
      console.log('Update');
  }


  returnHome() {
    this.router.navigate(['/home', { id: 'testbutton', foo: 'foo'}]);
    console.log('Return to home');

  }

  // PrimeNG Split Button
  save(): void {

      console.log('You just pressed the save button for the split button');



  }








}
