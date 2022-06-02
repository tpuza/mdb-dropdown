import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmptyPageComponent } from "./empty.page";

@NgModule({
  declarations: [EmptyPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmptyPageComponent
      }
    ])
  ]
})
export class EmptyPageModule {

}
