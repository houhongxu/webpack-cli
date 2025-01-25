import { type IWebpackCLI } from "./types";

const WebpackCLI = require("./webpack-cli");

const runCLI = async (args: Parameters<IWebpackCLI["run"]>[0]) => {
  //// webpack-cli实例
  // Create a new instance of the CLI object
  const cli: IWebpackCLI = new WebpackCLI();

  try {
    //// 调用cli.run
    await cli.run(args);
  } catch (error) {
    cli.logger.error(error);
    process.exit(2);
  }
};

module.exports = runCLI;
