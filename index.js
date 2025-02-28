import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const FILE_PATH = "./data.json";
const FILE_PATH2 = "./data2.json";

const makeCommit = (inputDate) => {
  const DATE = moment(inputDate).format(); // Use the provided date

  const data = { date: DATE };

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add(FILE_PATH).commit(DATE, { "--date": DATE }).push();
  });
};

const makeCommit2 = (inputDate) => {
  const DATE = moment(inputDate).format(); // Use the provided date

  const data = { date: DATE };

  jsonfile.writeFile(FILE_PATH2, data, () => {
    simpleGit().add(FILE_PATH2).commit(DATE, { "--date": DATE }).push();
  });
};

makeCommit("2025-02-26");
