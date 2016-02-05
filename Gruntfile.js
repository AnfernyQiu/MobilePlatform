/*
  "grunt" compress the images to the new directory
*/

module.exports=function(grunt){
	grunt.initConfig({
		responsive_images:{
			dev:{
				options:{
					engine:'im',
					sizes:[{
						width:400,
						suffix:'_small',
						quality:20
					},{
						width:800,
						suffix:'_large',
						quality:20
					}]

				},
				files:[{
					expand:true,
					src:['*.{gif,jpg,png}'],
					cwd:'src/img_src',
					dest:'src/img_dist'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default',['responsive_images']);

};