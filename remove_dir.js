const fs = require('fs');
const np =  require('node:process');
const fsp = require('fs/promises');
const path = require('path');
// import path from 'path';
const url = require('url');
// import {fileURLToPath} from 'url';

const getFolderNames = async ( path) => {
    const folderNames = (await fsp.readdir(path, {withFileTypes: true})).filter(dir => dir.isDirectory()).map(dir => dir.name);
    return folderNames;
}

getFolderNames('./kace_sims/sims').then(folders => {
    folders.forEach(folder => {
        getFolderNames(`./kace_sims/sims/${folder}`).then(innerfolder => {
            innerfolder.forEach(inner => {
                try {
                    fs.rmdirSync(`./kace_sims/sims/${folder}/${inner}/.git`,{ force: true, recursive: true});
                    console.log('deleted .git folder of  ./kace_sims/sims/'+`${folder}/${inner}`);
                } catch (error) {
                    console.log('unable to delete .git of ./kace_sims/sims/'+`${folder}/${inner}`);
                    console.log(error)
                    // process.exit()
                }
            })
        })
    })
})

// const filename = url.fileURLToPath('./');
// const dirname = path.dirname(filename);

// async function listDirectories(pth) {
//   const directories = (await fsp.readdir(pth, {withFileTypes: true}))
//     .filter(dirent => dirent.isDirectory())
//     .map(dir => dir.name);

//   return directories;
// }

// listDirectories('./').then(l => console.log(l));

// [
//   '.git',
//   '.vscode',
//   'controllers',
//   'node_modules',
//   'pages',
//   'routes',
//   'src',
//   'views'
// ]

// np.chdir()



const findAndDeleteGitFolder = (directory) => {
    if( fs.existsSync('./.git') ){
        console.log('git foler exists');
    }
}



// fs.rmdir( path, options, callback );

