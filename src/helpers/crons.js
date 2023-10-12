const CronJob = require("cron").CronJob;
const { start } = require("repl");
const { emailService } = require("../services");

/** Send email */
new CronJob(
  "44 8 * * *",
  function () {
    emailService.sendMail(
      "sujanbutani30@gmail.com",
      "Test message",
      "Good morning! Have a nice day :)"
    );
  },
  null,
  false,
  "Asia/Kolkata"
).start();