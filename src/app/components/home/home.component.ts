import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //  const data = this.route.paramMap.pipe(
    //     switchMap((params: ParamMap) => params.get('id')));
     let data = '';
     this.route.params.subscribe(params => {
         data = params['id'];
     });


    console.log(`Your current data is: ${data} ${new Date().toTimeString()}`);

  }


}
