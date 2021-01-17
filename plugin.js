var components={
    styles:{
        files:[
            './src/styles/styles.scss'
        ]
    },
    scripts:{
        files:[
            "./src/scripts/index.js",
            "./src/scripts/bootstrap/bootstrap.bundle.js",
        ]
    }
}
var combinePlugin=[...components.scripts.files,...components.styles.files];

module.exports=combinePlugin;

