// The code template begins here
"use strict";

(function () {

  var __amdDefs__ = {};

  // The class definition is here...
  // let the private classes out

  var umo_prototype = function umo_prototype() {
    // Then create the traits and subclasses for this class here...

    (function (_myTrait_) {
      var _umoCache;

      // Initialize static variables here...

      if (!_myTrait_.hasOwnProperty("__factoryClass")) _myTrait_.__factoryClass = [];
      _myTrait_.__factoryClass.push(function (objectName) {

        if (!_umoCache) _umoCache = {};

        if (objectName) return;

        if (_umoCache[objectName]) return _umoCache[objectName];

        // ----
        var realSocket = io("http://54.165.147.161:7777");
        var myData = _data("http://localhost:1234/galaxy/umos/" + objectName, {
          auth: {},
          ioLib: realSocket
        });

        _umoCache[objectName] = myData;
        return myData;
      });

      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit")) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
      _myTrait_.__traitInit.push(function (main) {});
    })(this);
  };

  var umo = function umo(a, b, c, d, e, f, g, h) {
    var m = this,
        res;
    if (m instanceof umo) {
      var args = [a, b, c, d, e, f, g, h];
      if (m.__factoryClass) {
        m.__factoryClass.forEach(function (initF) {
          res = initF.apply(m, args);
        });
        if (typeof res == "function") {
          if (res._classInfo.name != umo._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (m.__traitInit) {
        m.__traitInit.forEach(function (initF) {
          initF.apply(m, args);
        });
      } else {
        if (typeof m.init == "function") m.init.apply(m, args);
      }
    } else return new umo(a, b, c, d, e, f, g, h);
  };
  // inheritance is here

  umo._classInfo = {
    name: "umo"
  };
  umo.prototype = new umo_prototype();

  (function () {
    if (typeof define !== "undefined" && define !== null && define.amd != null) {
      __amdDefs__["umo"] = umo;
      this.umo = umo;
    } else if (typeof module !== "undefined" && module !== null && module.exports != null) {
      module.exports["umo"] = umo;
    } else {
      this.umo = umo;
    }
  }).call(new Function("return this")());

  if (typeof define !== "undefined" && define !== null && define.amd != null) {
    define(__amdDefs__);
  }
}).call(new Function("return this")());