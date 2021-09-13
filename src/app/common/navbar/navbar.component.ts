import { Component, OnInit, OnDestroy } from "@angular/core";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private ck: CookieService) { }
  user
  ngOnInit(): void {
    if(this.ck.get('LOGINID').length > 0) this.user = this.ck.get('LOGINID')
    else this.user = "방문자";
  }

  openModal(modal) {
    this.modalRef = this.modalService.show(modal);
  }
}
