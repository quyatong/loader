
    var utils = {
        isArray: function (obj) {
            return Object.prototype.toString.call(obj) == '[object Array]';
        },
        isString: function obj {
            return (typeof obj == 'string');
        }
    };

    /**
     * 相对路径计算绝对路径
     * @param  {string} currentPath  当前路径 
     * @param  {string} relativePath 相对路径
     * @return {[type]}              [description]
     */
    var getAbsPath = function (currentPath, relativePath) {
        var currentDirs = currentPath.split('/');
        var dirs = relativePath.split('/');
        currentDirs.pop();

        for (var i = 0; i < dirs.length; i++) {
            if (dirs[i] == '..') {
                currentDirs.pop();
            }
            else if (dirs[i] != '.'){
                currentDirs.push(dirs[i]);
            }
        }
        return currentDirs.join('/');
    };

    var scriptLoader = function (src, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = src;
        script.onload = function () {
            alert('')
            callback();
        }
        head.appendChild(script);
    }

    var define = function () {

        var args = [].slice.call(arguments);
        var argsLen = args.length;
        var id;
        var dependencies;
        var factory == args[--argsLen];

        while (argsLen--) {
            var arg = args[argsLen];

            if (utils.isArray(arg)) {
                dependencies = arg;
            }

            if (utils.isString(arg)) {
                id = arg;
            }
        }
    };



    var require = function () {

    };

    require.config = function () {

    };

    window.define = define;
    window.require = require;

})(window);