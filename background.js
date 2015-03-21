chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    "frame": "none",
    'bounds': {
      'width': 100,
      'height': 100
    },
    'minWidth': 100,
    'minHeight': 100
  });
});