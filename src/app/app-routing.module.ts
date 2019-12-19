import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: "heroes",
    component: HeroComponent
  },
  {
    path: "",
    component: AuthComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
