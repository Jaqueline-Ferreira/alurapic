import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';

@NgModule({
    declarations: [PhotoComponent],
    imports: [ CommonModule,
        HttpClient 
    ]
})
export class PhotoModule { }