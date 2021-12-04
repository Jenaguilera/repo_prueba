const fs = require('fs')
const sass = require('node-sass')

const file = process.env.SOURCE || './scss/style.scss'
const outFile = process.env.OUT || './css/style.css'

sass.render(
    {
        file,
        includePaths: ['./scss/'],
        outFile,
        sourceMap: true,
        outputStyle: 'expanded',
    },
    (error, result) => {
        // node-style callback from v3.0.0 onwards
        if (error) {
            console.log(error.status) // used to be "code" in v2x and below
            console.log(error.column)
            console.log(error.message)
            console.log(error.line)
        } else {
            fs.writeFileSync(outFile, result.css.toString())
            console.log('GREAT SUCCESS!!!')
        }
    }
)
