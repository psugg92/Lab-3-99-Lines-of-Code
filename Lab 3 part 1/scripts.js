let friends = ["Evan", "Hayley", "Bob", "Joe", "Jill"];

document.addEventListener("DOMContentLoaded", function() {
  let singButton = document.createElement("button");
  let singBtnText = document.createTextNode("Sing!");

  singButton.appendChild(singBtnText);
  document.body.appendChild(singButton);

  //Button Start
  singButton.addEventListener("click", function() {

    //Loop Start
    for (i = 0; i != 5; i++) {
      
        let div = document.createElement("div");
        div.className = "friend";
        document.body.appendChild(div);
        let h3 = document.createElement("h3");
        h3Text = document.createTextNode(friends[i]);
        h3.appendChild(h3Text);
        document.body.appendChild(h3);
        div.appendChild(h3);

        let songDiv = document.createElement('div');
        songDiv.className = "song";
        document.body.appendChild(songDiv);

        

        for (x = 99; x != 0; x--) {

        

        if (x > 2) {
          let songText1 = document.createTextNode(
            x + " lines of code in the file, " + x + " lines of code; "
          );
          let songText2 = document.createTextNode(
            friends[i] + " strikes one out, clears it all out, "
          );
          let songText3 = document.createTextNode(
            x - 1 + " lines of code in the file!"
          );
          let paragraph = document.createElement("p");
          paragraph.id = "song";
          paragraph.appendChild(songText1);
          paragraph.appendChild(songText2);
          paragraph.appendChild(songText3);
          div.appendChild(paragraph);
          document.body.appendChild(paragraph);
          songDiv.appendChild(paragraph);
          div.appendChild(songDiv);
          

        } else if (x == 2) {
          let songText1 = document.createTextNode(
            x + " lines of code in the file, " + x + " lines of code; "
          );
          let songText2 = document.createTextNode(
            friends[i] + " strikes one out, clears it all out, "
          );
          let songText3 = document.createTextNode(
            x - 1 + " line of code in the file!"
          );
          let paragraph = document.createElement("p");
          paragraph.id = "song";
          paragraph.appendChild(songText1);
          paragraph.appendChild(songText2);
          paragraph.appendChild(songText3);
          document.body.appendChild(paragraph);
          songDiv.appendChild(paragraph);
          div.appendChild(songDiv);
        } else {
          let songText1 = document.createTextNode(
            x + " line of code in the file, " + x + " line of code; "
          );
          let songText2 = document.createTextNode(
            friends[i] + " strikes one out, clears it all out, "
          );
          let songText3 = document.createTextNode(
            x - 1 + " lines of code in the file!"
          );
          let paragraph = document.createElement("p");
          paragraph.id = "song";
          paragraph.appendChild(songText1);
          paragraph.appendChild(songText2);
          paragraph.appendChild(songText3);
          document.body.appendChild(paragraph);
          songDiv.appendChild(paragraph);
          div.appendChild(songDiv);
        }
      }
    }
  });
});
