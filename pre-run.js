const fs = require('fs')

!fs.existsSync('./public') && fs.mkdirSync('./public')
!fs.existsSync('./public/figures') && fs.mkdirSync('./public/figures')

fs.readdir('./posts/featured', (_, files) => {
    files.forEach(file =>
        fs.copyFile(`./posts/featured/${file}`, `./public/figures/${file}`, () => true)
    );
});


