import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable()
export class MahasiswaService {

  parentUri = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  tambahMahasiswa(npm, nama, alamat, tanggallahir, jeniskelamin) {
    const uri = this.parentUri + 'mahasiswa';
    const obj = {
      npm: npm,
      nama: nama,
      alamat: alamat,
      tanggallahir: tanggallahir,
      jeniskelamin: jeniskelamin
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }
}