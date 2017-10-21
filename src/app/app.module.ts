import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { HijoComponent } from './components/hijo/hijo.component';

@NgModule({
    declarations: [
        AppComponent,
        FrutaComponent,
        PlantillaComponent,
        HijoComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
