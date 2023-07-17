<template>
  <body>
    <div class="wrapper">
      <div class="zero"></div>
      <div class="one">
        <h2>Vorletztes Sommersemester vor Curriculum-Änderung</h2>

        Für die Studierenden im 6. Semester des Wirtschaftsinformatik-Studiengangs an der Fachhochschule Kiel steht das vorletzte mögliche Sommersemester an.
        Mit Blick auf das 6-semestrige Curriculum müssen sie bis zum Wintersemester 2024/2025 ihren Abschluss erreichen, um von der aktuellen Studienstruktur zu profitieren.
        Ab dem Wintersemester 2024/2025 wird das Curriculum final auf eine andere Studienstruktur umgestellt, wodurch das vorliegende Zeitfenster für
        die Absolvierung des Studiums begrenzt ist. Die Übergangsregelung greift nur noch bis zum
        Wintersemester 24/25. Wer bis dahin den Bachelor im 6. semestrigem Curriculum nicht beendet, muss in das neue 7 semestrige Curriculum übergehen. <br>
        Aber keine Angst. Alle erbrachten Leistungen werden angerechnet, sodass das gesamte Studium nicht wiederholt werden muss. Lediglich die neuen oder
        stark abgeänderten Pflicht-Module müssen belegt werden. <br />
        Das Ziel dieser Änderung ist, dass genug ECTS gesammelt werden können, um mit dem Wirtschaftsinformatik-Studium eine Grundlage
        für Masterstudiengänge wie Data Science zu schaffen. <br>
        Weitere Information für die Übergangsregelungen und Anrechnung von Punkten finden Sie <a href="" style ="color: rgba(128, 207, 226, 0.938)">hier</a>.


      </div>
      <div class="two">
        <!--Inhalt aus dem "Aktuelles" der FH Seite, Quelle: https://www.fh-kiel.de/fh-intern/fachbereiche-intern/wirtschaft/aktuelles/einzelansicht/das-ibs-team-sucht-studentische-hilfskraft/ -->
        <h2>Das IBS-Team sucht Studentische Hilfskraft</h2>

        <p>
          Das IBS Büro der Fachhochschule Kiel sucht ab sofort eine studentische Hilfskraft für eine Arbeitszeit von mindestens 30 Stunden pro Monat. Wir sind offen für Bewerbungen von Studierenden in den unteren Semestern, da wir an einer langfristigen Zusammenarbeit interessiert sind.

Die Aufgaben umfassen allgemeine Verwaltungsaufgaben, die Organisation von Veranstaltungen, Mitarbeit bei Messen und die Pflege von Datenbanken.

Neben Eigenschaften wie Kontaktfreudigkeit, sozialer Kompetenz, guten Umgangsformen und Zuverlässigkeit sind insbesondere folgende Kenntnisse und Fähigkeiten erforderlich:
<ul>
<li>Sicherer Umgang mit MS Office</li>
<li>Schnelle Auffassungsgabe und Organisationstalent</li>
<li>Gute Deutschkenntnisse</li>
<li>Kommunikationsfreude, Spaß am Umgang mit Menschen und Humor</li>
</ul>
Das Büro für das Industriebegleitete Studium (IBS) ist verantwortlich für die Koordination des dualen Studienangebots in den Bereichen Maschinenwesen, Informatik & Elektrotechnik, Bauingenieurwesen und Wirtschaft.
Weitere Informationen zum Industriebegleiteten Studium finden Sie unter <a
            href="http://www.fh-kiel.de/ibs"
            style="color: rgba(128, 207, 226, 0.938)"
            >http://www.fh-kiel.de/ibs</a
          >.
