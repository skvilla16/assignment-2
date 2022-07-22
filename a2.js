// Step 4
const collegeDataModule = require('./modules/collegeData');

function getAllStudents() {
  collegeDataModule
    .getAllStudents()
    .then(function (res) {
      // success funtion
      console.log(res);
    })
    .catch(function (err) {
      // error function
      console.log(err);
    });
}

function getCourses() {
  collegeDataModule
    .getCourses()
    .then(function (res) {
      // success funtion
      console.log(res);
    })
    .catch(function (err) {
      // error function
      console.log(err);
    });
}

function getTAs() {
  collegeDataModule
    .getTAs()
    .then(function (res) {
      // success funtion
      console.log(res);
    })
    .catch(function (err) {
      // error function
      console.log(err);
    });
}
// Step

collegeDataModule
  .initialize()
  .then(function (successMsg) {
    console.log(successMsg);
    getAllStudents();
    getCourses();
    getTAs();
  })
  .catch(function (errMsg) {
    console.log(errMsg);
  });
