import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-list-all",
  templateUrl: "listall.component.html"
})
export class ListAllComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private fb : FormBuilder) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    // var slider = document.getElementById("sliderRegular");

    // noUiSlider.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider2 = document.getElementById("sliderDouble");

    // noUiSlider.create(slider2, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  openModal(modal) {
    this.value = "ALL";
    this.modalRef = this.modalService.show(modal);
  }
  value = "";
  display = "전체";

  changeCate(event){
    this.value = event;
  }

  category(){
    if(this.value == 'ALL')
    this.display = '전체'
    else if(this.value == 'LIFE')
    this.display = '일상'
  }

  insert(){
    
  }
}