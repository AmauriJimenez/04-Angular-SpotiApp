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
      'Authorization' : 'Bearer BQAPztuCMGDFC6t0U7XoZEQHIyOGMVibREXsIzEOFfucZ_gQcTOnDHLnQHWWOtDkogdtjnbplVAoyT8W7B9UWE3WJbh3ZMpuU4NG9AOGRI4HncBuOVjvFhh-PjrfrGRMmx-5vT-i9upM'
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
