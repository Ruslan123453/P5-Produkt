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
      img: "./images/today/medizin.jpg"
    },
    traeume: {
      text: "Viele Menschen träumen von Karriere, Reisen, Selbstverwirklichung und einem guten Lebensstandard.",
      img: "./images/today/traeume1.jpg"
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
      img: "./images/past/traeume1.jpg"
    }
  }
};

// ✅ Опросы для всех тем, кроме Gebiet и Währung
const surveys = {
  schule: {
    today: {
      question: "Wie sieht dein Schulalltag heute aus?",
      answers: [
        "Anna (21): Ich lerne viel mit Tablets und digitalen Aufgaben.",
        "Lukas (22): Gruppenarbeiten und Präsentationen gehören zum Alltag.",
        "Mia (24): Schule ist modern, aber manchmal stressig."
      ]
    },
    past: {
      question: "Wie sah dein Schulalltag 1975 aus?",
      answers: [
        "Peter (72): Strenger Frontalunterricht ohne Technik.",
        "Ursula (69): Schule endete meist mittags.",
        "Karl (74): Disziplin war sehr wichtig.",
        "Helga (70): Hausaufgaben mussten immer gemacht werden."
      ]
    }
  },
  arbeit: {
    today: {
      question: "Wie sieht Arbeit heute aus?",
      answers: [
        "Jonas (23): Ich arbeite häufig im Homeoffice.",
        "Lea (25): Computer und Internet gehören zu jedem Job.",
        "Tim (21): Flexible Arbeitszeiten sind sehr praktisch."
      ]
    },
    past: {
      question: "Wie war Arbeit 1975?",
      answers: [
        "Hans (73): Ich arbeitete jeden Tag in der Fabrik.",
        "Monika (71): Die Arbeit war körperlich anstrengend.",
        "Rolf (75): Man blieb oft sein Leben lang in einem Job.",
        "Ingrid (70): Sicherheit war wichtiger als Spaß an der Arbeit."
      ]
    }
  },
  freizeit: {
    today: {
      question: "Wie verbringen junge Menschen ihre Freizeit heute?",
      answers: [
        "Sophie (22): Ich nutze Social Media und Streamingdienste.",
        "Ben (24): Gaming ist mein Haupthobby.",
        "Laura (21): Reisen und Freunde treffen sind wichtig."
      ]
    },
    past: {
      question: "Wie verbrachten Menschen 1975 ihre Freizeit?",
      answers: [
        "Dieter (74): Wir trafen uns oft mit Freunden.",
        "Brigitte (71): Fernsehen und Radio waren beliebt.",
        "Klaus (76): Vereine spielten eine große Rolle.",
        "Renate (70): Freizeit war einfach, aber schön."
      ]
    }
  },
  familie: {
    today: {
      question: "Wie sieht Familie heute aus?",
      answers: [
        "Marie (23): Ich lebe in einer Patchwork-Familie.",
        "Paul (24): Meine Familie ist sehr modern.",
        "Nina (21): Familienmodelle sind heute sehr vielfältig."
      ]
    },
    past: {
      question: "Wie war Familie 1975?",
      answers: [
        "Gerhard (72): Klassische Rollenverteilung üblich.",
        "Hilde (71): Frauen kümmerten sich um Haus und Kinder.",
        "Fritz (75): Männer gingen arbeiten, Frauen blieben zuhause.",
        "Ilse (70): Die Familie war sehr hierarchisch organisiert."
      ]
    }
  },
  technik: {
    today: {
      question: "Welche Technik nutzt man heute?",
      answers: [
        "Tom (22): Ich nutze täglich Smartphone und Internet.",
        "Eva (24): KI und digitale Tools gehören zu meinem Alltag.",
        "Lena (21): Technik erleichtert viele Aufgaben."
      ]
    },
    past: {
      question: "Welche Technik gab es 1975?",
      answers: [
        "Karl (72): Es gab kaum Elektronik.",
        "Renate (70): Keine Computer, alles analog.",
        "Heinz (75): Technik war robust und langlebig.",
        "Ursula (69): Telefon war selten zuhause."
      ]
    }
  },
  kleidung: {
    today: {
      question: "Wie kleiden sich Menschen heute?",
      answers: [
        "Sina (21): Mode ist individuell und trendbewusst.",
        "Max (23): Ich folge aktuellen Modetrends.",
        "Laura (25): Kleidung wird oft neu gekauft und experimentell kombiniert."
      ]
    },
    past: {
      question: "Wie kleideten sich Menschen 1975?",
      answers: [
        "Peter (72): Kleidung war praktisch und robust.",
        "Monika (71): Man trug Sachen lange.",
        "Klaus (74): Reparaturen waren üblich.",
        "Ingrid (70): Kleidung war schlicht und funktional."
      ]
    }
  },
  medizin: {
    today: {
      question: "Wie sieht Medizin heute aus?",
      answers: [
        "Anna (21): Hightech-Geräte und digitale Diagnostik.",
        "Lukas (23): Moderne Behandlungsmethoden.",
        "Mia (25): Medizin ist schneller und effizienter."
      ]
    },
    past: {
      question: "Wie war Medizin 1975?",
      answers: [
        "Peter (72): Weniger Geräte, längere Heilung.",
        "Ursula (70): Behandlung war einfacher.",
        "Karl (74): Medizin war langsamer, aber zuverlässig.",
        "Helga (69): Manchmal musste man Geduld haben."
      ]
    }
  },
  traeume: {
    today: {
      question: "Welche Träume haben junge Menschen heute?",
      answers: [
        "Sophie (22): Karriere, Reisen, Selbstverwirklichung.",
        "Ben (24): Ein gutes Leben und Freiheit.",
        "Laura (21): Erfolg und persönliche Entwicklung."
      ]
    },
    past: {
      question: "Welche Träume hatten Menschen 1975?",
      answers: [
        "Dieter (74): Sicherheit und Familie.",
        "Brigitte (71): Einen festen Job.",
        "Klaus (75): Ein ruhiges Leben.",
        "Renate (70): Gesundheit und Stabilität."
      ]
    }
  }
};

