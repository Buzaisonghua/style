/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: "./src/index.js",
    output: {
      file: "./dist/bundle.js",
      format: "cjs",
      experimentalMinChunkSize
    },
  };
  