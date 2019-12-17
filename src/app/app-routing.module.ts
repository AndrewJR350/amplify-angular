import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "heroes",
    component: HeroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
