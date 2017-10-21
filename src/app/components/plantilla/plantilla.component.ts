import { Component } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-plantilla',
    templateUrl: 'plantilla.component.html',
    styleUrls: ['plantilla.component.css']
})
export class PlantillaComponent {
    nombre = 'Componente de plantilla';
    plantilla = 'juan, pedro, laura';
    saludar = () => {
        $('#saludo').slideToggle();
    }
}
