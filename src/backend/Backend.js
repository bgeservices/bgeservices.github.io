var storage = window.localStorage

var fields = ['firstName', 'lastName', 'tin', 'tinType', 'nsiPic', 'noiPic']

function Backend () {

}

for (var idx in fields) {
  (function (key) {
    Object.defineProperty(Backend.prototype, key, {
      get: function () {
        return storage.getItem(key)
      },
      set: function (value) {
        storage.setItem(key, value)
      },
    })
  })(fields[idx])
}

module.exports = Backend
