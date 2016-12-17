module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                watch: ".",
                src: ["**/*.ts", "!node_modules/**/*.ts"]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};
