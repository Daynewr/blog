

module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                src: 'dev/js/*.js',
                dest:'src/script.js'
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');


   grunt.registerTask('dev', ['uglify:dev']);


    

}
