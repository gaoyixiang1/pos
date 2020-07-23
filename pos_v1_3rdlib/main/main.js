'use strict';
function printReceipt(inputs){
    var list=loadAllItems();
   var cartList = [list[1],list[3],list[5]];
for(var k = 0;k < cartList.length; k++){
  cartList[k].count=0;
}
  for (var m = 0; m < inputs.length; m++) {  
  for(var j = 0;j < cartList.length; j++){
    if(inputs[m]===cartList[j].barcode){
        cartList[j].count++;
      }
      if(inputs[m].substring(0,inputs[m].indexOf('-'))===cartList[j].barcode){
       
        var shu=inputs[m].substring(inputs[m].indexOf('-')+1,inputs[m].length);
  
        cartList[j].count=shu;
      }
    }
  }


  var discount=loadPromotions();
 for(var d=0;d<cartList.length;d++){
     cartList[d].save=0;
     cartList[d].dis=0;
     cartList[1].dis=2;
 }
  for(var a=0;a<cartList.length;a++){
   
          for(var c=0;c<3;c++){
          if(cartList[a].barcode===discount[0].barcodes[c]){
              if(cartList[a].count>=2){
                  cartList[a].dis=cartList[a].count;
                  cartList[a].count-=1;
                  cartList[a].save+=cartList[a].price;
              }
          }
      }
  } 
        var out='***<没钱赚商店>收据***\n';
        var s=0;
        var save=0;
        for(var i=0;i<cartList.length;i++){
            var sum=cartList[i].price*cartList[i].count;
            save+=cartList[i].save;
            s+=sum;
            out+='名称：'+cartList[i].name+
            '，数量：'+cartList[i].dis+cartList[i].unit+  
            '，单价：'+cartList[i].price.toFixed(2)+
            '(元)，小计：'+sum.toFixed(2)+'(元)'+'\n';
        }
        out+='----------------------'
        +'\n'+'总计：'+s.toFixed(2)+'(元)'+'\n'+'节省：'+save.toFixed(2)+'(元)'+'\n'
        + '**********************';
       console.log(out);
}
