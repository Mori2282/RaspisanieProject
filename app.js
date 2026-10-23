document.addEventListener("DOMContentLoaded", () => {
  // По умолчанию открываем 8 неделю (19-24 октября, как в скриншоте пользователя) или текущую
  let currentWeekIndex = 7; // Индекс 7 = 8 неделя
  let selectedMobileDayIndex = 0; // Понедельник

  const weekDatesElem = document.getElementById("weekDates");
  const weekParityElem = document.getElementById("weekParity");
  const tableHeaderRow = document.getElementById("tableHeaderRow");
  const tableBody = document.getElementById("tableBody");
  
  const prevWeekBtn = document.getElementById("prevWeek");
  const nextWeekBtn = document.getElementById("nextWeek");
  const btnCurrentWeek = document.getElementById("btnCurrentWeek");

  const mobileWeekSummary = document.getElementById("mobileWeekSummary");
  const mobileDayTabs = document.getElementById("mobileDayTabs");
  const mobileSelectedDayName = document.getElementById("mobileSelectedDayName");
  const mobileLessonsList = document.getElementById("mobileLessonsList");

  function getBadgeLabel(type) {
    switch (type) {
      case "lecture": return "лек";
      case "practice": return "пр";
      case "lab": return "лаб";
      case "sport": return "спорт";
      default: return "";
    }
  }

  function renderDesktopTable(weekData, scheduleForWeek) {
    // 1. Шапка таблицы с точными датами
    tableHeaderRow.innerHTML = `<th class="time-col-header"></th>`;
    weekData.days.forEach(day => {
      const th = document.createElement("th");
      th.innerHTML = `
        <div class="day-header-box">
          <span class="day-header-name">${day.name}</span>
          <span class="day-header-date">${day.date}</span>
        </div>
      `;
      tableHeaderRow.appendChild(th);
    });

    // 2. Строки времени
    tableBody.innerHTML = "";
    timeSlots.forEach(slot => {
      const tr = document.createElement("tr");

      // Ячейка времени (как в ГГТУ)
      const tdTime = document.createElement("td");
      tdTime.className = "time-cell";
      tdTime.innerHTML = `
        <div class="time-num">${slot.num}</div>
        <div>${slot.start}</div>
        <div>${slot.end}</div>
      `;
      tr.appendChild(tdTime);

      // Ячейки по каждому дню
      weekData.days.forEach(day => {
        const td = document.createElement("td");
        const dayLessons = scheduleForWeek[day.name] || [];
        const lesson = dayLessons.find(l => l.time === slot.num);

        if (lesson) {
          td.innerHTML = `
            <div class="lesson-card card-${lesson.type}">
              <div class="lesson-top">
                <span class="lesson-name">${lesson.name}</span>
                <span class="badge-pill ${lesson.type}">${getBadgeLabel(lesson.type)}</span>
              </div>
              <div class="lesson-room">${lesson.room}</div>
              ${lesson.teacher ? `<div class="lesson-teacher">${lesson.teacher}</div>` : ''}
              ${lesson.note ? `<div class="lesson-note">${lesson.note}</div>` : ''}
            </div>
          `;
        }
        tr.appendChild(td);
      });

      tableBody.appendChild(tr);
    });
  }

  function renderMobileView(weekData, scheduleForWeek) {
    const parityText = weekData.parity === "odd" ? "над чертой" : "под чертой";
    mobileWeekSummary.textContent = `${weekData.range} • ${weekData.id} неделя (${parityText})`;

    // Табы дней (пн, вт, ср, чт, пт, сб с номерами чисел)
    mobileDayTabs.innerHTML = "";
    weekData.days.forEach((day, index) => {
      const btn = document.createElement("button");
      btn.className = `mobile-tab-btn ${index === selectedMobileDayIndex ? 'active' : ''}`;
      // Извлекаем только число из "19 октября"
      const dayNumber = day.date.split(" ")[0];
      btn.innerHTML = `
        <span class="tab-day-name">${day.name}</span>
        <span class="tab-day-date">${dayNumber}</span>
      `;
      btn.addEventListener("click", () => {
        selectedMobileDayIndex = index;
        renderMobileView(weekData, scheduleForWeek);
      });
      mobileDayTabs.appendChild(btn);
    });

    // Название выбранного дня в плашке
    const currentDay = weekData.days[selectedMobileDayIndex];
    const fullDayNames = { "пн": "Понедельник", "вт": "Вторник", "ср": "Среда", "чт": "Четверг", "пт": "Пятница", "сб": "Суббота" };
    mobileSelectedDayName.textContent = `${fullDayNames[currentDay.name]}, ${currentDay.date}`;

    // Список занятий выбранного дня (по слотам 1-5 с прочерками если пусто)
    mobileLessonsList.innerHTML = "";
    const dayLessons = scheduleForWeek[currentDay.name] || [];

    timeSlots.forEach(slot => {
      const lesson = dayLessons.find(l => l.time === slot.num);
      if (lesson) {
        const item = document.createElement("div");
        item.style.display = "flex";
        item.style.gap = "8px";
        item.innerHTML = `
          <div class="time-cell" style="width: 50px; flex-shrink: 0;">
            <div class="time-num">${slot.num}</div>
            <div style="font-size: 0.7rem;">${slot.start}</div>
            <div style="font-size: 0.7rem;">${slot.end}</div>
          </div>
          <div class="lesson-card card-${lesson.type}" style="flex: 1;">
            <div class="lesson-top">
              <span class="lesson-name">${lesson.name}</span>
              <span class="badge-pill ${lesson.type}">${getBadgeLabel(lesson.type)}</span>
            </div>
            <div class="lesson-room">${lesson.room}</div>
            ${lesson.teacher ? `<div class="lesson-teacher">${lesson.teacher}</div>` : ''}
            ${lesson.note ? `<div class="lesson-note">${lesson.note}</div>` : ''}
          </div>
        `;
        mobileLessonsList.appendChild(item);
      } else {
        const emptyItem = document.createElement("div");
        emptyItem.className = "mobile-empty-slot";
        emptyItem.innerHTML = `
          <div class="mobile-empty-num">${slot.num}<br><span style="font-size:0.7rem; font-weight: normal;">${slot.start}</span></div>
          <div class="mobile-empty-dash">—</div>
        `;
        mobileLessonsList.appendChild(emptyItem);
      }
    });
  }

  function update() {
    const weekData = semesterWeeks[currentWeekIndex];
    const scheduleForWeek = getScheduleForWeek(weekData.id);

    weekDatesElem.textContent = weekData.range;
    weekParityElem.textContent = weekData.parity === "odd" ? "(над чертой)" : "(под чертой)";

    renderDesktopTable(weekData, scheduleForWeek);
    renderMobileView(weekData, scheduleForWeek);
  }

  prevWeekBtn.addEventListener("click", () => {
    if (currentWeekIndex > 0) {
      currentWeekIndex--;
      update();
    }
  });

  nextWeekBtn.addEventListener("click", () => {
    if (currentWeekIndex < semesterWeeks.length - 1) {
      currentWeekIndex++;
      update();
    }
  });

  btnCurrentWeek.addEventListener("click", () => {
    currentWeekIndex = 7; // Возвращает на текущую 8-ю неделю
    update();
  });

  // Запуск
  update();
});
