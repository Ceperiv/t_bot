import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Observable} from "rxjs";

import {ApiService} from "./services/api.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 't_bot';
    isClicked: boolean = false;
    apiService = inject(ApiService);
    user$ = this.apiService.getTelegramUser();
    telegramData = this.apiService.telegramData();


    constructor() {
    }

    onClick() {
        this.isClicked = !this.isClicked
    };
}
