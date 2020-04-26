import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevosAlbumes: any [] = [];
  loading: boolean;
  alertaError: boolean;
  msgError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;    
    this.spotify.getNewReleases()
      .subscribe( (data:any) =>{         
        console.log(data);
        this.nuevosAlbumes = data;
        this.loading = false;
    },(errorServicio) =>{ 
        this.loading = false;
        this.alertaError = true;
        this.msgError = errorServicio.error.error.message;
      }
    );
  }


}
