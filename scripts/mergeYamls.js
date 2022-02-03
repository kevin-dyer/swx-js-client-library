const mergeYaml = require('merge-yaml');
const fs = require('fs');
// const path = require('path');
const YAML = require('yaml');

// const yamlDirectoryPath = path.join(__dirname, 'yaml');
const yamlDirectoryPath = 'yaml'

fs.readdir(yamlDirectoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    const fileList = files.filter(file =>
        file !== 'index.yaml' &&
        file !== 'index_test.yaml'
    ).map(file => `${yamlDirectoryPath}/${file}`)

    console.log("fileList: ", fileList)

    const content = mergeYaml(fileList);

    console.log("typeof content: ", typeof content)

    try {
      fs.writeFileSync('yaml/index_test.yaml', YAML.stringify(content))
      //file written successfully
    } catch (err) {
      console.error(err)
    }

});