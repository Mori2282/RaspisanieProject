document.addEventListener("DOMContentLoaded", () => {
  let currentParity = "odd"; // "odd" (над чертой) или "even" (под чертой)

  const btnOdd = document.getElementById("btnOdd");
  const btnEven = document.getElementById("btnEven");
  const prevWeek = document.getElementById("prevWeek");
  const nextWeek = document.getElementById("nextWeek");
  const weekStatusTitle = document.getElementById("weekStatusTitle");
  const weekSub = document.getElementById("weekSub");
  
  const tableHeaderRow = document.getElementById("tableHeaderRow");
  const tableBody = document.getElementById("tableBody");
  const mobileSchedule = document.getElementById("mobileSchedule");

  function setParity(parity) {
    currentParity = parity;
    if (parity === "odd") {
      btnOdd.classList.add("active");
      btnEven.classList.remove("active");
      weekStatusTitle.textContent = "Над чертой";
      weekSub.textContent = "1-я неделя (нечетная)";
    } else {
      btnEven.classList.add("active");
      btnOdd.classList.remove("active");
      weekStatusTitle.textContent = "Под чертой";
      weekSub.textContent = "2-я неделя (четная)";
    }
    renderSchedule();
  }

  function getBadgeLabel(type) {
    switch (type) {
      case "lecture": return "лек";
      case "practice": return "пр";
      case "lab": return "лаб";
      case "sport": return "спорт";
      default: return "";
    }
  }

  function renderSchedule() {
    const data = scheduleData[currentParity];

    // 1. Рендер десктопной таблицы
    tableHeaderRow.innerHTML = `<th class="time-col-header">Время</th>`;
    scheduleData.days.forEach(day => {
      const th = document.createElement("th");
      th.textContent = day;
      tableHeaderRow.appendChild(th);
    });

    tableBody.innerHTML = "";
    scheduleData.times.forEach(slot => {
      const tr = document.createElement("tr");

      // Колонка времени
      const tdTime = document.createElement("td");
      tdTime.className = "time-cell";
      tdTime.innerHTML = `
        <div class="time-num">${slot.num}</div>
        <div>${slot.start}</div>
        <div>${slot.end}</div>
      `;
      tr.appendChild(tdTime);

      // Ячейки по дням
      scheduleData.days.forEach(day => {
        const td = document.createElement("td");
        const lessons = data[day] ? data[day].filter(l => l.time === slot.num) : [];

        if (lessons.length > 0) {
          lessons.forEach(l => {
            td.innerHTML += `
              <div class="lesson-card card-${l.type}">
                <div class="lesson-top">
                  <span class="lesson-name">${l.name}</span>
                  <span class="type-pill ${l.type}">${getBadgeLabel(l.type)}</span>
                </div>
                <div class="lesson-room">${l.room}</div>
                ${l.teacher ? `<div class="lesson-teacher">${l.teacher}</div>` : ''}
                ${l.note ? `<div class="lesson-note">${l.note}</div>` : ''}
              </div>
            `;
          });
        }
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });

    // 2. Рендер мобильного вида
    mobileSchedule.innerHTML = "";
    scheduleData.days.forEach(day => {
      const dayLessons = data[day] || [];
      if (dayLessons.length === 0) return;

      const dayCard = document.createElement("div");
      dayCard.className = "mobile-day-card";
      
      let lessonsHtml = "";
      dayLessons.sort((a, b) => a.time - b.time).forEach(l => {
        const timeSlot = scheduleData.times.find(t => t.num === l.time);
        lessonsHtml += `
          <div class="mobile-lesson-item">
            <div class="time-num" style="font-size:0.75rem; margin-bottom: 4px;">
              ${timeSlot ? timeSlot.start + ' - ' + timeSlot.end : 'Пара ' + l.time}
            </div>
            <div class="lesson-card card-${l.type}">
              <div class="lesson-top">
                <span class="lesson-name">${l.name}</span>
                <span class="type-pill ${l.type}">${getBadgeLabel(l.type)}</span>
              </div>
              <div class="lesson-room">${l.room}</div>
              ${l.teacher ? `<div class="lesson-teacher">${l.teacher}</div>` : ''}
              ${l.note ? `<div class="lesson-note">${l.note}</div>` : ''}
            </div>
          </div>
        `;
      });

      dayCard.innerHTML = `
        <div class="mobile-day-header">${day}</div>
        ${lessonsHtml}
      `;
      mobileSchedule.appendChild(dayCard);
    });
  }

  // Переключатели
  btnOdd.addEventListener("click", () => setParity("odd"));
  btnEven.addEventListener("click", () => setParity("even"));
  prevWeek.addEventListener("click", () => setParity(currentParity === "odd" ? "even" : "odd"));
  nextWeek.addEventListener("click", () => setParity(currentParity === "odd" ? "even" : "odd"));

  // Начальная отрисовка
  setParity("odd");
});
