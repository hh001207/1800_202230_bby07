//Gets the result of the radio button
function getButton() {
  var radios = document.getElementsByName("inlineRadioOptions");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      return radios[i].value - 3;
    }
  }
  return 0;
}

// function countQ() {
//   if(localStorage.countQ) {
//     localStorage.countQ = Number(localStorage.countQ) + 1;
//   } else {localStorage.countQ = 1;}
// }

function addPoints(question) {
  var inp = getButton();
  console.log(inp);
  switch (question) {
    case 1:
      if (inp > 0) {
        db.collection("users")
          .doc(currentUser.id)
          .update({
            Archery: firebase.firestore.FieldValue.increment(inp),
            photography: firebase.firestore.FieldValue.increment(inp),
            soccer: firebase.firestore.FieldValue.increment(inp),
            hiking: firebase.firestore.FieldValue.increment(inp),
            Kayak: firebase.firestore.FieldValue.increment(inp),
          });
      }
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          rubixCube: firebase.firestore.FieldValue.increment(inp),
          coding: firebase.firestore.FieldValue.increment(inp),
          gym: firebase.firestore.FieldValue.increment(inp),
          guitar: firebase.firestore.FieldValue.increment(inp),
          bouldering: firebase.firestore.FieldValue.increment(inp),
          magic: firebase.firestore.FieldValue.increment(inp),
          martialArts: firebase.firestore.FieldValue.increment(inp),
          crochet: firebase.firestore.FieldValue.increment(inp),
          boardGames: firebase.firestore.FieldValue.increment(inp),
          basketball: firebase.firestore.FieldValue.increment(inp),
          suduko: firebase.firestore.FieldValue.increment(inp),
          magicTricks: firebase.firestore.FieldValue.increment(inp),
          coincollecting: firebase.firestore.FieldValue.increment(inp),
          tableTennis: firebase.firestore.FieldValue.increment(inp),
          origami: firebase.firestore.FieldValue.increment(inp),
        })
      }
      break;
    case 2:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          Archery: firebase.firestore.FieldValue.increment(inp),
          gym: firebase.firestore.FieldValue.increment(inp),
          bouldering: firebase.firestore.FieldValue.increment(inp),
          martialArts: firebase.firestore.FieldValue.increment(inp),
          basketball: firebase.firestore.FieldValue.increment(inp),
          soccer: firebase.firestore.FieldValue.increment(inp),
          hiking: firebase.firestore.FieldValue.increment(inp),
          Kayak: firebase.firestore.FieldValue.increment(inp),
          tableTennis: firebase.firestore.FieldValue.increment(inp),
      })}
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          rubixCube: firebase.firestore.FieldValue.increment(inp),
          coding: firebase.firestore.FieldValue.increment(inp),
          guitar: firebase.firestore.FieldValue.increment(inp),
          magic: firebase.firestore.FieldValue.increment(inp),
          crochet: firebase.firestore.FieldValue.increment(inp),
          boardGames: firebase.firestore.FieldValue.increment(inp),
          suduko: firebase.firestore.FieldValue.increment(inp),
          magicTricks: firebase.firestore.FieldValue.increment(inp),
          coincollecting: firebase.firestore.FieldValue.increment(inp),
          origami: firebase.firestore.FieldValue.increment(inp),
      })}
      break;

    case 3:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          Archery: firebase.firestore.FieldValue.increment(inp),
          woodworking: firebase.firestore.FieldValue.increment(inp),
          coincollecting: firebase.firestore.FieldValue.increment(inp),
          Kayak: firebase.firestore.FieldValue.increment(inp),
      })}
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          rubixCube: firebase.firestore.FieldValue.increment(inp),
          coding: firebase.firestore.FieldValue.increment(inp),
          basketball: firebase.firestore.FieldValue.increment(inp),
          soccer: firebase.firestore.FieldValue.increment(inp),
          suduko: firebase.firestore.FieldValue.increment(inp),
          tableTennis: firebase.firestore.FieldValue.increment(inp),
      })}
      break;

    case 4:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          gym: firebase.firestore.FieldValue.increment(inp),
          magic: firebase.firestore.FieldValue.increment(inp),
          martialArts: firebase.firestore.FieldValue.increment(inp),
          boardGames: firebase.firestore.FieldValue.increment(inp),

      })}
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          rubixCube: firebase.firestore.FieldValue.increment(inp),
          coding: firebase.firestore.FieldValue.increment(inp),
          bouldering: firebase.firestore.FieldValue.increment(inp),
          crochet: firebase.firestore.FieldValue.increment(inp),
          photography: firebase.firestore.FieldValue.increment(inp),
          suduko: firebase.firestore.FieldValue.increment(inp),
          hiking: firebase.firestore.FieldValue.increment(inp),
          coincollecting: firebase.firestore.FieldValue.increment(inp),
          origami: firebase.firestore.FieldValue.increment(inp),
        })
      }
      break;
    case 5:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          Archery: firebase.firestore.FieldValue.increment(inp),
          gym: firebase.firestore.FieldValue.increment(inp),
          bouldering: firebase.firestore.FieldValue.increment(inp),
          martialArts: firebase.firestore.FieldValue.increment(inp),
          hiking: firebase.firestore.FieldValue.increment(inp),
          Kayak: firebase.firestore.FieldValue.increment(inp),
          woodworking: firebase.firestore.FieldValue.increment(inp),
          tableTennis: firebase.firestore.FieldValue.increment(inp),
        })
      }
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          magic: firebase.firestore.FieldValue.increment(inp),
          photography: firebase.firestore.FieldValue.increment(inp),
          boardGames: firebase.firestore.FieldValue.increment(inp),

        })
      }
      break;

    case 6:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          guitar: firebase.firestore.FieldValue.increment(inp),
          magic: firebase.firestore.FieldValue.increment(inp),
          crochet: firebase.firestore.FieldValue.increment(inp),
          photography: firebase.firestore.FieldValue.increment(inp),
          boardGames: firebase.firestore.FieldValue.increment(inp),
          magicTricks: firebase.firestore.FieldValue.increment(inp),
          woodworking: firebase.firestore.FieldValue.increment(inp),

        })
      }
      if (inp < 0){
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          rubixCube: firebase.firestore.FieldValue.increment(inp),
          bouldering: firebase.firestore.FieldValue.increment(inp),
          martialArts: firebase.firestore.FieldValue.increment(inp),
          basketball: firebase.firestore.FieldValue.increment(inp),
          soccer: firebase.firestore.FieldValue.increment(inp),
          suduko: firebase.firestore.FieldValue.increment(inp),
          hiking: firebase.firestore.FieldValue.increment(inp),
          coincollecting: firebase.firestore.FieldValue.increment(inp),

        })
      }
      break;

    case 7:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          coding: firebase.firestore.FieldValue.increment(inp),
          crochet: firebase.firestore.FieldValue.increment(inp),
          photography: firebase.firestore.FieldValue.increment(inp),
          woodworking: firebase.firestore.FieldValue.increment(inp),
          coincollecting: firebase.firestore.FieldValue.increment(inp),
          origami: firebase.firestore.FieldValue.increment(inp),
        })
      }
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          Archery: firebase.firestore.FieldValue.increment(inp),
          gym: firebase.firestore.FieldValue.increment(inp),
          guitar: firebase.firestore.FieldValue.increment(inp),
          bouldering: firebase.firestore.FieldValue.increment(inp),
          martialArts: firebase.firestore.FieldValue.increment(inp),
          boardGames: firebase.firestore.FieldValue.increment(inp),
          basketball: firebase.firestore.FieldValue.increment(inp),
          soccer: firebase.firestore.FieldValue.increment(inp),
          hiking: firebase.firestore.FieldValue.increment(inp),
          magicTricks: firebase.firestore.FieldValue.increment(inp),
          Kayak: firebase.firestore.FieldValue.increment(inp),
          tableTennis: firebase.firestore.FieldValue.increment(inp),
        })
      }
      break;

    case 8:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          basketball: firebase.firestore.FieldValue.increment(inp),
          magic: firebase.firestore.FieldValue.increment(inp),
          soccer: firebase.firestore.FieldValue.increment(inp),
          tableTennis: firebase.firestore.FieldValue.increment(inp),
        })
      }
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          guitar: firebase.firestore.FieldValue.increment(inp),
          crochet: firebase.firestore.FieldValue.increment(inp),
          photography: firebase.firestore.FieldValue.increment(inp),
          suduko: firebase.firestore.FieldValue.increment(inp),
          hiking: firebase.firestore.FieldValue.increment(inp),
          magicTricks: firebase.firestore.FieldValue.increment(inp),
          Kayak: firebase.firestore.FieldValue.increment(inp),
          woodworking: firebase.firestore.FieldValue.increment(inp),
          origami: firebase.firestore.FieldValue.increment(inp),
        })
      }
      break;

    case 9:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          rubixCube: firebase.firestore.FieldValue.increment(inp),
          Archery: firebase.firestore.FieldValue.increment(inp),
          coding: firebase.firestore.FieldValue.increment(inp),
          guitar: firebase.firestore.FieldValue.increment(inp),
          crochet: firebase.firestore.FieldValue.increment(inp),
          photography: firebase.firestore.FieldValue.increment(inp),
          suduko: firebase.firestore.FieldValue.increment(inp),
          magicTricks: firebase.firestore.FieldValue.increment(inp),
          woodworking: firebase.firestore.FieldValue.increment(inp),
          coincollecting: firebase.firestore.FieldValue.increment(inp),
          origami: firebase.firestore.FieldValue.increment(inp),

        })
      }
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          boardGames: firebase.firestore.FieldValue.increment(inp),
          basketball: firebase.firestore.FieldValue.increment(inp),
          soccer: firebase.firestore.FieldValue.increment(inp),

        })
      }
      break;

    case 10:
      if (inp > 0) {
        db.collection("users").doc(currentUser.id).update({
          rubixCube: firebase.firestore.FieldValue.increment(inp),
          coding: firebase.firestore.FieldValue.increment(inp),
          guitar: firebase.firestore.FieldValue.increment(inp),
          magic: firebase.firestore.FieldValue.increment(inp),
          woodworking: firebase.firestore.FieldValue.increment(inp),
          tableTennis: firebase.firestore.FieldValue.increment(inp),
        })
      }
      if (inp < 0) {
        inp = inp * -1;
        db.collection("users").doc(currentUser.id).update({
          gym: firebase.firestore.FieldValue.increment(inp),
          bouldering: firebase.firestore.FieldValue.increment(inp),
          martialArts: firebase.firestore.FieldValue.increment(inp),

        })
      }
      break;
  }
}
