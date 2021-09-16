import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiservice } from '../../service/apiservice'

@Component({
  selector: 'app-pagedetail',
  templateUrl: './pagedetail.component.html',
  styleUrls: ['./pagedetail.component.scss']
})
export class PagedetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router, private api : apiservice) { }
  title;
  date;
  section:any = []
  pageload = false

  async ngOnInit() {
    let pagenum = this.route.snapshot.paramMap.get('page')
    await this.getDetails(Number(pagenum));
  }

  async getDetails(page: number){
    let data = {
      "target" : page
    }

    try {
      let res : any = await this.api.target(JSON.stringify(data)).toPromise();
      this.title = res.title;
      this.date = res.date.substring(0, 10)
      this.pageload = true;
      this.section = res.content;
      this.pageload = false;
    } catch (error) {
    }
  }
}