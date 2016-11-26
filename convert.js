var fs = require('fs');
var easyimg = require('easyimage');

var inputFolder = './input/';
var outputFolder = './output/';
var width = 1140;
var quality = 75;

fs.readdir(inputFolder, function (err, files) {
    files.forEach(function (fileName) {
        if (fileName.substr(0, 1) === '.') {
            return;
        }

        easyimg.resize({
            src: inputFolder + fileName,
            dst: outputFolder + fileName,
            width: width,
            quality: quality
        }).then(
            function (image) {
                console.log('Resized ' + fileName + ' to ' + image.width + ' x ' + image.height);
            },
            function (err) {
                console.log(err);
            }
        );

    });
});