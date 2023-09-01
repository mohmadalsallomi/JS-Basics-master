
const stringSize = (text) => {
    return text.length
}
const replaceCharacterE = (text) => {

    return text.replace('e', ' ')
}
const concatString = (text1, text2) => {
   
    return text1+text2
}
const showChar5 = (text) => {
    return text.charAt(4)
    
}
const showChar9 = (text) => {
    return text.slice(0,9)

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {

    return text.toLowerCase();
}
const removeSpaces = (text) => {

    return text.trim();
}
const IsString = (text) => {
    return typeof(text)==="string"

}

const getExtension = (text) => {
    const parts = text.split('.');
    const extension = parts[parts.length - 1];
  
    return extension;
  }
  
  const countSpaces = (text) => {
    const words = text.split(' ');
    const spaceCount = words.length - 1;
  
    return spaceCount;
  }
  
  const InverseString = (text) => {
    const reversedText = text.split('').reverse().join('');
  
    return reversedText;
  }
  
  const power = (base, exponent) => {
    const result = Math.pow(base, exponent);
    
    return result;
  }
  
  const absoluteValue = (number) => {
    const result = Math.abs(number);
  
    return result;
  }
  
  const absoluteValueArray = (numbers) => {
    const result = numbers.map((number) => Math.abs(number));
  
    return result;
  }
  
  const circleSurface = (radius) => {
    const surfaceArea = Math.PI * radius * radius;
    const roundedSurfaceArea = Math.round(surfaceArea);
  
    return roundedSurfaceArea;
  }
  
  const hypothenuse = (a, b) => {
    const squareA = a * a;
    const squareB = b * b;
    const sumOfSquares = squareA + squareB;
    const hypotenuse = Math.sqrt(sumOfSquares);
  
    return hypotenuse;
  }
  
  const BMI = (weight, height) => {
    const bmi = weight / (height * height);
  
    const roundedBMI = parseFloat(bmi.toFixed(2));
  
    return roundedBMI;
  }
  

  const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"];
  }
  

  const createNumbersArray = () => {
    const numbers = [];
    for (let i = 0; i <= 5; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  

  const replaceElement = (arr) => {
    if (arr.length >= 3) {
      arr[2] = "Javascript";
    }
    return arr;
  }
  

  const addElement = (languages) => {
    languages.push("Ruby", "Python");
    
    return languages;
  }
  

  const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
  
    return numbers;
  }
  

  const removeFirst = (languages) => {
    languages.shift();
  
    return languages;
  }
  

  const removeLast = (languages) => {
    languages.pop();
  
    return languages;
  }
  

  const convertStrToArr = (social_arr) => {
    const socialNetworks = social_arr.split(',');
  
    return socialNetworks;
  }
  

  const convertArrToStr = (languages) => {
    const languagesString = languages.join(',');
  
    return languagesString;
  }
  
  const sortArr = (social_arr) => {

    const socialNetworksSorted = social_arr.sort();
  
    return socialNetworksSorted;
  }
  

  const invertArr = (social_arr) => {
    const invertedArray = social_arr.reverse();
  
    return invertedArray;
  }
  