import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails =[ 
    {
      id:1,
      foodName:"fishPaneer",
      foodPrice:70,
      foodImg:"../../assets/images/fish_paneer.jpg"
    },
    {
      id:2,
      foodName:"fish",
      foodPrice:50,
      foodImg:"../../assets/images/fish.jpg"
    },
    {
      id:3,
      foodName:"france",
      foodPrice:100,
      foodImg:"../../assets/images/France.jpg"
    },
    {
      id:4,
      foodName:"Chicken",
      foodPrice:80,
      foodImg:"../../assets/images/stylish_chicken.jpg"
    },
    {
      id:5,
      foodName:"VeggiSalad",
      foodPrice:50,
      foodImg:"../../assets/images/veg_salad.jpg"
    },
    {
      id:5,
      foodName:"VeggiSaladCorn",
      foodPrice:55,
      foodImg:"../../assets/images/veggie_salad.jpg"
    }

    

  ]


}
