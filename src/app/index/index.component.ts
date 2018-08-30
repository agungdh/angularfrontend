import { MahasiswaService } from '../mahasiswa.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  mahasiswa: any;

  constructor(private http: HttpClient, private service: MahasiswaService) {}

  ngOnInit() {
    this.ambilMahasiswa();
  }

  ambilMahasiswa() {
    this.service.ambilMahasiswa().subscribe(res => {
      	let semuaMahasiswa: object[] = [];
	    for (let keyRes in res) {
	    	let satuMahasiswa: {} = res[keyRes];

	    	var satuMahasiswaJadi:any = {};
	    	for (let keySatuMahasiswa in satuMahasiswa) {
	    		switch (keySatuMahasiswa) {
	    			case "npm":
	    				satuMahasiswaJadi.npm = satuMahasiswa[keySatuMahasiswa];
	    				break;
	    			
	    			case "nama":
	    				satuMahasiswaJadi.nama = satuMahasiswa[keySatuMahasiswa];
	    				break;
	    			
	    			case "alamat":
	    				satuMahasiswaJadi.alamat = satuMahasiswa[keySatuMahasiswa];
	    				break;
	    			
	    			case "tanggallahir":
	    				satuMahasiswaJadi.tanggallahir = satuMahasiswa[keySatuMahasiswa];
	    				break;
	    			
	    			case "jeniskelamin":
	    				if (satuMahasiswa[keySatuMahasiswa] == 'l') {
	    					satuMahasiswaJadi.jeniskelamin = 'Perempuan';
	    				} else if (satuMahasiswa[keySatuMahasiswa] == 'p') {
	    					satuMahasiswaJadi.jeniskelamin = 'Laki-Laki';
	    				} else {
	    					satuMahasiswaJadi.jeniskelamin = 'ERROR !!!';
	    				}
	    				break;
	    			
	    			default:
	    				
	    				break;
	    		}
	    	}
    		semuaMahasiswa.push(satuMahasiswaJadi);
		}

      this.mahasiswa = semuaMahasiswa;

    });
  }
}