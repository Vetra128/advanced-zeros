module.exports = function getZerosCount(number, base) {
  // your implementation

    let numberN = base;
    let j = 2;
    let d = 0;
    let counter = 1;
    let record = 0;
    var a;
    let arr = new Array();
    let objMnozh = [];
   // document.write(number+" = ");

    while(j<=numberN) {
        while(numberN%j==0) {
            numberN = numberN/j;
            arr[d] = j;
            d++;
            if(numberN==1) {
                break;
            }
        }
        j++;
    }
    for(var i = 0; i < arr.length; i++) {
        while (arr[i]==arr[i+1]) {
            counter++;
            record = arr[i];
            arr.splice(i+1, 1);
        }
        if(arr[i] == record) {

            // document.write(arr[i]+"<sup>"+ counter +"</sup> ");
        }else {
           // document.write(arr[i]+" ");
        }
        if(i != arr.length-1) {
          //  document.write(" * ");
        }
        objMnozh.push({baseN : arr[i], baseStep: counter});
        counter = 1;
    }

    const finalArray = objMnozh.map((item, index) => {
        let tempSum = 0;
        let tempNumberItem = item.baseN;
        while (number > tempNumberItem) {
            tempSum = tempSum + Math.floor(number/tempNumberItem);
            tempNumberItem = tempNumberItem*item.baseN;
        }
        return Math.floor(tempSum/item.baseStep);
    });

    return Math.min(...finalArray);
    // return objMnozh;
}

