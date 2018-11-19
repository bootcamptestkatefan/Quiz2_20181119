    module.exports = function main(inputs) {
        var resultArr = [];
        var total =0;
        for (var i=0; i<inputs.length;i++){
          var item = inputs[i];
          if (resultArr[item.Barcode]){
            resultArr[item.Barcode].Subtotal += item.Price;
            resultArr[item.Barcode].Quantity ++;
          }
          else {
            // You create an object here, all left hand side is the attribute you defined to the new object
            resultArr[item.Barcode]={
              Barcode: item.Barcode,
              Name: item.Name,
              Unit: item.Unit,
              Subtotal: item.Price,
              Quantity: 1,
              Price: item.Price
            };
          }
          total += item.Price;
        }

        var result = '***<store earning no money>Receipt ***\n'
        var result3 = '----------------------\n' + 'Total: ' +total.toFixed(2) + ' (yuan)\n' + '**********************\n';
        var result2 = '';
        var keys = Object.keys(resultArr)
        for (var i=0; i<keys.length; i++) {
          var key = keys[i];
          var x = resultArr[key];
           result2 = result2 +
                      'Name: ' + x.Name +
                      ', Quantity: ' + x.Quantity + ' ' + (x.Quantity > 1 ? x.Unit + 's' : x.Unit) +
                      ', Unit price: ' + x.Price.toFixed(2) +
                      ' (yuan), Subtotal: ' + x.Subtotal.toFixed(2) + ' (yuan)' + '\n';
        }
        return result + result2 + result3;
    }