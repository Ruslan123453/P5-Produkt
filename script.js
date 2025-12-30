let era = "today";

const data = {
  today: {
    gebiet: {
      text: "Deutschland ist heute ein vereinigtes Land in der Mitte Europas und Mitglied der Europäischen Union.",
      img: "./images/today/karte.webp"
    },
    waehrung: {
      text: "Heute wird in Deutschland mit dem Euro bezahlt, der in vielen europäischen Ländern gültig ist.",
      img: "./images/today/waehrung.jpg"
    },
    schule: {
      text: "Digitale Medien, Tablets, Smartboards und moderne Unterrichtsmethoden prägen den Schulalltag.",
      img: "./images/today/schulen.jpg"
    },
    arbeit: {
      text: "Viele Berufe sind digital. Homeoffice, flexible Arbeitszeiten und internationale Zusammenarbeit sind verbreitet.",
      img: "./images/today/arbeit.jpg"
    },
    freizeit: {
      text: "Streaming-Dienste, Social Media, Gaming und Reisen spielen eine große Rolle in der Freizeit.",
      img: "./images/today/freizeit.jpeg"
    },
    familie: {
      text: "Es gibt viele verschiedene Familienmodelle, zum Beispiel Alleinerziehende, Patchwork- oder Regenbogenfamilien.",
      img: "./images/today/familie.jpg"
    },
    technik: {
      text: "Smartphones, Internet, künstliche Intelligenz und moderne Technik bestimmen den Alltag.",
      img: "./images/today/technik.jpg"
    },
    kleidung: {
      text: "Mode ist individuell, schnelllebig und wird stark von Trends und sozialen Medien beeinflusst.",
      img: "./images/today/kleidung.jpg"
    },
    medizin: {
      text: "Moderne Medizin nutzt Hightech-Geräte, digitale Diagnostik und neue Behandlungsmethoden.",
      img: ""
    },
    traeume: {
      text: "Viele Menschen träumen von Karriere, Reisen, Selbstverwirklichung und einem guten Lebensstandard.",
      img: ""
    }
  },

  
  past: {
    gebiet: {
      text: "1975 war Deutschland in zwei Staaten geteilt: die Bundesrepublik Deutschland (Westen) und die DDR (Osten).",
      img: "./images/past/karte.png"
    },
    waehrung: {
      text: "In Westdeutschland bezahlte man mit der Deutschen Mark, in der DDR mit der Mark der DDR.",
      img: "./images/past/waehrung11.jpg"
    },
    schule: {
      text: "Der Unterricht war streng, frontal und ohne digitale Technik. Disziplin spielte eine große Rolle.",
      img: "./images/past/schule.jpg"
    },
    arbeit: {
      text: "Viele Menschen arbeiteten in Fabriken, in der Industrie oder im Handwerk. Die Arbeit war oft körperlich anstrengend.",
      img: "./images/past/arbeit.jpg"
    },
    freizeit: {
      text: "Fernsehen, Radio, Vereine und Treffen mit Freunden waren die wichtigsten Freizeitbeschäftigungen.",
      img: "./images/past/freizeit2.webp"
    },
    familie: {
      text: "Die Familie hatte meist eine klassische Rollenverteilung: der Mann arbeitete, die Frau kümmerte sich um Haushalt und Kinder.",
      img: "./images/past/familie.jpg"
    },
    technik: {
      text: "Es gab kaum Elektronik, keine Computer und kein Internet. Technik war einfach und langlebig.",
      img: "./images/past/technik.jpg"
    },
    kleidung: {
      text: "Kleidung war praktisch, robust und wurde oft lange getragen oder repariert.",
      img: "./images/past/kleidung.jpg"
    },
    medizin: {
      text: "Die medizinische Versorgung war einfacher. Es gab weniger moderne Geräte und längere Heilungszeiten.",
      img: "./images/past/medizin.jpg"
    },
    traeume: {
      text: "Viele Menschen träumten von Sicherheit, einer festen Arbeit, einer Familie und einem ruhigen Leben.",
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