Bitte senden Sie Ihre Bewerbung per E-Mail an <a
            href="mailto:max.Mustermann@fh-kiel.de"
            style="color: rgba(128, 207, 226, 0.938)"
            >max.mustermann@fh-kiel.de</a>.
        Bei Fragen steht Ihnen Herr Mustermann telefonisch unter Tel. <u>0431 / 123-4567</u> zur Verfügung.
        </p>
      </div>
      <div class="three">
        <h2>Kunst und Kultur auf dem Campus der FH außerhalb der Vorlesungszeiten</h2>
        <p>
          Der Campus der Fachhochschule Kiel bietet eine vielfältige Palette an Kultureinrichtungen, die es wert sind, außerhalb der Vorlesungszeiten erkundet zu werden.
          Während der Semesterferien haben Besucher die Möglichkeit, fünf beeindruckende Einrichtungen zu entdecken.
          Die 360-Grad-Kuppel, mit ihrem eindrucksvollen Programm immersiver Erlebnisse, ist die bekannteste Kultureinrichtung der Fachhochschule Kiel. Von Astronomie und
          Wissenschaft über Kultur und Unterhaltung bis hin zu spannenden Vorträgen bietet die Kuppel für jeden Geschmack etwas Besonderes.
          Das Computermuseum beherbergt das beeindruckende Originalmodell des Z11, einer der ersten elektronischen Rechenanlagen der Welt aus dem Jahr 1955. Neben weiteren
          Exponaten, wie mechanischen Rechenmaschinen und Großrechenanlagen vergangener Jahrzehnte, können Besucher hier die faszinierende Entwicklung der Computertechnologie nachverfolgen.
          Im Industriemuseum Howaldtsche Metallgießerei erhalten Besucher einen Einblick in die harte Arbeit in einer Werft vor über 100 Jahren. Neben ausgestellten Öfen,
          Werkbänken und Werkzeugen gibt es eine interessante Fotoausstellung zum Neubeginn der Werft nach 1945.
          Der Bunker-D erinnert an die dunkelste Zeit der deutschen Geschichte und dient als Ausstellungsort für wechselnde Kunstwerke aus verschiedenen Bereichen.
          Besonders hervorzuheben ist die aktuelle Sonderausstellung "FASIYA, Ukrainische Kunst im Bunker-D", bei der Werke zeitgenössischer ukrainischer
          Künstlerinnen präsentiert werden. Diese einzigartigen Kultureinrichtungen bieten Besuchern auf dem Campus der Fachhochschule Kiel ein besonderes Kunsterlebnis.
        </p>
        <q-flex justify="center">
          <div class="mehrlesen">
  <q-btn
    color="indigo-9"
    text-color="white"
    to="/beitrag-drei"
    label="Mehr Lesen"
    no-caps
    size="lg"
  />
</div>
</q-flex>
      </div>
    </div>
  </body>
</template>
<script>
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
body {
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(400px, 3);
  grid-gap: 1%;
  padding-top: 2%;
  padding-left: 7%;
  padding-right: 7%;
  padding-bottom: 2%;
}

/* Template für News-Einträge

  .<divlass name>{
  border-radius: 50px;
  padding: 2%;
  grid-column: 4 / 4;
  grid-row: x / x; <- Zeilen eintrag von bis
  background-color: #616161 / #152565;;
  color: rgb(255, 255, 255);
  margin-bottom: 2%;
  font-size: 140%;
} */

.mehrlesen{
  display: flex;
  justify-content: right;
  padding-right: 5%;
}

.one {
  border-radius: 50px;
  padding: 2%;
  grid-column: 4 / 4;
  grid-row: 1 / 4;
  background-color: #152565;
  color: white;
  font-size: 140%;
}
.two {
  border-radius: 50px;
  padding: 2%;
  grid-column: 4 / 4;
  grid-row: 5 / 9;
  background-color: #616161;
  color: rgb(255, 255, 255);
  font-size: 140%;
}
.three {
  border-radius: 50px;
  padding: 2%;
  grid-column: 4 / 4;
  grid-row: 10/ 14;
  background-color: #152565;
  color: white;
  font-size: 140%;
}
</style>

