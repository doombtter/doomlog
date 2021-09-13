import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { apiservice } from "src/app/service/apiservice";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  textform = this.fb.group({
    id: '',
    code: ''
  })
  constructor(private router: Router, private fb: FormBuilder, private api: apiservice, private ck: CookieService) {}
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    this.ck.set('LOGINID', '')
    this.ck.set('SSO_UUID', '')

    this.onMouseMove(event);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  async tryLogin(){
    let id = this.textform.get('id');
    let code = this.textform.get('code');
    if(id.value == "" || code.value == ""){
        alert("입력을 완료해 주십시오.");
    }else{
        let data = {
            "id" : id.value,
            "accesscode" : code.value,
        }
        await this.api.login(JSON.stringify(data))
        .subscribe((res : any) =>{
            if(res.MESSAGE == "SUCCESS"){
                this.router.navigate(['/home'])
                let time = new Date();
                time.setHours(time.getHours() + 1);
                this.ck.set('LOGINID', res.LOGINID, time)
                this.ck.set('SSO_UUID', res.SSO_UUID, time)
            }
            else{
                alert("잘못된 접근");
            }
        })
    }
  }
}
