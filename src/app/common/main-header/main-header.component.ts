import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/entities/banner';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  listaBanner: Banner[];
  constructor(private bannerService: PromocionService) { }

  ngOnInit(): void {
    this.bannerService.bannerSelect().subscribe(
      (res:Banner[]) => {
        this.listaBanner = res;
        console.log(res);
      }
    )
  }

}
