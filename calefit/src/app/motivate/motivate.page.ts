import { Component, OnInit } from '@angular/core';
 import { Router} from '@angular/router';

 import{ HttpClient} from '@angular/common/http';
 import { map } from 'rxjs/operators';


@Component({
  selector: 'app-motivate',
  templateUrl: './motivate.page.html',
  styleUrls: ['./motivate.page.scss'],
})
export class MotivatePage implements OnInit {

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
      .get("../../assets/files/motivate.json")
      .pipe(
        map((res:any) =>{
          return res.data;
        })
      )
    }
  
}
