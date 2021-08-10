const express = require('express');
const router = express.Router();
const fs = require('fs');

// @route    GET api/reports
// @desc     Get reports Route
// @access   Public
router.get('/open', async (req, res) => {
  try {
    let rawdata = fs.readFileSync('./data/reports.json');
    let reportsData = JSON.parse(rawdata);
    const openReports = reportsData.elements.map(report => {
      if(report.state === 'OPEN'){
        return report;
      }
    })
    // console.log(openReports);
    res.status(200).json(openReports);
  } catch (error) {
    res.status(400).send('Server Error');
  }
});

router.put('/resolve/:id', async (req, res) => {
  try {
    let rawdata = fs.readFileSync('./data/reports.json');
    let reportsData = JSON.parse(rawdata);
    // console.log(reportsData);
    const updatedReports = reportsData.elements.map(report => {
      if(report.id === req.params.id){
        // console.log('match')
        report.state = 'RESOLVED';
      }
      return report;
    });
    fs.writeFileSync(rawdata, JSON.stringify(updatedReports));
    res.status(200).json('resolved');
  } catch (error) {
    res.status(400).send(error);
  }
  
});


router.put('/block/:id', async (req, res) => {
  try {
    let rawdata = fs.readFileSync('./data/reports.json');
    let reportsData = JSON.parse(rawdata);
    // console.log(reportsData);
    const updatedReports = reportsData.elements.map(report => {
      if(report.id === req.params.id){
        // console.log('match')
        report.state = 'BLOCKED';
      }
      return report;
    });
    fs.writeFileSync(rawdata, JSON.stringify(updatedReports));
    res.status(200).json('blocked');
  } catch (error) {
    res.status(400).send(error);
  }
  
});
module.exports = router;