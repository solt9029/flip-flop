var canvas, ctx;

const positiveWords = [
  '嬉しい',
  '楽しい',
  '幸せ',
  '満足',
  '爽快',
  '感動',
  '感心',
  '和む',
  '癒される',
  '落ち着く',
  'ワクワク',
  '好き',
  '憧れる',
  '尊敬する'
];

const negativeWords = [
  '寂しい',
  '悲しい',
  '孤独',
  '萎える',
  '心が痛む',
  '憂鬱',
  '泣ける',
  '苦しい',
  '不愉快',
  'イライラ',
  '不安',
  '心配',
  'へこむ',
  'がっかり',
  '嫌い',
  '失望',
  '絶望',
  '落胆',
  '憎い'
];

function handleClick() {
  if (DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState !== "granted") {
          return;
        }
        listenDeviceOrientationEvent();
      })
      .catch(console.error);
    return;
  }
  listenDeviceOrientationEvent();
}

function listenDeviceOrientationEvent() {
  window.addEventListener("deviceorientation", function (event) {
    document.getElementById('test').innerHTML = event.alpha + ',' + event.beta + ',' + event.gamma
  });
}

$(function() {
  // canvas = document.getElementById('canvas');
  // ctx = canvas.getContext('2d');
  // resizeCanvas();

  $('.modal').modal({
    keyboard: false,
  });
});

// window.addEventListener('resize', resizeCanvas);

// setInterval(function() {
//   ctx.font = "bold 70px sans-serif";
//   ctx.fillText(positiveWords[Math.floor(positiveWords.length * Math.random())], Math.random() * canvas.width, Math.random() * canvas.height)
// }, 300)

// function resizeCanvas() {
//   canvas.width = window.innerWidth - 20;
//   canvas.height = window.innerHeight - 20;
//   if (ctx && canvas) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   }
// }
