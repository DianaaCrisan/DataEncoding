function getNRZLevelEncoding(bits) {
  var result = [];

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1) symbol = '▔▔';
      if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔▔';
      if (parseInt(bits[i].value) == 0) symbol = '▁▁';
      if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁▁';
      result.push(symbol);
  }
  return result;
}

function getNRZMarkEncoding(bits) {
  var result = [];
  var lastLevelIsNull = true;

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if(lastLevelIsNull) {
        if (parseInt(bits[i].value) == 1) {
          symbol = '∣▔▔';
          lastLevelIsNull = false;
        }
        if (parseInt(bits[i].value) == 0) {
          symbol = '▁▁';
        }
      }

      else {
        if (parseInt(bits[i].value) == 1) {
          symbol = '∣▁▁';
          lastLevelIsNull = true;
        }
        if (parseInt(bits[i].value) == 0) {
          symbol = '▔▔';
        }
      }
      result.push(symbol);
  }
  return result;
}

function getNRZSpaceEncoding(bits) {
  var result = [];
  var lastLevelIsNull = true;

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if(lastLevelIsNull) {
        if (parseInt(bits[i].value) == 0) {
          symbol = '∣▔▔';
          lastLevelIsNull = false;
        }
        if (parseInt(bits[i].value) == 1) {
          symbol = '▁▁';
        }
      }

      else {
        if (parseInt(bits[i].value) == 0) {
          symbol = '∣▁▁';
          lastLevelIsNull = true;
        }
        if (parseInt(bits[i].value) == 1) {
          symbol = '▔▔';
        }
      }
      result.push(symbol);
  }
  return result;
}

function getRZEncoding(bits) {
  var result = [];

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if (parseInt(bits[i].value) == 0) {
        symbol = '▁▁';
        lastLevelIsNull = false;
      }
      if (parseInt(bits[i].value) == 1) {
        symbol = '∣▔∣▁';
      }
      result.push(symbol);
  }
  return result;
}

function getBiphaseLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▔∣▁';
        if (parseInt(bits[i].value) == 0) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▁∣▔';
        result.push(symbol);
    }
    return result;
}

function getBiphaseMarkEncoding(bits) {
  var result = [];
  var lastLevelIsNull = true;

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if(lastLevelIsNull) {
        if (parseInt(bits[i].value) == 1) {
          symbol = '▔∣▁∣';
        }
        if (parseInt(bits[i].value) == 0) {
          symbol = '▔▔∣';
          lastLevelIsNull = false;
        }
      }

      else {
        if (parseInt(bits[i].value) == 1) {
          symbol = '▁∣▔∣';
        }
        if (parseInt(bits[i].value) == 0) {
          symbol = '▁▁∣';
          lastLevelIsNull = true;
        }
      }
      result.push(symbol);
  }
  return result;
}

function getBiphaseSpaceEncoding(bits) {
  var result = [];
  var lastLevelIsNull = true;

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if(lastLevelIsNull) {
        if (parseInt(bits[i].value) == 0) {
          symbol = '▔∣▁∣';
        }
        if (parseInt(bits[i].value) == 1) {
          symbol = '▔▔∣';
          lastLevelIsNull = false;
        }
      }

      else {
        if (parseInt(bits[i].value) == 0) {
          symbol = '▁∣▔∣';
        }
        if (parseInt(bits[i].value) == 1) {
          symbol = '▁▁∣';
          lastLevelIsNull = true;
        }
      }
      result.push(symbol);
  }
  return result;
}

function getBiphaseLevelDiffEncoding(bits) {
  var result = [];
  var lastLevelIsNull = true;

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if(lastLevelIsNull) {
        if (parseInt(bits[i].value) == 0) {
          symbol = '∣▔∣▁';
        }
        if (parseInt(bits[i].value) == 1) {
          symbol = '▁∣▔';
          lastLevelIsNull = false;
        }
      }

      else {
        if (parseInt(bits[i].value) == 0) {
          symbol = '∣▁∣▔';
        }
        if (parseInt(bits[i].value) == 1) {
          symbol = '▔∣▁';
          lastLevelIsNull = true;
        }
      }
      result.push(symbol);
  }
  return result;
}

function getBiphaseDelayEncoding(bits) {
  var result = [];
  var lastLevelIsNull = true;

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if(lastLevelIsNull) {
        if (parseInt(bits[i].value) == 0 && i < 7 && parseInt(bits[i+1].value) == 1) {
          symbol = '▁▁';
        }
        if (parseInt(bits[i].value) == 0 && i == 7) {
          symbol = '▁▁';
        }
        if (parseInt(bits[i].value) == 0 && i < 7 && parseInt(bits[i+1].value) == 0) {
          symbol = '▁▁∣';
          lastLevelIsNull = false;
        }
        if (parseInt(bits[i].value) == 1) {
          symbol = '▁∣▔';
          lastLevelIsNull = false;
        }
      }

      else {
        if (parseInt(bits[i].value) == 0 && i < 7 && parseInt(bits[i+1].value) == 1) {
          symbol = '▔▔';
        }
        if (parseInt(bits[i].value) == 0 && i == 7) {
          symbol = '▔▔';
        }
        if (parseInt(bits[i].value) == 0 && i < 7 && parseInt(bits[i+1].value) == 0) {
          symbol = '▔▔∣';
          lastLevelIsNull = true;
        }
        if (parseInt(bits[i].value) == 1) {
          symbol = '▔∣▁';
          lastLevelIsNull = true;
        }
      }
      result.push(symbol);
  }
  return result;
}

function getAMIEncoding(bits) {
  var result = [];
  var lastOneIsNeg = true;

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if (parseInt(bits[i].value) == 0) {
        symbol = '——';
      }

      if (parseInt(bits[i].value) == 1) {
        if (lastOneIsNeg)
        {
          symbol = '(+)';
          lastOneIsNeg = false;
        }
        else 
        {
          symbol = '(-)';
          lastOneIsNeg = true;
        }
      }
      result.push(symbol);
  }
  return result;
}

function getHDB3Encoding(bits) {
  var result = [];
  var lastOneIsNeg = true;
  var nrOfBitsOfOne = 0;

  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';

      if (parseInt(bits[i].value) == 0 &&
          i <= 4 && parseInt(bits[i+1].value) == 0 && 
          parseInt(bits[i+2].value) == 0 && parseInt(bits[i+3].value) == 0) 
      {
        if(lastOneIsNeg && nrOfBitsOfOne % 2)
          symbol = '——————(-)';
        if(lastOneIsNeg && nrOfBitsOfOne % 2 == 0)
          symbol = '(+)————(-)';
        if(!lastOneIsNeg && nrOfBitsOfOne % 2)
          symbol = '——————(+)';
        if(!lastOneIsNeg && nrOfBitsOfOne % 2 == 0)
          symbol = '(+)————(+)';
      }

      else if (parseInt(bits[i].value) == 1) {
        nrOfBitsOfOne ++;
        if (lastOneIsNeg)
        {
          symbol = '(+)';
          lastOneIsNeg = false;
        }
        else 
        {
          symbol = '(-)';
          lastOneIsNeg = true;
        }
      }

      else
      {
        symbol = '——';
      }
      result.push(symbol);
  }
  return result;
}