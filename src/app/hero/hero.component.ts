import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  private heros: any;
  private filterKey: string;
  modalRef: BsModalRef;
  name: string;
  power: string;

  constructor(private modalService: BsModalService) {}

  onCreateHeroListener = () => {};

  onDeleteHeroListener = () => {};

  onUpdateHeroListener = () => {};

  async ngOnInit() {
    try {
      const result = await this.getHeroesList();
      this.onCreateHeroListener();
      this.onDeleteHeroListener();
      this.onUpdateHeroListener();
    } catch (error) {
      alert("Something went wrong");
    }
  }

  openModal(template: TemplateRef<any>, hero = undefined) {
    this.modalRef = this.modalService.show(template);
    if (hero) {
      this.name = hero.name;
      this.power = hero.power;
    }
  }

  closeModal() {
    this.name = "";
    this.power = "";
    this.modalRef.hide();
  }

  getHeroesList = async () => {
    return [];
  };

  createHero = async () => {
    const newHero = {
      name: this.name,
      power: this.power,
      status: true
    };
    console.log("newHero : ", newHero);
  };

  update({ id, status }) {
    const updatedHero = {
      id,
      name: this.name,
      power: this.power,
      status
    };
    console.log("updatedHero : ", updatedHero);
    this.closeModal();
  }

  deleteHero = async hero => {
    console.log("hero : ", hero);
  };

  searchHero = async () => {
    console.log("filterKey : ", this.filterKey);
  };
}
