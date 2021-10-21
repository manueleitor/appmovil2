import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';

import{ HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ejercitate',
  templateUrl: './ejercitate.page.html',
  styleUrls: ['./ejercitate.page.scss'],
})
export class EjercitatePage implements OnInit {

  rutins: any[];


  constructor(
    private router: Router,
    private http: HttpClient
  ) { } 

  ngOnInit() {
    console.log("holaa");
    this.getrutins().subscribe(res=>{
      console.log("Res",res)
      this.rutins= res;
    })
  }

    goTogHome(){
      this.router.navigate(['/home'])
    }
    getrutins(){
      return this.http
      .get("../../assets/files/ejercitate.json")
      .pipe(
        map((res:any) =>{
          return res.data;
        })
      )
    }
  }
    


