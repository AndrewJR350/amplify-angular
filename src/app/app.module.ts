import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeroComponent } from "./hero/hero.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, HeroComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
