import * as $ from "jquery";

import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./firebaseConfig";

import { getAuth } from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export async function addAlbumToDB(albumObj) {
  try {
    const docRef = await addDoc(collection(db, "albums"), albumObj);
    console.log("document written id:", docRef.id);
  } catch (error) {
    console.error("error");
  }
}

onSnapshot(collection(db, "albums"), (snapshot) => {
  $(".showAlbums").empty();
  let ablumstring = "";
  snapshot.forEach((doc) => {
    ablumstring += `<div class="album">`;
    ablumstring += `<h3>${doc.data().albumName}</h3>`;
    ablumstring += `<div class="albumImg"><img src="${
      doc.data().albumImage
    }"/></div>`;
    ablumstring += `<p class="albumGenre">${doc.data().albumGenre}</p>`;

    ablumstring += `</div>`;
  });
  $(".showAlbums").append(ablumstring);
});

export async function showAllAlbums() {
  try {
    const querySnapshot = await getDocs(collection(db, "albums"));
    let albumString = "";
    querySnapshot.forEach((doc) => {
      albumString += `<div class ="album">`;
      albumString += `<h3>${doc.data().albumName}</h3>`;
      albumString += `<div class ="albumImg"><img src="${
        doc.data().albumImage
      }"/></div>`;
      albumString += `<p class="albumGenre">${doc.data().albumGenre}</p>`;
      albumString += `</div>`;
    });

    $(".showAlbums").append(albumString);
  } catch (e) {
    console.error("Error getting documents: ", e.message);
  }
}

export async function showAllHipHop() {
  try {
    const querySnapshot = await getDocs(collection(db, "albums"));
    let albumString = "";
    querySnapshot.forEach((doc) => {
      if (doc.data().albumGenre == "Hip-Hop") {
        albumString += `<div class ="album">`;
        albumString += `<h3>${doc.data().albumName}</h3>`;
        albumString += `<div class ="albumImg"><img src="${
          doc.data().albumImage
        }"/></div>`;
        albumString += `<p class="albumGenre">${doc.data().albumGenre}</p>`;
        albumString += `</div>`;
      }
    });

    $(".showAlbums").empty();
    $(".showAlbums").append(albumString);
  } catch (e) {
    console.error("Error getting documents: ", e.message);
  }
}

export async function showAllJazz() {
  try {
    const querySnapshot = await getDocs(collection(db, "albums"));
    let albumString = "";
    querySnapshot.forEach((doc) => {
      if (doc.data().albumGenre == "Jazz") {
        albumString += `<div class ="album">`;
        albumString += `<h3>${doc.data().albumName}</h3>`;
        albumString += `<div class ="albumImg"><img src="${
          doc.data().albumImage
        }"/></div>`;
        albumString += `<p class="albumGenre">${doc.data().albumGenre}</p>`;
        albumString += `</div>`;
      }
    });
    $(".showAlbums").empty();
    $(".showAlbums").append(albumString);
  } catch (e) {
    console.error("Error getting documents: ", e.message);
  }
}

export async function showAllRap() {
  try {
    const querySnapshot = await getDocs(collection(db, "albums"));
    let albumString = "";
    querySnapshot.forEach((doc) => {
      if (doc.data().albumGenre == "Rap") {
        albumString += `<div class ="album">`;
        albumString += `<h3>${doc.data().albumName}</h3>`;
        albumString += `<div class ="albumImg"><img src="${
          doc.data().albumImage
        }"/></div>`;
        albumString += `<p class="albumGenre">${doc.data().albumGenre}</p>`;
        albumString += `</div>`;
      }
    });
    $(".showAlbums").empty();
    $(".showAlbums").append(albumString);
  } catch (e) {
    console.error("Error getting documents: ", e.message);
  }
}
