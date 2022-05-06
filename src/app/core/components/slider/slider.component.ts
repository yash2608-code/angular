import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-slider-component',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
    @Input()
    slide: [];
}
