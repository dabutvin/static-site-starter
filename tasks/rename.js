/*
 * The hosting pattern for a static generated site is to have every file named index.html in the folder that represents the route
 * For example if you had a URL http://example.org/docs/topic you would need a document at /docs/topic/index.html
 * This is super annoying if you have a bunch of pages so this task will take care of creating this folder structure for you.
 * 
 */

const path = require('path')

module.exports = grunt => {
  grunt.registerTask('rename', function() {
    let htmls = grunt.file.expand('dist/**/*.html')
    for (const html of htmls) {
      if (html.endsWith('index.html')) continue
      const file = path.parse(html)
      const dir = path.join(file.dir, file.name)
      grunt.file.mkdir(dir)
      grunt.file.copy(html, path.join(dir, 'index.html'))
      grunt.file.delete(html)
    }
  })
}
