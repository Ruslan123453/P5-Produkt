let era = "today";

const data = {
  today: {
    gebiet: {
      text: "",
      img: "./images/today/karte.webp"
    },
    waehrung: {
      text: "",
      img: "./images/today/waehrung.jpg"
    },
    schule: {
      text: "Digitale Medien, Tablets und moderne Unterrichtsmethoden.",
      img: "./images/today/schulen.jpg"
    },
    arbeit: {
      text: "Viele Berufe sind digital, Homeoffice ist verbreitet.",
      img: "./images/today/arbeit.jpg"
    },
    freizeit: {
      text: "Streaming, Social Media und Gaming.",
      img: "./images/today/freizeit.jpeg"
    },
    familie: {
      text: "Viele verschiedene Familienmodelle.",
      img: "./images/today/familie.jpg"
    },
    technik: {
      text: "Smartphones, Internet und KI.",
      img: "./images/today/technik.jpg"
    },
    kleidung: {
      text: "Individuell, modisch und schnelllebig.",
      img: ""
    },
    medizin: {
      text: "Moderne Diagnostik und Behandlung.",
      img: ""
    },
    traeume: {
      text: "Karriere, Reisen und Selbstverwirklichung.",
      img: ""
    }
  },

  past: {
    waehrung: {
      text: "",
      img: "./images/past/waehrung.jpg"
    },
    gebiet: {
      text: "",
      img: "./images/past/karte.png"
    },
    schule: {
      text: "Strenger Unterricht ohne digitale Technik.",
      img: "./images/past/schulen.jpg"
    },
    arbeit: {
      text: "Industrie, Handwerk und Fabrikarbeit.",
      img: "./images/past/arbeit.jpg"
    },
    freizeit: {
      text: "Fernsehen, Radio und Vereine.",
      img: "./images/past/freizeit2.webp"
    },
    familie: {
      text: "Klassische Rollenverteilung.",
      img: "./images/past/familie.jpg"
    },
    technik: {
      text: "Kaum Elektronik, kein Internet.",
      img: "./images/past/technik.jpg"
    },
    kleidung: {
      text: "Praktisch und langlebig.",
      img: ""
    },
    medizin: {
      text: "Weniger Technik, längere Heilung.",
      img: ""
    },
    traeume: {
      text: "Sicherheit, Arbeit und Familie.",
      img: ""
    }
  }
};

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function setEra(e) {
  era = e;
  show("topics");
}

function openTopic(topic) {
  document.getElementById("contentTitle").innerText = topic.toUpperCase();
  document.getElementById("contentText").innerText = data[era][topic].text;
  document.getElementById("contentImage").src = data[era][topic].img;
  show("content");
}

function goStart() {
  show("start");
}

function goTopics() {
  show("topics");
}

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};