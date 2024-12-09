// utils/dateHelper.js
const formatDateTime = (date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${date.toISOString().split("T")[0]} ${hours}:${minutes}`;
};

module.exports = { formatDateTime };
