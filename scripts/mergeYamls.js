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

    //Get list of yaml files in yaml folder
    // Exclude index.yaml from list
    const fileList = files.filter(file =>
        file !== 'index.yaml'
    ).map(file => `${yamlDirectoryPath}/${file}`)

    console.log("fileList: ", fileList)

    //Merge all yaml files together
    const content = mergeYaml(fileList);

    //Convert yaml object to string
    const yamlString = YAML.stringify(content)

    //Write to index yaml file
    try {
      fs.writeFileSync('yaml/index.yaml', yamlString);
      console.log("yaml/index.yaml was created successfully!")
      //file written successfully
    } catch (err) {
      console.error(err)
    }
});