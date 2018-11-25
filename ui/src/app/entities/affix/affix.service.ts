import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AffixResponse } from './affix.response';

import {
  AFFIX_SAVE_URL,
  AFFIX_LIST_URL,
  AFFIX_DELETE_URL
} from '../../app.constants';

@Injectable()
export class AffixService {

  private saveAffixUrl = AFFIX_SAVE_URL;
  private listAffixUrl = AFFIX_LIST_URL;
  private deleteAffixUrl = AFFIX_DELETE_URL;

  constructor(private http: HttpClient) {
  }

  save(data) {
    return this.http.post<AffixResponse>(data, this.saveAffixUrl);
  }

  list() {
    return this.http.get<AffixResponse>(this.listAffixUrl);
  }

  delete(data) {
    return this.http.post(data, this.deleteAffixUrl);
  }
}
