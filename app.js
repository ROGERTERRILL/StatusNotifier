const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'ejs');

let status = {
  princess: {
    meeting: false,
    camera: false,
    camerablur: false,
    voice: false,
    call: false,
  },
  gbear: {
    meeting: false,
    camera: false,
    camerablur: false,
    voice: false,
  },
};
// ROUTES
app.get('/', (req, res) => {
  res.render('index.ejs', { status });
});

app.post('/', function (req, res) {
  console.log(req.body.person);

  switch (req.body.person) {
    case 'princess-meeting':
      status.princess.meeting = !status.princess.meeting;
      break;
    case 'princess-camera':
      status.princess.camera = !status.princess.camera;
      break;
    case 'princess-camerablur':
      status.princess.camerablur = !status.princess.camerablur;
      break;
    case 'princess-voice':
      status.princess.voice = !status.princess.voice;
      break;
    case 'princess-call':
      status.princess.call = !status.princess.call;
      break;
    case 'gbear-meeting':
      status.gbear.meeting = !status.gbear.meeting;
      break;
    case 'gbear-camera':
      status.gbear.camera = !status.gbear.camera;
      break;
    case 'gbear-camerablur':
      status.gbear.camerablur = !status.gbear.camerablur;
      break;
    case 'gbear-voice':
      status.gbear.voice = !status.gbear.voice;
      break;
  }

  res.render('index.ejs', { status });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
