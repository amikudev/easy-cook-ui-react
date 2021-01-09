import cron from "node-cron";
import { exec } from "child_process";

// cron.schedule("* * * * * *", () => {
//   console.log("Running a task every second");
//
//   exec("dir", (err, stdout, stderr) => {
//     if (err) {
//       //some err occurred
//       console.error(err);
//     } else {
//       // the *entire* stdout and stderr (buffered)
//       console.log(`stdout: ${stdout}`);
//       console.log(`stderr: ${stderr}`);
//     }
//   });
// });

exec("npm run cypress:run", (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err);
  } else {
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
});

cron.schedule("* * * * *", () => {
  console.log("Running a task every second");

  // exec("npm run cypress:run", (err, stdout, stderr) => {
  //   if (err) {
  //     //some err occurred
  //     console.error(err);
  //   } else {
  //     // the *entire* stdout and stderr (buffered)
  //     console.log(`stdout: ${stdout}`);
  //     console.log(`stderr: ${stderr}`);
  //   }
  // });
});
