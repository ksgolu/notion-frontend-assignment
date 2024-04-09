import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { SharedModule } from '../shared/shared.module';

// import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { ImageCardComponent } from '../components/image-card/image-card.component';
// import { FooterComponent } from '../components/footer/footer.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [HomePage, ImageCardComponent],
})
export class HomePageModule {}
