import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from "ngx-cookie-service";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";

import { IndexComponent } from "./index/index.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";
import { ListAllComponent } from "./listall/listall.component";
import { CProfileComponent } from '.././common/c-profile/c-profile.component';
import { FooterComponent } from '.././common/footer/footer.component';
import { NavbarComponent } from '.././common/navbar/navbar.component';

import { apiservice } from "../service/apiservice";
import { uploadservice } from "../service/uploadservice";
import { PagedetailComponent } from './pagedetail/pagedetail.component';
import { WriteComponent } from './write/write.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AmplifyAngularModule,
  ],
  declarations: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    CProfileComponent,
    LandingpageComponent,
    ListAllComponent,
    FooterComponent,
    NavbarComponent,
    PagedetailComponent,
    WriteComponent,
  ],
  exports: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    ListAllComponent
  ],
  providers: [apiservice, uploadservice, AmplifyService, CookieService]
})
export class PagesModule {}
