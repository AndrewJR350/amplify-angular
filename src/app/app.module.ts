import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeroComponent } from "./hero/hero.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, NavbarComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AmplifyAngularModule,
    ModalModule.forRoot()
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