// ================== Функции ==================
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function setEra(e) {
  era = e;
  show("topics");
}

function openTopic(topic) {
  currentTopic = topic;
  document.getElementById("contentTitle").innerText = topic.toUpperCase();
  document.getElementById("contentText").innerText = data[era][topic].text;
  document.getElementById("contentImage").src = data[era][topic].img;

  // Добавляем кнопку опроса
  if (topic !== "gebiet" && topic !== "waehrung") {
    if (!document.getElementById("surveyBtn")) {
      let btn = document.createElement("button");
      btn.id = "surveyBtn";
      btn.className = "back";
      btn.innerText = "Ergebnisse der Umfrage";
      btn.onclick = openSurvey;
      document.getElementById("content").appendChild(btn);
    } else {
      document.getElementById("surveyBtn").style.display = "inline-block";
    }
  }

  show("content");
}

// ================== Опрос ==================
function openSurvey() {
  const s = surveys[currentTopic][era];
  
  // Создаём модальное окно, если ещё нет
  if (!document.getElementById("surveyModal")) {
    const modal = document.createElement("div");
    modal.id = "surveyModal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <h3 id="surveyQuestion"></h3>
        <div id="surveyAnswers"></div>
        <button class="back" onclick="closeSurvey()">Schließen</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById("surveyQuestion").innerText = s.question;
  document.getElementById("surveyAnswers").innerHTML = s.answers.map(a => `<div class="answer">${a}</div>`).join("");
  document.getElementById("surveyModal").classList.add("active");
}

function closeSurvey() {
  document.getElementById("surveyModal").classList.remove("active");
}

// ================== Навигация ==================
function goStart() { show("start"); }
function goTopics() { show("topics"); }

// ================== Тема ==================
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};