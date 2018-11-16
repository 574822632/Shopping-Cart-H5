module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/style/_variable.scss";
          @import "@/assets/style/_function.scss";
        `,
      },
    },
  },
};
