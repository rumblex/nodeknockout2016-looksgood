var supportedFlag = $.keyframe.isSupported();

$.keyframe.define([
  {
    name: 'leftEyeBlink',
      '0%': {
        'height': '20px',
      },
      '50%': {
        'height': '2px',
        'width': '15px',
      },
      '100%': {
        'height': '20px',
      }
  },
  {
    name: 'rightEyeBlink',
    '0%': {
      'height': '20px',
    },
    '50%': {
      'height': '2px',
      'width': '15px',
    },
    '100%': {
      'height': '35px',
    }
  }
]);

var interval = 3000;

function blink() {
  $("#leftEye").playKeyframe({
    name: 'leftEyeBlink',
    duration: '200ms',
    timingFunction: 'linear',
    complete: function() {
      $("#leftEye").resetKeyframe();
    }
  });
  $("#rightEye").playKeyframe({
    name: 'rightEyeBlink',
    duration: '200ms',
    timingFunction: 'linear',
    complete: function() {
      $("#rightEye").resetKeyframe();
    }
  });
  interval = Math.random()*(6000-3000)+3000;
  setTimeout(blink, interval);
}

setTimeout(blink, interval);

$("#leftEye").click(function() {
  $("#leftEye").playKeyframe({
    name: 'leftEyeBlink',
    duration: '200ms',
    timingFunction: 'linear',
    complete: function() {
      $("#leftEye").resetKeyframe();
    }
  });
});

$("#rightEye").click(function() {
  $("#rightEye").playKeyframe({
    name: 'rightEyeBlink',
    duration: '200ms',
    timingFunction: 'linear',
    complete: function() {
      $("#rightEye").resetKeyframe();
    }
  });
});