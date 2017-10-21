import { Component } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: 'fruta.component.html',
    styleUrls: [
        'fruta.component.css'
    ]
})
export class FrutaComponent {
    nombre = 'Componente de fruta';
    frutas = 'peras, manzanas, lo que seas';
    saludar = () => {
        alert('hola mundo');
    }
}
