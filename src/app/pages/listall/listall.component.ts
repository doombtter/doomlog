import { Component, OnInit, OnDestroy } from "@angular/core";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { apiservice } from "src/app/service/apiservice";
import { Router } from "@angular/Router";

@Component({
  selector: "app-list-all",
  templateUrl: "listall.component.html"
})
export class ListAllComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;

  POSTS : any;
  posts : any;

  collectionSize = 0;
  page = 1;
  pageSize = 6;

  pageload = false;

  constructor(private modalService: BsModalService, private fb : FormBuilder, private api : apiservice, private router: Router) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  async ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    await this.getPostList();
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  async getPostList() {
    let data = {
      "cate" : this.value
    }
    try {
      let res : any = await this.api.list(JSON.stringify(data)).toPromise();
      this.pageload = true;
      this.POSTS = res;
      this.collectionSize = res.length;
      this.getPagenation();
      this.pageload = false;
    } catch (error) {
    }
  }

  move(id){
    this.router.navigate(['detail/' + id]);
  }

  getPagenation() {
    this.posts = this.POSTS
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  openModal(modal) {
    this.value = "A";
    this.modalRef = this.modalService.show(modal);
  }
  value = "A";
  display = "전체";

   changeCate(event){
    this.value = event;
  }

  async category(){
    if(this.value == 'A')
    this.display = '전체'
    else if(this.value == 'AWS')
    this.display = 'AWS'
    else if(this.value == 'ALG')
    this.display = "Algorithm"

    await this.getPostList();
  }
  
  getDate(date){
    return date.substring(0, 10)
  }

  insert(){    
  }
}