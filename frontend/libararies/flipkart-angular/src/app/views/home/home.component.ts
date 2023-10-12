import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
img1:any="../../../assets/5.jpg"
apidata:any=[{image:''}]
ngOnInit():void{
  fetch('https://fakestoreapi.com/products')
  .then((data)=>{return data.json()})
  .then((data)=>{console.log(data);this.apidata=data;console.log(this.apidata) })
}

}
