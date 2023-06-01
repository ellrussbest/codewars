let number = 1990;
let str = "";

while(number > 0) {
    if(number >= 1000) {
        str += "M";
        number = number - 1000;
        
    }else if (number >= 500 && number < 1000) {
        
        if(number >= 900) {
            str += "CM"; 
            number = number - 900;
        }else {
            str += "D";
            number = number - 500;
        }
        
    }else if(number >= 100 && number < 500) {
        
        if(number >= 400) {
            str += "CD";
            number = number - 400;
        }else {
            str += "C";
            number = number - 100;
        }

    }else if(number >= 50 && number < 100) {
        
        if(number >= 90) {
            str += "XC";
            number = number - 90;
        }else {
            str += "L"
            number = number - 50;
        }

    }else if(number >= 10 && number < 50) {
        
        if(number >= 40) {
            str += "XL";
            number = number - 40;
        }else {
            str += "X";
            number = number - 10;
        }

    }else if (number >= 5 && number < 10) {
        
        if(number >= 9) {
            str += "IX";
            number = number - 9;
        }else {
            str += "V";
            number = number - 5;
        }

    }else if(number >= 1 && number < 5) {
        if(number >= 4) {
            str += "IV";
            number = number - 4;
        }else {
            str += "I";
            number = number - 1;
        }
    }
}

console.log(str)
