// Расписание группы 113-к
// Типы занятий: "lecture" (лекция), "practice" (практика), "lab" (лабораторная), "sport" (физкультура)
const scheduleData = {
  times: [
    { num: 1, start: "08:00", end: "09:25" },
    { num: 2, start: "09:40", end: "11:05" },
    { num: 3, start: "11:20", end: "12:45" },
    { num: 4, start: "13:10", end: "14:35" },
    { num: 5, start: "14:50", end: "16:15" }
  ],
  days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  
  // НАД ЧЕРТОЙ (1-я / нечетная неделя)
  odd: {
    "Понедельник": [
      { time: 1, name: "Физкультура", type: "sport", room: "СКЦ (Рабкоровская 17/2)", teacher: "Брановицкая А.А.", note: "Спортивный зал №1" },
      { time: 2, name: "Основы информ. технологий", type: "lab", room: "Лаб.", teacher: "Шатько С.А." },
      { time: 3, name: "Материаловедение и технологии", type: "lecture", room: "3-557", teacher: "Аждер Н.А." },
      { time: 4, name: "Английский язык", type: "practice", room: "3-342", teacher: "" },
      { time: 5, name: "Кураторский / Информ. час", type: "practice", room: "3-553", teacher: "Куратор" }
    ],
    "Вторник": [
      { time: 2, name: "Перспектива", type: "practice", room: "3-553", teacher: "Федорец Я.В." },
      { time: 3, name: "Безопасность жизнедеят. (БЖД)", type: "practice", room: "3-553", teacher: "Тришин Л.С." }
    ],
    "Среда": [
      { time: 2, name: "Рисунок", type: "practice", room: "3-543", teacher: "Шауро Г.Ф." },
      { time: 3, name: "Рисунок", type: "practice", room: "3-543", teacher: "Шауро Г.Ф." }
    ],
    "Четверг": [
      { time: 1, name: "Физкультура", type: "sport", room: "СКЦ (Рабкоровская 17/2)", teacher: "Брановицкая А.А.", note: "Силовой зал №3" },
      { time: 3, name: "Цветоведение", type: "practice", room: "3-555", teacher: "Хадкевич А.А." },
      { time: 4, name: "Декоративная композиция", type: "practice", room: "3-555", teacher: "Малахова Л.О." }
    ],
    "Пятница": [
      { time: 2, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." },
      { time: 3, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." },
      { time: 4, name: "Живопись", type: "practice", room: "3-548", teacher: "Хадкевич А.А." },
      { time: 5, name: "Живопись", type: "practice", room: "3-548", teacher: "Хадкевич А.А." }
    ],
    "Суббота": [
      { time: 2, name: "Введение в специальность", type: "lecture", room: "ауд. 602", teacher: "Шишкова Е.А." },
      { time: 3, name: "Политология", type: "lecture", room: "3-555", teacher: "Еськевич К.Р." },
      { time: 4, name: "Политология", type: "lecture", room: "3-555", teacher: "Еськевич К.Р." }
    ]
  },

  // ПОД ЧЕРТОЙ (2-я / четная неделя)
  even: {
    "Понедельник": [
      { time: 1, name: "Физкультура", type: "sport", room: "СКЦ (Рабкоровская 17/2)", teacher: "Брановицкая А.А.", note: "Спортивный зал №1" },
      { time: 2, name: "Основы информ. технологий", type: "lab", room: "Лаб.", teacher: "Шатько С.А." },
      { time: 3, name: "Материаловедение и технологии", type: "lecture", room: "3-557", teacher: "Аждер Н.А." },
      { time: 4, name: "Английский язык", type: "practice", room: "3-342", teacher: "" },
      { time: 5, name: "Кураторский час", type: "practice", room: "3-553", teacher: "Куратор" }
    ],
    "Вторник": [
      { time: 2, name: "Перспектива", type: "lecture", room: "3-553", teacher: "Федорец Я.В." },
      { time: 3, name: "Безопасность жизнедеят. (БЖД)", type: "practice", room: "3-553", teacher: "Тришин Л.С." }
    ],
    "Среда": [
      { time: 2, name: "Рисунок", type: "practice", room: "3-543", teacher: "Шауро Г.Ф." },
      { time: 3, name: "Рисунок", type: "practice", room: "3-543", teacher: "Шауро Г.Ф." }
    ],
    "Четверг": [
      { time: 1, name: "Физкультура", type: "sport", room: "СКЦ (Рабкоровская 17/2)", teacher: "Брановицкая А.А.", note: "Силовой зал №3" },
      { time: 3, name: "Цветоведение", type: "practice", room: "3-555", teacher: "Хадкевич А.А." },
      { time: 4, name: "Декоративная композиция", type: "practice", room: "3-555", teacher: "Малахова Л.О." }
    ],
    "Пятница": [
      { time: 2, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." },
      { time: 3, name: "Народное ДПИ", type: "practice", room: "ауд. 28", teacher: "Васюк Т.И." },
      { time: 4, name: "Живопись", type: "practice", room: "3-548", teacher: "Хадкевич А.А." },
      { time: 5, name: "Живопись", type: "practice", room: "3-548", teacher: "Хадкевич А.А." }
    ],
    "Суббота": [
      { time: 3, name: "Политология", type: "lecture", room: "3-555", teacher: "Еськевич К.Р." },
      { time: 4, name: "Политология", type: "lecture", room: "3-555", teacher: "Еськевич К.Р." }
    ]
  }
};
