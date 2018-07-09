module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 600,
            suffix: '_small_1x',
            quality: 100
          },

          // {
          //   width: 800,
          //   suffix: '_medium_1x',
          //   quality: 500
          // },

          // {
          //   width: 1600,
          //   suffix: '_large_1x',
          //   quality: 500
          // }
        ]},
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'image_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
