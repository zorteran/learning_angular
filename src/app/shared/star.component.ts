import { Component, OnChanges, Input, EventEmitter, Output } from "../../../node_modules/@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StartComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges():void{
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void{
        this.ratingClicked.emit(`the rating ${this.rating} was clicked!`)
    }

    
}