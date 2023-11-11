import { Component } from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {SideNavComponent} from "../components/side-nav/side-nav.component";
import {MobileFooterComponent} from "../components/mobile-footer/mobile-footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
      <div class="bg-base-100/80 h-full">
          <section>
              <div class="navbar bg-base-300 rounded-t-box rounded-br-box shadow-xl">
                  <a class="btn btn-accent normal-case text-xl">
                      <img class="w-6 h-6" src="/registration-pictogram-2-svgrepo-com.svg" />
                      <p class="logo text-4xl">matt v</p>
                  </a>
              </div>
          </section>
          <app-side-nav class="sidebar"></app-side-nav>
        <app-mobile-footer></app-mobile-footer>
      </div>
  `,
  styles: [
    `
      .sidebar {
        height: 95%;
      }
    `,
  ],
  imports: [
    NgClass,
    NgIf,
    NgOptimizedImage,
    SideNavComponent,
    MobileFooterComponent
  ]
})
export default class HomeComponent {
  count = 0;
  public expanded = false;

  increment() {
    this.count++;
  }

  toggleSidebar() {
    this.expanded = !this.expanded;
  }
}
