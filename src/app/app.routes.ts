import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { HizmetlerimizComponent } from './pages/hizmetlerimiz/hizmetlerimiz.component';
import { FiyatlarComponent } from './pages/fiyatlar/fiyatlar.component';
import { DeneyimlerComponent } from './pages/deneyimler/deneyimler.component';
import { IletisimComponent } from './pages/iletisim/iletisim.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

export const routes: Routes = [
  { path: 'anasayfa', component: AnasayfaComponent },
  { path: 'hizmetlerimiz', component: HizmetlerimizComponent },
  { path: 'fiyatlar', component: FiyatlarComponent },
  { path: 'deneyimler', component: DeneyimlerComponent },
  { path: 'iletisim', component: IletisimComponent },
  { path: 'impressum', component: ImpressumComponent },

  // Default redirect
  { path: '', redirectTo: '/anasayfa', pathMatch: 'full' },

  // Wildcard for unknown routes
  { path: '**', redirectTo: '/anasayfa' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      errorHandler: (error) => {
        console.error('Navigation error:', error);
      }
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
