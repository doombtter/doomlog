import { Component, OnInit, OnDestroy } from "@angular/core";
import { apiservice } from '../../service/apiservice';
import { APIService } from '../../API.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  focus2;
  date = new Date();
  weather;
  pagination = 3;
  pagination1 = 1;
  constructor(private outapi : apiservice, private api : APIService, private router : Router) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  blog:any = [];
  list:any = [];
  pageload = false;

  async ngOnInit() {
    this.pageload = true;
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    await this.getweather()
    await this.getPostList()
    this.pageload = false;
  }

  async getPostList() {
    let data = {
      "cate" : "A"
    }
    try {
      let res : any = await this.outapi.list(JSON.stringify(data)).toPromise();
      this.list[0] = res[0]
      this.list[1] = res[1]
      this.list[2] = res[2]
    } catch (error) {
    }
  }
  getDate(date){
    return date.substring(0, 10)
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
  weatherinfo;

  ondo = 0;
  icon;

  move(id){
    this.router.navigate(['detail/' + id]);
  }

  async getweather(){
    try{
      let result : any = await this.outapi.getWeather("https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=").toPromise();

      this.ondo = Math.floor((result.main.temp - 273.15)*10)/10
    }catch(error){
    }
  }
}
