import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { uploadservice } from '../../service/uploadservice'
import { apiservice } from 'src/app/service/apiservice';

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
  constructor(private api: apiservice, private uploadService: uploadservice, private fb: FormBuilder, private modalService: BsModalService, private ck: CookieService, private router: Router) { }
  textform = this.fb.group({
    sectionCount: ''
  })
  titlesrc;
  writeform = this.fb.group({
    title: '',
    intro : '',
    cate: ''
  })
  contentform = this.fb.group({
    section: '',
    stitle : ''
  })

  content

  ngOnInit() {
    if(this.ck.get('LOGINID') != '둠비터'){
      this.router.navigate(['/home'])
    }
  }
  openModal(modal) {
    this.count = 0;
    this.modalRef = this.modalService.show(modal);
  }
  insert(){
    this.loading = true;
    this.count = this.textform.get('sectionCount').value
    this.content = new Array(Number(this.count));
    this.loading = false;
    console.log(this.content.length)
  }

  titleupload() {
    const file = this.selectedFiles.item(0);
    let result = this.uploadService.uploadFile(file);
    this.titlesrc = result
  }

  push(target : any){
    const file = this.selectedFiles.item(0);
    let result = this.uploadService.uploadFile(file);
    let data = {
      "section" : this.contentform.get('section').value,
      "stitle" : this.contentform.get('stitle').value,
      "img" : result
    }
    
    console.log(target)
    this.content[target] = data;
    console.log(this.content)
  }

  async upload(){
    let data = {
      "category" : this.writeform.get('cate').value,
      "titleimgsrc" : this.titlesrc,
      "intro" : this.writeform.get('intro').value,
      "title" : this.writeform.get('title').value,
      "content" : this.content,
      "use_plag" : "Y"
    }
    try {
      let res : any = await this.api.upload(JSON.stringify(data)).toPromise();
      this.router.navigate(['/home'])
    } catch (error) {
    }
  }
    
  selectFile(event) {
    this.selectedFiles = event.target.files;  
  }
}