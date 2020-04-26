import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()

export class SpotifyService {
  nuevosAlbumes: any [] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio Spotify Listo')
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQC6Xzvc6NJT1rAJm_IjjlwrPSqcSinqyVLbeLGTi00_J552ZS9wG5aZo4FH-pInDonZ1IlO7zsX2mzPJnodtg6N7tMdcye24Fi_UAPNwISTr74y4Cr9q_O4dbXju95dfMeEeSzVe710'
    });

    return this.http.get(url,{ headers })
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items));
  }

  getArtistas (termino: string){    
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data => data['artists'].items));
  };

  getArtista(termino: string){
    return this.getQuery(`artists/${ termino }`)
  }

  getTopTracks(termino: string){
    return this.getQuery(`artists/${ termino }/top-tracks?country=us`).pipe(map(data => data['tracks']));
  }
}
