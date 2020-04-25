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
      'Authorization' : 'Bearer BQAkIIHsB0Fuk_xf0QYtXZ7TD7nVqETP5h_WqMSnD0rjjhK-0WHVlZ1JXtEy6xqsGyIJGrNbC8BoCPbJ4EOEqQE-NkECkgPGXu1F6fjdU5nXwTcN9GuLmKTMoc7S1m0XKxpKUUKcqiMX'
    });

    return this.http.get(url,{ headers })
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items));
  }

  getArtista (termino: string){    
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data => data['artists'].items));
  };
}
