import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { ListAllComponent } from "./pages/listall/listall.component";
import { PagedetailComponent } from './pages/pagedetail/pagedetail.component';
import { WriteComponent } from './pages/write/write.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "list-all", component: ListAllComponent },
  { path: "detail", component: PagedetailComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "login", component: RegisterpageComponent},
  { path: "insertboard", component: WriteComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
