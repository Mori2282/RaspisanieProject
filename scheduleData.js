// Расписание группы 113-к (17 недель семестра)
const semesterWeeks = [
  { id: 1, parity: "odd", range: "31 августа - 5 сентября", days: [
    { name: "пн", date: "31 августа" }, { name: "вт", date: "1 сентября" }, { name: "ср", date: "2 сентября" },
    { name: "чт", date: "3 сентября" }, { name: "пт", date: "4 сентября" }, { name: "сб", date: "5 сентября" }
  ]},
  { id: 2, parity: "even", range: "7 - 12 сентября", days: [
    { name: "пн", date: "7 сентября" }, { name: "вт", date: "8 сентября" }, { name: "ср", date: "9 сентября" },
    { name: "чт", date: "10 сентября" }, { name: "пт", date: "11 сентября" }, { name: "сб", date: "12 сентября" }
  ]},
  { id: 3, parity: "odd", range: "14 - 19 сентября", days: [
    { name: "пн", date: "14 сентября" }, { name: "вт", date: "15 сентября" }, { name: "ср", date: "16 сентября" },
    { name: "чт", date: "17 сентября" }, { name: "пт", date: "18 сентября" }, { name: "сб", date: "19 сентября" }
  ]},
  { id: 4, parity: "even", range: "21 - 26 сентября", days: [
    { name: "пн", date: "21 сентября" }, { name: "вт", date: "22 сентября" }, { name: "ср", date: "23 сентября" },
    { name: "чт", date: "24 сентября" }, { name: "пт", date: "25 сентября" }, { name: "сб", date: "26 сентября" }
  ]},
  { id: 5, parity: "odd", range: "28 сентября - 3 октября", days: [
    { name: "пн", date: "28 сентября" }, { name: "вт", date: "29 сентября" }, { name: "ср", date: "30 сентября" },
    { name: "чт", date: "1 октября" }, { name: "пт", date: "2 октября" }, { name: "сб", date: "3 октября" }
  ]},
  { id: 6, parity: "even", range: "5 - 10 октября", days: [
    { name: "пн", date: "5 октября" }, { name: "вт", date: "6 октября" }, { name: "ср", date: "7 октября" },
    { name: "чт", date: "8 октября" }, { name: "пт", date: "9 октября" }, { name: "сб", date: "10 октября" }
  ]},
  { id: 7, parity: "odd", range: "12 - 17 октября", days: [
    { name: "пн", date: "12 октября" }, { name: "вт", date: "13 октября" }, { name: "ср", date: "14 октября" },
    { name: "чт", date: "15 октября" }, { name: "пт", date: "16 октября" }, { name: "сб", date: "17 октября" }
  ]},
  { id: 8, parity: "even", range: "19 - 24 октября", days: [
    { name: "пн", date: "19 октября" }, { name: "вт", date: "20 октября" }, { name: "ср", date: "21 октября" },
    { name: "чт", date: "22 октября" }, { name: "пт", date: "23 октября" }, { name: "сб", date: "24 октября" }
  ]},
  { id: 9, parity: "odd", range: "26 - 31 октября", days: [
    { name: "пн", date: "26 октября" }, { name: "вт", date: "27 октября" }, { name: "ср", date: "28 октября" },
    { name: "чт", date: "29 октября" }, { name: "пт", date: "30 октября" }, { name: "сб", date: "31 октября" }
  ]},
  { id: 10, parity: "even", range: "2 - 7 ноября", days: [
    { name: "пн", date: "2 ноября" }, { name: "вт", date: "3 ноября" }, { name: "ср", date: "4 ноября" },
    { name: "чт", date: "5 ноября" }, { name: "пт", date: "6 ноября" }, { name: "сб", date: "7 ноября" }
  ]},
  { id: 11, parity: "odd", range: "9 - 14 ноября", days: [
    { name: "пн", date: "9 ноября" }, { name: "вт", date: "10 ноября" }, { name: "ср", date: "11 ноября" },
    { name: "чт", date: "12 ноября" }, { name: "пт", date: "13 ноября" }, { name: "сб", date: "14 ноября" }
  ]},
  { id: 12, parity: "even", range: "16 - 21 ноября", days: [
    { name: "пн", date: "16 ноября" }, { name: "вт", date: "17 ноября" }, { name: "ср", date: "18 ноября" },
    { name: "чт", date: "19 ноября" }, { name: "пт", date: "20 ноября" }, { name: "сб", date: "21 ноября" }
  ]},
  { id: 13, parity: "odd", range: "23 - 28 ноября", days: [
    { name: "пн", date: "23 ноября" }, { name: "вт", date: "24 ноября" }, { name: "ср", date: "25 ноября" },
    { name: "чт", date: "26 ноября" }, { name: "пт", date: "27 ноября" }, { name: "сб", date: "28 ноября" }
  ]},
  { id: 14, parity: "even", range: "30 ноября - 5 декабря", days: [
    { name: "пн", date: "30 ноября" }, { name: "вт", date: "1 декабря" }, { name: "ср", date: "2 декабря" },
    { name: "чт", date: "3 декабря" }, { name: "пт", date: "4 декабря" }, { name: "сб", date: "5 декабря" }
  ]},
  { id: 15, parity: "odd", range: "7 - 12 декабря", days: [
    { name: "пн", date: "7 декабря" }, { name: "вт", date: "8 декабря" }, { name: "ср", date: "9 декабря" },
    { name: "чт", date: "10 декабря" }, { name: "пт", date: "11 декабря" }, { name: "сб", date: "12 декабря" }
  ]},
  { id: 16, parity: "even", range: "14 - 19 декабря", days: [
    { name: "пн", date: "14 декабря" }, { name: "вт", date: "15 декабря" }, { name: "ср", date: "16 декабря" },
    { name: "чт", date: "17 декабря" }, { name: "пт", date: "18 декабря" }, { name: "сб", date: "19 декабря" }
  ]},
  { id: 17, parity: "odd", range: "21 - 26 декабря", days: [
    { name: "пн", date: "21 декабря" }, { name: "вт", date: "22 декабря" }, { name: "ср", date: "23 декабря" },
    { name: "чт", date: "24 декабря" }, { name: "пт", date: "25 декабря" }, { name: "сб", date: "26 декабря" }
  ]}
];

