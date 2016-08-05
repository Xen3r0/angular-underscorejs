/**
 * angular-underscorejs: underscorejs + AngularJS
 *
 * @author Manuel Santisteban <xen3r0@gmail.com>
 * @url https://github.com/Xen3r0/angular-underscorejs
 * @license MIT
 */
(function (angular, _) {
    var isolate_ = angular.copy(_);

    angular.module('xen3r0.underscorejs', [])
        .factory('_', function () {
            return isolate_;
        })
    ;
})(angular, _);