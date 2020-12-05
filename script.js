var vm = new Vue({
  el:"#app",
  data:{
      minPrice:50,
      maxPrice:7000,
      keyWord:"",
      cards:[
        {
          title:"Amory",
          color:"BLACK",
          cover:"https://www.shoex.com.tw/upload/1/product/1566963739_1.png?v=1606452929",
          gender:"Female",
          price:5880,
          soldOut: false
        },
        {
          title:"Jorge C",
          color:"BLACK",  cover:"https://www.shoex.com.tw/upload/1/product/1566964121_1.png?v=1606453048",
          gender:"Male",
          price:5480,
          soldOut: false
        },
        {
          title:"1460",
          color:"GREEN", 
          cover:"https://www.shoex.com.tw/upload/1/product/1579056385_1.png?v=1606453098",
          gender:"Unisex",
          price:6480,
          soldOut: false
        },
        {
          title:"1461",
          color:"OXBLOOD",  cover:"https://www.shoex.com.tw/upload/1/product/1602838040_1.png?v=1606453135",
          gender:"Unisex",
          price:5880,
          soldOut: false
        },
        {
          title:"GRYPHON",
          color:"BLACK", 
          cover:"https://www.shoex.com.tw/upload/1/product/1557114747_1.png?v=1606453182",
          gender:"Unisex",
          price:5680,
          soldOut: false
        },
        {
          title:"2976 Pop",
          color:"BLACK",  cover:"https://www.shoex.com.tw/upload/1/product/1579023330_1.png?v=1606453213",
          gender:"Unisex",
          price:6680,
          soldOut: false
        },
        {
          title:"Church",
          color:"BLACK",  cover:"https://www.shoex.com.tw/upload/1/product/1599550908_1.png?v=1606453272",
          gender:"Unisex",
          price:6280,
          soldOut: false
        },
        {
          title:"ADRIAN",
          color:"CHERRY RED", cover:"https://www.shoex.com.tw/upload/1/product/1536594139_1.png?v=1606454995",
          gender:"Unisex",
          price:6480,
          soldOut: false
        }]
  }
  
});