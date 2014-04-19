module.exports = function (grunt) {
    grunt.initConfig({
    requirejs: {
        compile: {
            // Available options can be found here
            // https://github.com/jrburke/r.js/blob/master/build/example.build.js
            options: {
                baseUrl: "./",
                paths: {},
                optimize: "none",
                generateSourceMaps: false,
                logLevel: 3,
                preserveLicenseComments: false,
                onBuildRead: function (moduleName, path, contents) {
                    var wrappedContents = "define(function (require, exports, module) {\n" + contents + "});\n";
                    return moduleName === "node_modules/almond/almond" || moduleName === "lib/ui/polyfill" ? contents : wrappedContents;
                },
                name: "node_modules/almond/almond",
                include: ["./lib/start"],
                insertRequire: ["./lib/start"],
                out: "public/js/weatherapp.js",
                wrap: true
            }
        }
    }
    });

    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.registerTask("build", ["requirejs"]);
    
    grunt.registerTask("default", ["build"]);
}
