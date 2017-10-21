import { Component, Input } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-hijo',
    templateUrl: 'hijo.component.html',
    styleUrls: ['hijo.component.css']
})
export class HijoComponent {
    public nombre = 'Componente hijo';
    public plantilla = 'juan, pedro, laura';

    @Input()
    public prop1: string;

    saludar = () => {
        $('#saludo').slideToggle();
    }
}
