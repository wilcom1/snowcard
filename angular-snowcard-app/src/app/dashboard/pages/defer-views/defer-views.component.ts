import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>defer-views works!</p>`,
    styles: '',
})
export default class DeferViewsComponent { }
