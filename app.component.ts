import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Component } from '@angular/core';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],

})
export class AppModule { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lap1';
  name: string = 'Trường CD CNTT Tp.HCM';
  nambd: number = 2001;
  namht: number = 2023
  isReadonly = false;
  a:any
  b:any
  c:any
  d:any
  e:any
  f:any
  g:any
  i:any
  t:any
  k:any
  l:any
  aa:any
  bb:any
  cc:any
  nghiem1:any 
  nghiem2:any
  delta:number=0
  selectedEquation: string = '';
  readOnly() {
    this.isReadonly = !this.isReadonly;
  }
  Sum(){
    return parseInt(this.a) + parseInt(this.b);
  }
   
  Max(){
    if(parseInt(this.c)>parseInt(this.d)){
      return this.c;
    }
    else{
      return this.d;
    }
  }
  Maxx(){
    if(parseInt(this.e)>parseInt(this.f)&&parseInt(this.e)>parseInt(this.g)){
      return this.e;
    }
    else if(parseInt(this.f)>parseInt(this.e)&&parseInt(this.f)>parseInt(this.g)){
      return this.f;
    }
    else{
      return this.g;
    }
  }
  td(){
  if(this.e>this.f){
    this.i=this.e;
    this.e=this.f;
    this.f=this.i;
  }
  if(this.f>this.g){
    this.i=this.f
    this.f=this.g;
    this.g=this.i
  }
  if(this.e>this.f){
    this.i=this.e;
    this.e=this.f;
    this.f=this.i;
  }
  return this.e+","+this.f+","+this.g;
  }
  ptb1(){
    if(parseFloat(this.t)>0||parseFloat(this.t)<0){
      this.l = -parseFloat(this.k)/(this.t)
      return this.l;
    }
    else{
      return "Phương trình bậc 1 vô nghiệm"
    }
  }
  ptb2(){
     this.delta =(this.bb)*(this.bb)-4*(this.aa)*(this.cc)
     console.log("x="+this.delta)
     if(this.delta<0){
      return "Phương trình vô nghiệm"
     }
     if(this.delta==0){
      return "Phương trình có nghiệm kép x1 = x2 = "+(-(this.bb)/(2*(this.aa)))
     }
     else{
      return "Phương trình có 2 nghiệm phân biệt: x1 = " + (-(this.bb) + Math.sqrt(this.delta)) / (2 * this.aa) + " và x2 = " + (-(this.bb) - Math.sqrt(this.delta)) / (2 * this.aa);
    }
  }
  issReadonly = true;
  isDisabled = true;
  toggleReadonly() {this.isReadonly = !this.isReadonly;}
  toggleDisabled() {this.isDisabled = !this.isDisabled}
  myClick() {alert('Hello ITC')}
}
