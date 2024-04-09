import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import any components, directives, or pipes you want to include in the SharedModule
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { InputComponent } from '../components/input/input.component';
import { SelectComponent } from '../components/select/select.component';

@NgModule({
  declarations: [
    FooterComponent,
    MenuBarComponent,
    InputComponent,
    SelectComponent,
    // Add any other components, directives, or pipes here
  ],
  imports: [
    CommonModule,
    // Add any other modules that SharedModule depends on here
  ],
  exports: [
    FooterComponent,
    CommonModule,
    MenuBarComponent,
    InputComponent,
    SelectComponent,
    // Export any components, directives, or pipes that you want to use in other modules
  ],
})
export class SharedModule {}
