<template>
  <div class="q-pa-md d-flex flex-center">
    <div class="calendar-container">
      <div class="calendar-header">
        <button @click="prevMonth">&lt;&lt; Letzter Monat</button>
        <h2>{{ currentMonth }}</h2>
        <h5>
          Bitte vergleichen Sie die <br />
          Daten hier mit ihren eigenen Kalendern
        </h5>
        <button @click="nextMonth">Nächster Monat &gt;&gt;</button>
      </div>
      <div class="calendar-body">
        <!--Hier gehörten die Wochentage hin, aber es gab Probleme beim Alignen der richten Tage mit den jeweils richtigen Daten

          <div class="calendar-weekdays">
          <div v-for="day in weekdays" :key="day" class="calendar-day">
            {{ day }}
          </div>
        </div>
      -->
        <div class="calendar-days">
          <div
            v-for="(day, index) in daysInMonth"
            :key="index"
            class="calendar-day"
          >
            <div class="day-number">{{ day }}</div>
            <div class="events">
              <div
                v-for="event in getEventsForDay(day)"
                :key="event"
                class="event"
              >
                {{ event }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** Probleme der Methods teilweise mit Hilfe von ChatGPT gelöst
 * Beim erstellen der Scripts gab es Syntax schwierigkeiten, welche dazu geführt haben, dass die Seite nicht mehr geladen hat
 * oder der Kalender nicht mehr funktioniert hat. Um diese zu beheben wurden die Scripts einmal von ChatGPT korrigiert.
 * Die Fehlerquote war erstaunlich hoch, da in dem Code von ChatGPT selber fehler aufgetreten sind, die er in dem gegebenen Context hätte erkennen müssen.
 * Zum Debuggen und als Hilfestellung bei Syntax-Fehlern war ChatGPT jedoch trotzdem sehr hilfreich, da ein Verständnis für das Problem geschaffen wurde und
 * ausführlich erläutert wurde, wie es zum Problem kam, sodass ein Lerneffekt bestand.
 */
export default {
  data() {
    return {
      currentMonth: "",
      daysInMonth: [],
      currentDate: new Date(),
      customEvents: [
        { date: "2023-09-01", title: "Wintersemester Beginn" },
        { date: "2023-09-15", title: "Anfang der Veranstaltungen" },
        { date: "2023-09-19", title: "Ersti-Fahrt" },
        /**{ date: "jjjj-mm-tt", title: "Titel" }, */
      ],
    };
  },

  methods: {
    updateCalendar() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth() + 1;
      this.currentMonth =
        this.currentDate.toLocaleString("default", { month: "long" }) +
        " " +
        year;
      this.daysInMonth = this.getDaysInMonth(year, month);
    },
    prevMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.updateCalendar();
    },

    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.updateCalendar();
    },

    getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },

    getEventsForDay(day) {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth() + 1;

      const eventsForDay = this.customEvents.filter(
        (event) =>
          event.date ===
          `${year}-${month.toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`
      );

      return eventsForDay.map((event) => event.title);
    },
  },
  created() {
    this.updateCalendar();
  },
};
</script>

<style>
.calendar-container {
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #152565;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 8px;
}

.calendar-header {
  text-align: center;
  padding: 16px;
}

.calendar-weekdays {
  display: flex;
  justify-content: space-between;
  background-color: #152565;
  padding: 8px;
}

.calendar-day {
  width: calc(100% / 7);
  text-align: center;
  padding: 8px;
}

.calendar-day:last-child {
  border-right: none;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 8px;
}

.day-number {
  font-size: 18px;
  font-weight: bold;
}

.events {
  margin-top: 4px;
}

.event {
  background-color: #d3d3d33d;
  color: #ffffff;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 4px;
}
</style>
