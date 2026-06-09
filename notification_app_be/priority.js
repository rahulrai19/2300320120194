import { notifications } from "./data.js";

const priorityWeight = {
  Placement: 3,
  Result: 2,
  Event: 1
};

function getTopNotifications(data) {
  return data
    .map(item => ({
      ...item,
      score:
        priorityWeight[item.Type] * 1000000000000 +
        new Date(item.Timestamp).getTime()
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

console.log(getTopNotifications(notifications));