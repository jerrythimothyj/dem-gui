import { Component, OnInit } from "@angular/core";

import { LanguageService } from "../../services/language.service";

@Component({
  selector: "top-nav-bar",
  templateUrl: "./top-nav-bar.component.html",
  styleUrls: ["./top-nav-bar.component.scss"]
})
export class TopNavBarComponent implements OnInit {
  topNavbarTexts: object;

  constructor(private languageService: LanguageService) {
    this.topNavbarTexts = {};
  }

  ngOnInit() {
    setTimeout(() => {
      this.topNavbarTexts = this.languageService.langTexts;
    });
  }
}