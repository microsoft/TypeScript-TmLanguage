 gulp.add('watch-' + (asset.name || asset.route), function ()
        {
            gulp.watch('./modules/*' + asset.moduleRelativePath, ['build-' + (asset.name || asset.route)]);
        });