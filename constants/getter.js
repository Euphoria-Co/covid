function getDescription(string) {
  
  const descFirst = (string+'').split('{"description":"');
  var aa = descFirst[1]+'';
  const descSecond = aa.split('","data"');
  
  return descSecond[0];
}

 function getData(string) {

  const first = (string+'').split('"parsedData":"[');
  var aa = first[1]+'';
  const second = aa.split(']",');
  const third = second[0].replace(/\\"/g, "");
  const fourth = third.replace(/,/g, "#");
  const fifth = fourth.replace(/{/g, "");
  const sixth = fifth.split('}');
  
  const end = [
    {
      name: ((sixth[0]+'').split('#')[0]+'').split(':')[1],
      countOfPatients: ((sixth[0]+'').split('#')[1]+'').split(':')[1]?parseInt(((sixth[0]+'').split('#')[1]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[0]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[0]+'').split('#')[2]+'').split(':')[1], 10):0,
      id: ((sixth[0]+'').split('#')[3]+'').split(':')[1]
    },
    {
      name: ((sixth[1]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[1]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[1]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[1]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[1]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[1]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[2]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[2]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[2]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[2]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[2]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[2]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[3]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[3]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[3]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[3]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[3]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[3]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[4]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[4]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[4]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[4]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[4]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[4]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[5]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[5]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[5]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[5]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[5]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[5]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[6]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[6]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[6]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[6]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[6]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[6]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[7]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[7]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[7]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[7]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[7]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[7]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[8]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[8]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[8]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[8]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[8]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[8]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[9]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[9]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[9]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[9]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[9]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[9]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[10]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[10]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[10]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[10]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[10]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[10]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[11]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[11]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[11]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[11]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[11]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[11]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[12]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[12]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[12]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[12]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[12]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[12]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[13]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[13]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[13]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[13]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[13]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[13]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[14]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[14]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[14]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[14]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[14]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[14]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[15]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[15]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[15]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[15]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[15]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[15]+'').split('#')[4]+'').split(':')[1]
    },
    {
      name: ((sixth[16]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[16]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[16]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[16]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[16]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[16]+'').split('#')[4]+'').split(':')[1]
    }
  ]
  
  return end;
}

export { getData, getDescription};