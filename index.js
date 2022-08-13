let bank1Donate = function () {
  let donateItem1 = document.getElementById("donate-list1-1");
  let donateItem2 = document.getElementById("donate-list1-2");
  let donateItem3 = document.getElementById("donate-list1-3");
  let donatedItem = window.prompt(`Which Item Would You Like To Donate?`);
  donatedItem = donatedItem.toLowerCase();
  if (donatedItem == null || donatedItem == "") {
  } else if (
    donatedItem == "peanut butter" ||
    donatedItem == "crackers" ||
    donatedItem == "granola"
  ) {
    window.alert(
      `Success! We have recieved your ${donatedItem} donation at Food Bank #1. Thank you!`
    );
  } else {
    window.alert(`Sorry, but Food Bank #1 doesn't need that item right now.`);
  }
};

let bank2Donate = function () {
  let donateItem1 = document.getElementById("donate-list2-1");
  let donateItem2 = document.getElementById("donate-list2-2");
  let donateItem3 = document.getElementById("donate-list2-3");
  let donatedItem = window.prompt(`Which Item Would You Like To Donate?`);
  donatedItem = donatedItem.toLowerCase();
  if (donatedItem == null || donatedItem == "") {
  } else if (
    donatedItem == "bread" ||
    donatedItem == "soup" ||
    donatedItem == "pasta"
  ) {
    window.alert(
      `Success! We have recieved your ${donatedItem} donation at Food Bank #2. Thank you!`
    );
  } else {
    window.alert(`Sorry, but Food Bank #2 doesn't need that item right now.`);
  }
};

let bank3Donate = function () {
  let donateItem1 = document.getElementById("donate-list3-1");
  let donateItem2 = document.getElementById("donate-list3-2");
  let donateItem3 = document.getElementById("donate-list3-3");
  let donatedItem = window.prompt(`Which Item Would You Like To Donate?`);
  donatedItem = donatedItem.toLowerCase();
  if (donatedItem == null || donatedItem == "") {
  } else if (
    donatedItem == "fruits" ||
    donatedItem == "cereal" ||
    donatedItem == "granola"
  ) {
    window.alert(
      `Success! We have recieved your ${donatedItem} donation at Food Bank #3. Thank you!`
    );
  } else {
    window.alert(`Sorry, but Food Bank #3 doesn't need that item right now.`);
  }
};

let bank4Donate = function () {
  let donateItem1 = document.getElementById("donate-list4-1");
  let donateItem2 = document.getElementById("donate-list4-2");
  let donateItem3 = document.getElementById("donate-list4-3");
  let donatedItem = window.prompt(`Which Item Would You Like To Donate?`);
  donatedItem = donatedItem.toLowerCase();
  if (donatedItem == null || donatedItem == "") {
  } else if (
    donatedItem == "bread" ||
    donatedItem == "crackers" ||
    donatedItem == "peanut butter"
  ) {
    window.alert(
      `Success! We have recieved your ${donatedItem} donation at Food Bank #4. Thank you!`
    );
  } else {
    window.alert(`Sorry, but Food Bank #4 doesn't need that item right now.`);
  }
};
