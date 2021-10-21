import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import{ HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {

  users: any = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    console.log("holaa");
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users= res;
    })
  }

    goTogHome(){
      this.router.navigate(['/home'])
    }
    getUsers(){
      return this.http
      .get("../../assets/files/rutinas.json")
      .pipe(
        map((res:any) =>{
          return res.data;
        })
      )
    }
  
}
