import moment from 'moment';

const dateFromNow = () => {
  document.querySelectorAll(".date-format").forEach(function (timeField) {
    timeField.innerHTML = moment(timeField.dataset.date, "YYYY-MM-DD").fromNow();
  });
};

// module.exports = {
//   dateFromNow
// };

export default dateFromNow;
