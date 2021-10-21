import { Component, OnInit } from '@angular/core';
 import { Router} from '@angular/router';

 import{ HttpClient} from '@angular/common/http';
 import { map } from 'rxjs/operators';

@Component({
  selector: 'app-informate',
  templateUrl: './informate.page.html',
  styleUrls: ['./informate.page.scss'],
})
export class InformatePage implements OnInit {

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
      .get("../../assets/files/informate.json")
      .pipe(
        map((res:any) =>{
          return res.data;
        })
      )
    }
  
}