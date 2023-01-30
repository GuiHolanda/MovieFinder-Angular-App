import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, PagesRoutingModule, ComponentsModule],
})
export class PagesModule {}
