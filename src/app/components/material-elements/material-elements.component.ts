import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'material-elements',
  templateUrl: './material-elements.component.html',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  styleUrls: ['./material-elements.component.scss']
})
export class MaterialElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
