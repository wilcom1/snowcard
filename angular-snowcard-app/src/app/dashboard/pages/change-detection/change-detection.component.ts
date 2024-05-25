import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>change-detection works!</p>`,
    styles: ''
})
export default class ChangeDetectionComponent { }
