const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

//var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
//localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
//var retrievedObject = localStorage.getItem('testObject');

//console.log('retrievedObject: ', JSON.parse(retrievedObject));

var dataService = {
  data: [
    {            'date': '13 June 2018',
                 'mrn': 'QZE2UQ6I3EFJZNI',
                 'status': 'Submitted'
                },
                {'date': '6 May 2018',
                 'mrn': 'Q9NROFY1W8WAE',
                 'status': 'Complete'
                },
                {'date': '21 April 2012',
                 'mrn': '1GPUG93ZB5K0LD',
                 'status': 'Complete'
                },
                {'date': 'Feburary 14 2018',
                 'mrn': 'BHFRI75OO8T9J71',
                 'status': 'Cancelled'
                }
  ],
  get: function() {
    //console.log("getting latest >>> ", item);
    //let d;
    // if(localStorage.getItem('decData')) {
    //   return JSON.parse(localStorage.getItem('decData'));
    // }else {
      return this.data;
    //}   
  },
  storeDataInit: function() {
    if(!localStorage.getItem('decData')) {
      localStorage.setItem('decDATA', JSON.stringify(this.data));
    }  
  },
  set: function(item) {
    //console.log("setting >>> ", item);
    data.push(item);
  },
  getLocalData: function() {
    var retrievedObject = localStorage.getItem('testObject');
    return JSON.parse(retrievedObject);
  }
};

router.get('/', function (req, res) {
  res.render('start');
});

router.get('/declarations-dashboard', function (req, res) {
  res.render('declarations-dashboard', {'declarations' : dataService.get()});
});

router.get('/declaration/:mrn', function (req, res) {
  
  //dataService.storeDataInit();
  req.session.myData = {'bob': 'here'};
  console.log("session data here:", req.session);
  res.render('declaration', {'declarations' : dataService.get(), 'mrn': req.params.mrn});
});

module.exports = router


