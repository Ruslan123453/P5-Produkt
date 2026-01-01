let era = "today";
let currentTopic = "";

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

// ================== Опросы ==================
const surveys = {
  schule: {
    today: {
      question: "Wie sieht dein Schulalltag heute aus?",
      answers: [
        "Anna (21): Ich lerne täglich mit Tablets und digitalen Tools, das erleichtert das Arbeiten sehr.",
        "Lukas (22): Gruppenarbeit und Präsentationen sind fest im Stundenplan verankert, oft spannend aber auch stressig.",
        "Mia (24): Moderne Schule ist abwechslungsreich, wir nutzen oft Apps und Online-Plattformen."
      ]
    },
    past: {
      question: "Wie sah dein Schulalltag 1975 aus?",
      answers: [
        "Peter (72): Wir hatten strengen Frontalunterricht, alles war analog und Disziplin stand an erster Stelle.",
        "Ursula (69): Schule endete meist mittags, danach erledigten wir Hausaufgaben und halfen zu Hause.",
        "Karl (74): Noten und Ordnung waren sehr wichtig, Technik gab es kaum, alles in Heften.",
        "Helga (70): Hausaufgaben waren Pflicht und das Lernen erfolgte ausschließlich aus Büchern."
      ]
    }
  },
  arbeit: {
    today: {
      question: "Wie sieht Arbeit heute aus?",
      answers: [
        "Jonas (23): Ich arbeite oft flexibel und nutze digitale Tools für Kommunikation und Organisation.",
        "Lea (25): Homeoffice und Remote-Arbeit sind Alltag, Emails und Cloudlösungen sind ständig im Einsatz.",
        "Tim (21): Flexible Arbeitszeiten geben mir Freiheit, wir nutzen viele Softwarelösungen."
      ]
    },
    past: {
      question: "Wie war Arbeit 1975?",
      answers: [
        "Hans (73): Ich arbeitete täglich in der Fabrik, feste Schichten und körperlich harte Arbeit.",
        "Monika (71): Büroarbeit war wenig digital, alles handschriftlich, sehr diszipliniert.",
        "Rolf (75): Meist ein Job ein Leben lang, Sicherheit war wichtiger als Kreativität.",
        "Ingrid (70): Struktur und Pünktlichkeit dominierten den Arbeitsalltag."
      ]
    }
  },
  freizeit: {
    today: {
      question: "Wie verbringen junge Menschen ihre Freizeit heute?",
      answers: [
        "Sophie (22): Ich streame Serien, treffe Freunde online und tausche mich in Social Media aus.",
        "Ben (24): Gaming ist mein Haupthobby, wir spielen regelmäßig zusammen online.",
        "Laura (21): Sport, Reisen und Treffen mit Freunden stehen im Vordergrund."
      ]
    },
    past: {
      question: "Wie verbrachten Menschen 1975 ihre Freizeit?",
      answers: [
        "Dieter (74): Wir trafen uns oft mit Freunden und spielten Brettspiele.",
        "Brigitte (71): Fernsehen und Radio waren Hauptunterhaltung, Vereine waren wichtig.",
        "Klaus (76): Vereinsleben und Nachbarschaftstreffen bestimmten Freizeit.",
        "Renate (70): Einfach, aber wir hatten gemeinsame Zeit und Aktivitäten."
      ]
    }
  },
  familie: {
    today: {
      question: "Wie sieht Familie heute aus?",
      answers: [
        "Marie (23): Wir leben in modernen Patchwork-Familien, jeder unterstützt sich gegenseitig.",
        "Paul (24): Gleichberechtigung ist normal, Kinderbetreuung wird geteilt.",
        "Nina (21): Familienmodelle sind sehr vielfältig, jeder gestaltet Alltag individuell."
      ]
    },
    past: {
      question: "Wie war Familie 1975?",
      answers: [
        "Gerhard (72): Männer gingen arbeiten, Frauen waren zu Hause, klare Rollenverteilung.",
        "Hilde (71): Hausarbeit und Kindererziehung lagen bei Frauen, Sicherheit stand im Vordergrund.",
        "Fritz (75): Familienleben streng hierarchisch, gemeinsames Abendessen war Pflicht.",
        "Ilse (70): Traditionelle Werte bestimmten den Alltag, Freizeit war familienorientiert."
      ]
    }
  },
  technik: {
    today: {
      question: "Welche Technik nutzt man heute?",
      answers: [
        "Tom (22): Smartphones, Internet und digitale Tools sind aus meinem Alltag nicht wegzudenken.",
        "Eva (24): Künstliche Intelligenz und Apps erleichtern viele Aufgaben.",
        "Lena (21): Technik vereinfacht Organisation, Lernen und Kommunikation enorm."
      ]
    },
    past: {
      question: "Welche Technik gab es 1975?",
      answers: [
        "Karl (72): Kaum Elektronik, alles war analog.",
        "Renate (70): Telefon nur selten zuhause, Computer gab es nicht.",
        "Heinz (75): Geräte waren mechanisch und langlebig, wenig Komfort.",
        "Ursula (69): Radio und Fernseher waren die Highlights, sonst kaum Technik."
      ]
    }
  },
  kleidung: {
    today: {
      question: "Wie kleiden sich Menschen heute?",
      answers: [
        "Sina (21): Mode ist Ausdruck der Persönlichkeit, oft individuell und experimentell.",
        "Max (23): Aktuelle Trends beeinflussen meinen Stil stark.",
        "Laura (25): Kleidung kaufe ich gezielt und kombiniere kreativ."
      ]
    },
    past: {
      question: "Wie kleideten sich Menschen 1975?",
      answers: [
        "Peter (72): Kleidung war robust und praktisch, oft repariert.",
        "Monika (71): Man trug lange dieselben Kleidungsstücke.",
        "Klaus (74): Kleidung wurde repariert, bevor neue gekauft wurde.",
        "Ingrid (70): Schlicht und funktional war das Motto."
      ]
    }
  },
  medizin: {
    today: {
      question: "Wie sieht Medizin heute aus?",
      answers: [
        "Anna (21): Hightech-Geräte, schnelle Diagnostik und digitale Lösungen.",
        "Lukas (23): Behandlungsmethoden sind präzise und effizient.",
        "Mia (25): Medizin ist moderner, schneller und patientenfreundlicher."
      ]
    },
    past: {
      question: "Wie war Medizin 1975?",
      answers: [
        "Peter (72): Weniger Geräte, Heilung dauerte länger, alles war einfacher.",
        "Ursula (70): Arztbesuche waren selten, Medikamente limitiert.",
        "Karl (74): Medizin war zuverlässig, aber langsamer.",
        "Helga (69): Geduld war oft das wichtigste bei Krankheiten."
      ]
    }
  },
  traeume: {
    today: {
      question: "Welche Träume haben junge Menschen heute?",
      answers: [
        "Sophie (22): Karriere, Reisen und Selbstverwirklichung.",
        "Ben (24): Freiheit, Erfolg und gutes Leben.",
        "Laura (21): Persönliche Entwicklung und Abenteuer."
      ]
    },
    past: {
      question: "Welche Träume hatten Menschen 1975?",
      answers: [
        "Dieter (74): Sicherheit und Familie im Vordergrund.",
        "Brigitte (71): Ein fester Job und Stabilität.",
        "Klaus (75): Ruhiges Leben und Verlässlichkeit.",
        "Renate (70): Gesundheit und soziale Absicherung."
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

  const surveyBtn = document.getElementById("surveyBtn");
  if (topic === "gebiet" || topic === "waehrung") {
    surveyBtn.style.display = "none";
  } else {
    surveyBtn.style.display = "inline-block";
  }

  show("content");
}

function openSurvey() {
  const s = surveys[currentTopic][era];
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

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};