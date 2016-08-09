# angular-underscorejs
Wrapper underscorejs with AngularJS

---

Installation
------------

You can choose your preferred method of installation:
* Through bower : `bower install angular-underscorejs`
* Download from github : [angular-underscore.js](https://raw.github.com/xen3r0/angular-underscorejs/master/angular-underscore.js)

Usage
-----

Include **angular-underscore.js** in your application.

```html
<script src="bower_components/angular-underscorejs/angular-underscore.js"></script>
```

Add the module `xen3r0.underscorejs` as a dependency to your app module:

```js
angular.module('myApp', ['xen3r0.underscorejs']);
```

Inject service and use underscorejs functions:
```js
angular.module('myApp')
  .controller('MyController', ['_', controllerFn]);
  
function controllerFn(_) {
  var myTab : [
    {
      id: 1,
      name: 'PHP'
    },
    {
      id: 2,
      name: 'JS'
    },
    {
      id: 3,
      name: 'HTML'
    }
  ];
  var indexedTab = _.indexBy(myTab, 'name');
}
```

Check [Underscorejs](http://underscorejs.org/) for more functions.

License
-------
Released under the terms of the [MIT License](https://github.com/Xen3r0/angular-underscorejs/blob/master/LICENSE).
