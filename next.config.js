// const withSass = require("@zeit/next-sass");
// const withCss = require("@zeit/next-css");
//
// if (typeof require !== "undefined") {
//   require.extensions[".css"] = (file) => {};
// }
//
// module.exports = withCss(withSass({}));
const withImages = require("next-images");
module.exports = withImages();
