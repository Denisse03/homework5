import * as $ from "jquery";

import {
  addAlbumToDB,
  showAllAlbums,
  showAllHipHop,
  showAllJazz,
  showAllRap,
} from "./model";

function initListeners() {
  $("#addAlbum").on("click", (e) => {
    console.log("addAlbum");
    let albumName = $("#albumName").val();
    let albumImage = $("#albumImage").val();
    let albumGenre = $("#albumGenre").val();
    console.log(albumName, albumImage, albumGenre);
    let albumObj = {
      albumName: albumName,
      albumImage: albumImage,
      albumGenre: albumGenre,
    };
    addAlbumToDB(albumObj);
  });
  $("#albums").on("click", (e) => {
    console.log("albums clicked");
    showAllAlbums();
  });

  $("#hop").on("click", (e) => {
    console.log("albums clicked");
    showAllHipHop();
  });

  $("#jazzy").on("click", (e) => {
    console.log("albums clicked");
    showAllJazz();
  });

  $("#rapper").on("click", (e) => {
    console.log("albums clicked");
    showAllRap();
  });
}

$(document).ready(function () {
  initListeners();
});
