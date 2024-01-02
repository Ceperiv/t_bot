import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ApiService} from "./services/api.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent{
    title = 't_bot';
    data$ = inject(ApiService).getData()
    isClicked:boolean = false

constructor() {
    console.log(inject(ApiService).getData(), 22222)
}
onClick() {
        this.isClicked = !this.isClicked
}
}
