import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  user:any;

  constructor(private http:HttpClient) {}

ngOnInit() {
    this.getuser();

}

getuser(){
    this.http.get('http://127.0.0.1:8000/api/userview')
   .subscribe(res => {
     this.user = res;
     console.log(this.user);
   }, err => {
        alert('Error: ' + err)
   })
}

}
