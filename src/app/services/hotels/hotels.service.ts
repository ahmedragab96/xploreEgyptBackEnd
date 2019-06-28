import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  GetAllHotels() {
    return this.http.get('https://immense-cove-87813.herokuapp.com/hotels/getall');
  }

  getHotelByID(id) {
    return this.http.get('https://immense-cove-87813.herokuapp.com/hotels/getById?id=' + id);
  }

  addHotel(hotelDetails) {
    return this.http.post('https://immense-cove-87813.herokuapp.com/hotels/addhotel', hotelDetails).subscribe(data => {
      console.log('Hotel has been added successfully ', data);
    },
      error => { console.log('Error', error); });
  }

  deleteHotel (id) {
    return this.http.delete(`https://immense-cove-87813.herokuapp.com/hotels/delete/:id=${id}`);
  }
}
