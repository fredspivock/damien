import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/about', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ], {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
