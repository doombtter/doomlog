import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { uploadservice } from '../../service/uploadservice'

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  modalRef: BsModalRef;
  loading: boolean = true;
  selectedFiles: FileList;
  count = 0;
  constructor(private uploadService: uploadservice, private fb: FormBuilder, private modalService: BsModalService, private ck: CookieService, private router: Router) { }
  textform = this.fb.group({
    sectionCount: ''
  })
  ngOnInit() {
    if(this.ck.get('LOGINID') != '둠비터'){
      this.router.navigate(['/home'])
    }
  }
  openModal(modal) {
    this.modalRef = this.modalService.show(modal);
  }
  insert(){
    this.count = this.textform.get('sectionCount').value
    this.loading = false;
  }
  upload() {
    const file = this.selectedFiles.item(0);
    let result = this.uploadService.uploadFile(file);
    console.log(result)
  }
    
  selectFile(event) {
    this.selectedFiles = event.target.files;  
  }
}