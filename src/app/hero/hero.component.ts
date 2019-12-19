import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { APIService } from "../API.service";

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

  constructor(private modalService: BsModalService, private api: APIService) {}

  onCreateHeroListener = () => {
    this.api.OnCreateHeroListener.subscribe(
      result => {
        alert("Someone created a hero");
      },
      error => {
        throw error;
      }
    );
  };

  onDeleteHeroListener = () => {
    this.api.OnDeleteHeroListener.subscribe(
      result => {
        alert("Someone deleted a hero");
      },
      error => {
        throw error;
      }
    );
  };

  onUpdateHeroListener = () => {
    this.api.OnUpdateHeroListener.subscribe(
      result => {
        alert("Someone updated a hero");
      },
      error => {
        throw error;
      }
    );
  };

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
    try {
      const result = await this.api.ListHeros();
      this.heros = result.items;
    } catch (error) {
      alert("Something went wrong");
    }
  };

  createHero = async () => {
    try {
      const newHero = {
        name: this.name,
        power: this.power,
        status: true
      };
      const result = await this.api.CreateHero(newHero);
      this.heros.push({ ...newHero, id: result.id });
      this.closeModal();
    } catch (error) {
      alert("Something went wrong");
    }
  };

  update({ id, status }) {
    this.updateHero({
      id,
      name: this.name,
      power: this.power,
      status
    });

    this.closeModal();
  }

  updateHero = async hero => {
    try {
      await this.api.UpdateHero(hero);
      this.heros = this.heros.map(heroObj => {
        if (heroObj.id === hero.id) {
          return hero;
        }
        return heroObj;
      });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  deleteHero = async ({ id }) => {
    try {
      await this.api.DeleteHero({ id });
      this.heros = this.heros.filter(hero => hero.id !== id);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  searchHero = async () => {
    try {
      const result = await this.api.SearchHeros({
        name: { match: this.filterKey }
      });
      this.heros = result.items;
    } catch (error) {
      alert("Something went wrong");
    }
  };
}
