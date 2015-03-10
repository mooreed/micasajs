var express = require('express');
var router = express.Router();

var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
		sys.puts(stdout) 
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moore Tribe' });
});

// exec function on the OS
router.get('/video1/start', function(req, res, next) {
  // exec("ls -all", puts);
  exec("omxplayer -o hdmi public/assets/166 – How to Install a Drawer Knob.mp4", puts);
  res.render('index', { title: 'Moore Tribe' });
});

// exec function on the OS
router.get('/video1/start', function(req, res, next) {
  // exec("ls -all", puts);
  exec("omxplayer -o hdmi public/assets/166 – How to Install a Drawer Knob.mp4", puts);
  res.render('index', { title: 'Moore Tribe' });
});

// exec function on the OS
router.get('/video1/stop', function(req, res, next) {
  // exec("ls -all", puts);
  exec("q", puts);
  exec("xrefresh -display :0", puts);
  res.render('index', { title: 'Moore Tribe' });
});

// exec function on the OS
router.get('/video1/pause', function(req, res, next) {
  // exec("ls -all", puts);
  exec("p", puts);
  res.render('index', { title: 'Moore Tribe' });
});

module.exports = router;
