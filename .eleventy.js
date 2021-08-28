module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass");
  eleventyConfig.addWatchTarget("./src/css/burger.css");
  eleventyConfig.addPassthroughCopy('./src/img');

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
