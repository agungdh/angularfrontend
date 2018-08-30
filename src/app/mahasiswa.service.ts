import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable()
export class MahasiswaService {

  constructor(private http: HttpClient) { }

  tambahMahasiswa(npm, nama, alamat, tanggallahir, jeniskelamin) {
    const uri = 'http://localhost:4000/mahasiswa';
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