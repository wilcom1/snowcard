import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'C'|'D'|'E'|'F'

@Component({
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent
    ],
    templateUrl: "./control-flow.component.html",
    styles: '',
})
export default class ControlFlowComponent { 
    public showContent = signal(false);
    public grade = signal<Grade>('A');

    public toggleContent(){
        this.showContent.update(value => !value);
        if(this.grade()==='A'){
            this.grade.set('B');
        }else if (this.grade()==='B'){
            this.grade.set('C');
        }else if (this.grade()==='C'){
            this.grade.set('F');
        }else if (this.grade()==='F'){
            this.grade.set('A');
        }
    }
}
