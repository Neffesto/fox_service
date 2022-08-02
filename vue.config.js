const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "@/assets/style/_mixins.scss"; @import "@/assets/style/_variables.scss";'
            }
        }
    }
})

// module.exports = {
//     css: {
//         loaderOptions: {
//             sass: {
//                 additionalData: ` @import "~@/assets/style/main.scss"; `
//             },
//         }
//     }
// }