const timeSlots = [
  { num: 1, start: "08:00", end: "09:25" },
  { num: 2, start: "09:40", end: "11:05" },
  { num: 3, start: "11:20", end: "12:45" },
  { num: 4, start: "13:10", end: "14:35" },
  { num: 5, start: "14:50", end: "16:15" }
];

function getScheduleForWeek(weekNum) {
  const w = weekNum;
  const res = { "пн": [], "вт": [], "ср": [], "чт": [], "пт": [], "сб": [] };

  // --- ПОНЕДЕЛЬНИК ---
  // Физкультура продлена до 21 ноября (до 12 недели включительно) на оба вида недели
  if (w <= 12) {
    res["пн"].push({ time: 1, name: "Физкультура", type: "sport", room: "СКЦ (Рабкоровская 17/2)", teacher: "Брановицкая А.А.", note: "Спортивный зал №1" });
  }

  if (w >= 2 && w <= 4) res["пн"].push({ time: 2, name: "Введение в спец. и информ. культура", type: "practice", room: "3-553", teacher: "Кривошеева С.В." });
  if (w >= 5 && w <= 15) res["пн"].push({ time: 2, name: "Основы информ. технологий", type: "lab", room: "Лаб.", teacher: "Шатько С.А." });
  if (w <= 4) res["пн"].push({ time: 3, name: "Введение в спец. и информ. культура", type: "practice", room: "3-553", teacher: "Кривошеева С.В." });
  if (w >= 6 && w <= 14) res["пн"].push({ time: 3, name: "Материаловедение и технологии", type: "lecture", room: "3-557", teacher: "Аждер Н.А." });
  res["пн"].push({ time: 4, name: "Английский язык", type: "practice", room: "3-342", teacher: "" });
  if (w >= 1 && w <= 5) res["пн"].push({ time: 5, name: "Кураторский час", type: "practice", room: "3-553", teacher: "Куратор" });
  if (w >= 6) res["пн"].push({ time: 5, name: "Информационный и кураторские часы", type: "practice", room: "3-553", teacher: "Куратор" });

  // --- ВТОРНИК ---
  // (БЖД ПОЛНОСТЬЮ УДАЛЕНО)
  if (w === 3 || w === 4 || w === 6 || w === 8) {
    res["вт"].push({ time: 2, name: "Перспектива", type: "lecture", room: "3-553", teacher: "Федорец Я.В." });
  } else if (w === 5) {
    res["вт"].push({ time: 2, name: "Перспектива", type: "practice", room: "3-553", teacher: "Федорец Я.В." });
  } else if (w === 7) {
    res["вт"].push({ time: 2, name: "Введение в спец. и информ. культура", type: "practice", room: "3-553", teacher: "Кривошеева С.В." });
  } else if (w >= 9 && w <= 15) {
    res["вт"].push({ time: 2, name: "Перспектива", type: "practice", room: "3-553", teacher: "Федорец Я.В." });
  }

  if (w >= 1 && w <= 4) {
    res["вт"].push({ time: 3, name: "Основы информ. технологий", type: "lab", room: "ауд. 611", teacher: "Серёгина Л.А." });
  }

  if (w === 1) res["вт"].push({ time: 4, name: "Физическая культура", type: "sport", room: "СКЦ", teacher: "Абрамович П.А." });
  if (w === 2 || w === 3) res["вт"].push({ time: 4, name: "Цветоведение", type: "practice", room: "3-553", teacher: "Кривошеева С.В." });

  // --- СРЕДА ---
  if (w === 1) {
    res["ср"].push({ time: 2, name: "Рисунок", type: "lecture", room: "3-543", teacher: "Шауро Г.Ф." });
    res["ср"].push({ time: 3, name: "Живопись", type: "lecture", room: "3-543", teacher: "Федорец Я.В." });
    res["ср"].push({ time: 4, name: "Перспектива", type: "lecture", room: "3-553", teacher: "Федорец Я.В." });
    res["ср"].push({ time: 5, name: "Кураторский час", type: "practice", room: "3-553", teacher: "Хадкевич А.А." });
  } else if (w >= 2 && w <= 11) {
    res["ср"].push({ time: 2, name: "Рисунок", type: "practice", room: "3-543", teacher: "Шауро Г.Ф." });
    res["ср"].push({ time: 3, name: "Рисунок", type: "practice", room: "3-543", teacher: "Шауро Г.Ф." });
    if (w <= 3) res["ср"].push({ time: 4, name: "Перспектива", type: "lecture", room: "3-553", teacher: "Федорец Я.В." });
  }

  // --- ЧЕТВЕРГ ---
  // Физкультура продлена до 21 ноября (до 12 недели включительно) на оба вида недели
  if (w <= 12) {
    res["чт"].push({ time: 1, name: "Физкультура", type: "sport", room: "СКЦ (Рабкоровская 17/2)", teacher: "Брановицкая А.А.", note: "Силовой зал №3" });
  }

  if (w === 2 || w === 3) res["чт"].push({ time: 2, name: "Материаловедение и технологии", type: "practice", room: "3-557", teacher: "Аждер Н.А." });
  if (w <= 3) res["чт"].push({ time: 3, name: "Материаловедение и технологии", type: "lecture", room: "3-557", teacher: "Аждер Н.А." });
  if (w >= 4 && w <= 15) res["чт"].push({ time: 3, name: "Цветоведение", type: "practice", room: "3-555", teacher: "Хадкевич А.А." });
  if (w <= 11) res["чт"].push({ time: 4, name: "Декоративная композиция", type: "practice", room: "3-555", teacher: "Малахова Л.О." });
  if (w >= 12 && w <= 15) res["чт"].push({ time: 4, name: "Политология", type: "practice", room: "3-555", teacher: "Еськевич К.Р.", note: "Семинар" });

  // --- ПЯТНИЦА ---
  if (w >= 2 && w <= 3) {
    res["пт"].push({ time: 2, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." });
    res["пт"].push({ time: 3, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." });
  } else if (w >= 4 && w <= 5) {
    res["пт"].push({ time: 2, name: "Народное ДПИ", type: "practice", room: "3-251", teacher: "Матвейчик С.В." });
    res["пт"].push({ time: 3, name: "Народное ДПИ", type: "practice", room: "3-251", teacher: "Матвейчик С.В." });
  } else if (w >= 6 && w <= 14) {
    res["пт"].push({ time: 2, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." });
    res["пт"].push({ time: 3, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." });
  } else if (w === 15) {
    res["пт"].push({ time: 3, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." });
  }
  if (w >= 2 && w <= 15) {
    res["пт"].push({ time: 4, name: "Живопись", type: "practice", room: "3-548", teacher: "Хадкевич А.А." });
    res["пт"].push({ time: 5, name: "Живопись", type: "practice", room: "3-548", teacher: "Хадкевич А.А." });
  }

  // --- СУББОТА ---
  if (w <= 5) res["сб"].push({ time: 2, name: "Введение в спец. и информ. культура", type: "practice", room: "ауд. 602", teacher: "Шишкова Е.А." });
  if (w === 6 || w === 7) res["сб"].push({ time: 2, name: "Введение в спец. и информ. культура", type: "practice", room: "ауд. 602", teacher: "Шишкова Е.А." });

  if (w <= 3) res["сб"].push({ time: 3, name: "Введение в спец. и информ. культура", type: "practice", room: "ауд. 602", teacher: "Шишкова Е.А." });
  if (w === 4) res["сб"].push({ time: 3, name: "Физкультура", type: "sport", room: "СКЦ", teacher: "" });
  if ((w >= 5 && w <= 15) && w !== 6 && w !== 7) {
    res["сб"].push({ time: 3, name: "Политология", type: "lecture", room: "3-555", teacher: "Еськевич К.Р." });
  }

  if (w <= 3 || w === 6 || w === 7 || w === 8 || w === 9 || w === 11) {
    res["сб"].push({ time: 4, name: "Политология", type: "lecture", room: "3-555", teacher: "Еськевич К.Р." });
  }

  return res;
}
