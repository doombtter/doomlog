import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { apiservice } from '../../service/apiservice';
import { APIService } from '../../API.service';

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
  constructor(private outapi : apiservice, private api : APIService) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  blog:any = [];

  async ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    await this.getweather();

    let list = await this.api.ListBlogs();
    this.blog = list.items;

    //
    // const data ={
    //   name : Math.floor(Math.random() * 100) + "A"
    // }

    // let result = await this.api.CreateBlog(data);

    // this.blog.push(result);
    // console.log(result);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
  weatherinfo;

  ondo = 0;
  icon;

  async getweather(){
    try{
      let result : any = await this.outapi.getWeather("http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=").toPromise();

      this.ondo = Math.floor((result.main.temp - 273.15)*10)/10
    }catch(error){
    }
  }
}
