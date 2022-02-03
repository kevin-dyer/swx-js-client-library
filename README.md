### Overview

This project is intended to provide an SDK to interact with the existing SmartWorks backend. It is utilizing Open API generator to generate the SDK based off of API specifications located within the [yaml files](/yaml).

The yaml files located in this repo are slightly modified. Open API generator does not currently support anyOf relationships, so they have been temporarily removed from the yaml files. Additionally, the yaml files have been modified to also describe SmartWorks authentication schema.

### Requirements
* [openapi-generator-cli](https://openapi-generator.tech/)
* Java Development Kit ([JDK](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html))


#### Merge yaml files locally
To merge all yaml files in yaml/ (excluding index.yaml) and write to yaml/index.yaml
```
    node run merge-yaml
```

#### Generating code locally
1. To generate the code, simply run the following command in the root directory of this project:

    ```
    openapi-generator-cli generate -i yaml/index.yaml -g javascript -o sdk/ --additional-properties=usePromises=true
    ```

    or run generate-sdk script
    ```
    node run generate-sdk
    ```

1. After generating the code, the modules must be built by navigating to the sdk directory and running `npm install` and `npm run build`

Additional details are located in the generated readme of the SDK.

### Merge yaml files, Generate SDK, and install & build sdk directory
```
    node run build
```