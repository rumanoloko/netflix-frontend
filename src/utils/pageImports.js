// src/utils/pageImports.js (o donde prefieras)
const pageModules = import.meta.glob('@pages/**/**/*.jsx', { eager: true })

const pageComponents = Object.entries(pageModules).reduce((acc, [path, module]) => {
    // Extrae el nombre de la carpeta como clave
    const name = path
        .split('/pages/')[1]        // "Home/Home.jsx"
        .split('/')[0]              // "Home"

    acc[name] = module.default
    return acc
}, {})

export default pageComponents
