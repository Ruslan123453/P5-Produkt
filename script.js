let era = "today";
let currentTopic = "";

const data = {
  today: {
    gebiet: {
      text: "Deutschland ist heute ein vereinigtes, demokratisches Land in der Mitte Europas. Es ist Mitglied der Europäischen Union und spielt eine wichtige politische und wirtschaftliche Rolle in Europa. Die Grenzen sind offen, Reisen und Zusammenarbeit mit anderen Ländern sind selbstverständlich.",
      img: "./images/today/karte.webp"
    },
    waehrung: {
      text: "Heute wird in Deutschland mit dem Euro bezahlt. Diese gemeinsame Währung erleichtert den Handel und das Reisen innerhalb vieler europäischer Länder. Bargeld und digitales Bezahlen werden parallel genutzt.",
      img: "./images/today/waehrung.jpg"
    },
    schule: {
      text: "Der Schulalltag ist heute stark von digitalen Medien geprägt. Tablets, Computer und Smartboards unterstützen den Unterricht. Schüler arbeiten oft in Gruppen, halten Präsentationen und lernen selbstständiges Denken, was jedoch auch Leistungsdruck erzeugen kann.",
      img: "./images/today/schulen.jpg"
    },
    arbeit: {
      text: "Viele Berufe sind heute digital oder technisch orientiert. Homeoffice, flexible Arbeitszeiten und internationale Teams sind weit verbreitet. Arbeit dient nicht nur dem Einkommen, sondern auch der Selbstverwirklichung.",
      img: "./images/today/arbeit.jpg"
    },
    freizeit: {
      text: "In der Freizeit nutzen viele Menschen Streaming-Dienste, soziale Netzwerke und Videospiele. Gleichzeitig sind Reisen, Sport und Treffen mit Freunden wichtig. Freizeitangebote sind vielfältig und individuell.",
      img: "./images/today/freizeit.jpeg"
    },
    familie: {
      text: "Heute gibt es viele unterschiedliche Familienformen, zum Beispiel Alleinerziehende, Patchwork- oder gleichgeschlechtliche Familien. Rollen innerhalb der Familie sind flexibler und stärker von Gleichberechtigung geprägt.",
      img: "./images/today/familie.jpg"
    },
    technik: {
      text: "Moderne Technik bestimmt den Alltag. Smartphones, Internet, künstliche Intelligenz und digitale Geräte sind ständig präsent. Technik erleichtert viele Aufgaben, beschleunigt jedoch auch das Leben.",
      img: "./images/today/technik.jpg"
    },
    kleidung: {
      text: "Mode ist heute sehr individuell und stark von Trends, Influencern und sozialen Medien beeinflusst. Kleidung wird häufig neu gekauft, was zu schnellem Wandel, aber auch zu Umweltproblemen führt.",
      img: "./images/today/kleidung.jpg"
    },
    medizin: {
      text: "Die moderne Medizin nutzt hochentwickelte Geräte, digitale Diagnostik und innovative Behandlungsmethoden. Krankheiten können schneller erkannt und besser behandelt werden, was die Lebenserwartung erhöht.",
      img: "./images/today/medizin.jpg"
    },
    traeume: {
      text: "Viele Menschen träumen heute von beruflichem Erfolg, Reisen, persönlicher Freiheit und Selbstverwirklichung. Gleichzeitig spielen finanzielle Sicherheit und Lebensqualität eine große Rolle.",
      img: "./images/today/traeume1.jpg"
    }
  },

  past: {
    gebiet: {
      text: "Im Jahr 1975 war Deutschland in zwei Staaten geteilt: die Bundesrepublik Deutschland im Westen und die DDR im Osten. Die Teilung prägte Politik, Alltag und Lebensbedingungen der Menschen stark.",
      img: "./images/past/karte.png"
    },
    waehrung: {
      text: "In Westdeutschland bezahlte man mit der Deutschen Mark, in der DDR mit der Mark der DDR. Die unterschiedlichen Währungen spiegelten die politische und wirtschaftliche Trennung wider.",
      img: "./images/past/waehrung11.jpg"
    },
    schule: {
      text: "Der Schulunterricht war streng und stark lehrerzentriert. Digitale Technik gab es nicht, Disziplin und Gehorsam waren sehr wichtig. Schüler hatten weniger Mitspracherecht als heute.",
      img: "./images/past/schule.jpg"
    },
    arbeit: {
      text: "Viele Menschen arbeiteten in Fabriken, in der Industrie oder im Handwerk. Die Arbeit war oft körperlich anstrengend, aber sicher. Ein Arbeitsplatz für das ganze Leben war keine Seltenheit.",
      img: "./images/past/arbeit.jpg"
    },
    freizeit: {
      text: "Freizeit war einfacher gestaltet. Fernsehen, Radio, Vereinsleben und persönliche Treffen standen im Mittelpunkt. Digitale Unterhaltung existierte nicht.",
      img: "./images/past/freizeit2.webp"
    },
    familie: {
      text: "Die Familie folgte meist einer klassischen Rollenverteilung: Der Mann arbeitete, die Frau kümmerte sich um Haushalt und Kinder. Die Familie war der zentrale Mittelpunkt des Lebens.",
      img: "./images/past/familie.jpg"
    },
    technik: {
      text: "Technik war einfach und langlebig. Es gab keine Computer, kein Internet und kaum elektronische Geräte. Viele Tätigkeiten wurden manuell erledigt.",
      img: "./images/past/technik.jpg"
    },
    kleidung: {
      text: "Kleidung war funktional, robust und wurde lange getragen. Reparieren statt Wegwerfen war normal, Mode änderte sich nur langsam.",
      img: "./images/past/kleidung.jpg"
    },
    medizin: {
      text: "Die medizinische Versorgung war deutlich einfacher als heute. Es gab weniger Medikamente und technische Geräte, weshalb Behandlungen und Heilungen oft länger dauerten.",
      img: "./images/past/medizin.jpg"
    },
    traeume: {
      text: "Viele Menschen träumten von einem sicheren Arbeitsplatz, einer eigenen Familie und einem ruhigen, stabilen Leben. Materielle Sicherheit stand im Vordergrund.",
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
        "Maria (17): Fast alles läuft digital. Wir arbeiten viel mit Tablets und Online-Plattformen, das ist praktisch, aber manchmal auch anstrengend.",
        "Alina (19): Wir machen viele Gruppenarbeiten und Präsentationen. Das ist abwechslungsreich, aber der Leistungsdruck ist schon hoch.",
        "Lukas (19): Kein Tag ist gleich. Mal Apps, mal Diskussionen – langweilig ist es selten."
      ]
    },
    past: {
      question: "Wie sah dein Schulalltag 1975 aus?",
      answers: [
        "Peter (72): Der Lehrer stand vorne und wir hörten zu. Fragen stellte man eher selten.",
        "Ursula (70): Wir schrieben alles mit der Hand, Hefte mussten ordentlich sein.",
        "Karl (74): Disziplin war extrem wichtig, Fehler wurden sofort angesprochen.",
        "Helga (69): Hausaufgaben gehörten einfach dazu, Ausreden gab es nicht."
      ]
    }
  },

  arbeit: {
    today: {
      question: "Wie sieht Arbeit heute aus?",
      answers: [
        "Anna (22): Ich kann meine Arbeitszeit oft flexibel einteilen, das gibt mir Freiheit.",
        "Lukas (23): Viele Meetings laufen online, manchmal sieht man Kollegen tagelang nicht persönlich.",
        "Mia (21): Arbeit soll für mich Sinn machen, nicht nur Geld bringen."
      ]
    },
    past: {
      question: "Wie war Arbeit 1975?",
      answers: [
        "Peter (72): Ich hatte feste Schichten und musste jeden Tag pünktlich sein.",
        "Ursula (70): Im Büro wurde alles per Hand geschrieben, Computer kannten wir nicht.",
        "Karl (74): Man suchte sich einen Job und blieb meistens bis zur Rente.",
        "Helga (69): Der Chef hatte das letzte Wort, Diskussionen waren unüblich."
      ]
    }
  },

  freizeit: {
    today: {
      question: "Wie verbringen junge Menschen ihre Freizeit heute?",
      answers: [
        "Anna (22): Abends schaue ich oft Serien oder treffe Freunde, manchmal auch online.",
        "Lukas (23): Gaming gehört für mich dazu, vor allem mit Freunden aus verschiedenen Städten.",
        "Mia (21): Ich bin gern unterwegs, mache Sport oder plane Reisen."
      ]
    },
    past: {
      question: "Wie verbrachten Menschen 1975 ihre Freizeit?",
      answers: [
        "Peter (72): Wir trafen uns draußen oder bei Freunden, oft ganz spontan.",
        "Ursula (70): Fernsehen war etwas Besonderes, nicht so selbstverständlich wie heute.",
        "Karl (74): Vereine spielten eine große Rolle, man kannte fast jeden.",
        "Helga (69): Freizeit war einfacher, aber man hatte mehr echte Gespräche."
      ]
    }
  },

  familie: {
    today: {
      question: "Wie sieht Familie heute aus?",
      answers: [
        "Anna (22): Familie kann ganz unterschiedlich aussehen, das finde ich gut.",
        "Lukas (23): Aufgaben werden meist geteilt, niemand hat eine feste Rolle.",
        "Mia (21): Wichtig ist, dass man sich unterstützt, egal in welchem Modell."
      ]
    },
    past: {
      question: "Wie war Familie 1975?",
      answers: [
        "Peter (72): Mein Vater arbeitete, meine Mutter war zu Hause – das war normal.",
        "Ursula (70): Hausarbeit und Kinder lagen fast komplett bei den Frauen.",
        "Karl (74): Entscheidungen traf meistens der Vater.",
        "Helga (69): Gemeinsame Mahlzeiten waren Pflicht und sehr wichtig."
      ]
    }
  },

  technik: {
    today: {
      question: "Welche Technik nutzt man heute?",
      answers: [
        "Anna (22): Ohne Smartphone geht eigentlich nichts mehr.",
        "Lukas (23): Ich organisiere fast alles digital – Termine, Arbeit, Lernen.",
        "Mia (21): Technik spart Zeit, aber man ist ständig erreichbar."
      ]
    },
    past: {
      question: "Welche Technik gab es 1975?",
      answers: [
        "Peter (72): Technik spielte kaum eine Rolle in unserem Alltag.",
        "Ursula (70): Ein Telefon zu Hause war nicht selbstverständlich.",
        "Karl (74): Geräte waren einfach, aber hielten ewig.",
        "Helga (69): Fernsehen und Radio waren die wichtigsten Medien."
      ]
    }
  },

  kleidung: {
    today: {
      question: "Wie kleiden sich Menschen heute?",
      answers: [
        "Anna (22): Ich trage, worin ich mich wohlfühle, nicht nur, was modern ist.",
        "Lukas (23): Trends beeinflussen mich schon, aber nicht immer.",
        "Mia (21): Mir ist wichtig, dass Kleidung nachhaltig ist."
      ]
    },
    past: {
      question: "Wie kleideten sich Menschen 1975?",
      answers: [
        "Peter (72): Kleidung musste halten und praktisch sein.",
        "Ursula (70): Man kaufte wenig und trug es jahrelang.",
        "Karl (74): Kaputte Kleidung wurde repariert, nicht weggeworfen.",
        "Helga (69): Mode war weniger wichtig als heute."
      ]
    }
  },

  medizin: {
    today: {
      question: "Wie sieht Medizin heute aus?",
      answers: [
        "Anna (22): Untersuchungen gehen schnell und wirken sehr modern.",
        "Lukas (23): Termine bekommt man oft online, das ist praktisch.",
        "Mia (21): Ich habe das Gefühl, Ärzte erklären heute mehr."
      ]
    },
    past: {
      question: "Wie war Medizin 1975?",
      answers: [
        "Peter (72): Es gab weniger Geräte, vieles dauerte länger.",
        "Ursula (70): Man ging nur zum Arzt, wenn es wirklich nötig war.",
        "Karl (74): Die Behandlung war einfacher, aber zuverlässig.",
        "Helga (69): Geduld gehörte einfach dazu."
      ]
    }
  },

  traeume: {
    today: {
      question: "Welche Träume haben junge Menschen heute?",
      answers: [
        "Anna (22): Ich möchte glücklich sein und etwas erreichen.",
        "Lukas (23): Freiheit ist mir wichtiger als ein sicherer Job.",
        "Mia (21): Ich will reisen und mich selbst weiterentwickeln."
      ]
    },
    past: {
      question: "Welche Träume hatten Menschen 1975?",
      answers: [
        "Peter (72): Ein sicherer Job und eine eigene Familie.",
        "Ursula (70): Stabilität und ein ruhiges Leben.",
        "Karl (74): Ein gutes Auskommen und Sicherheit.",
        "Helga (69): Gesundheit und Zusammenhalt."
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



// ================== Источники ==================
function openQuellen() {
  document.getElementById("quellenModal").classList.add("active");
}

function closeQuellen() {
  document.getElementById("quellenModal").classList.remove("active");
}