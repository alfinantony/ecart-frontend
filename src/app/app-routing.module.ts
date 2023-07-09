import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) 
},
{
  path:'',redirectTo:'products',pathMatch:'full'
},
{
  path:'**',component:PageNoteFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
