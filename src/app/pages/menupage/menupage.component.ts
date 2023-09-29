import { OrderDetailsService } from './../../services/order-details.service';
import { Component,Inject,KeyValueDiffers,OnInit} from '@angular/core';
import{ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {
  constructor(@Inject(ActivatedRoute)private param:ActivatedRoute,private service:OrderDetailsService) {}
  getMenuId:any;
  menuData:any;
  ngOnInit():void{
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getMenu');
    if(this.getMenuId)
    {
       this.menuData=this.service .foodDetails.filter((value)=>{
         return value.id==this.getMenuId;

       });
       console.log(this.menuData,'menuData')
    }
  }
}
