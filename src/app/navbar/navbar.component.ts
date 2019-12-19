// import { Auth } from "aws-amplify";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  async logout() {
    try {
      await Auth.signOut({ global: true });
      this.router.navigate(["/"]);
    } catch (error) {
      console.error(error);
    }
  }
}
