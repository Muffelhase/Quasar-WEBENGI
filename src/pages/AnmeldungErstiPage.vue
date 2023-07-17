<template>
  <q-page>
    <h2 style="text-align: center">Anmeldung</h2>
    <div style="text-align: center">
      <h5>
        Melde dich hier für die Ersti-Fahrt an! <br />
        Nach der Anmeldung solltest du eine Bestätigungs-Email an die angegebene
        Adresse bekommen. <br />
        <br />
        <b>Jede Anmeldung ist Verpflichtend.</b>
      </h5>
    </div>
    <br />
    <div>
      <form @submit="sendConfirmation">
        <label for="name">Vorname:</label
        ><input v-model="name" id="name" name="name" required />
        <label for="surename">Nachname:</label>
        <input v-model="surename" id="surename" name="surename" required />
        <label for="email">E-mail:</label>
        <input v-model="email" id="email" name="email" required />
        <label for="major">Studiengang:</label
        ><input v-model="major" id="major" name="major" required /><br /><br />
        <input type="submit" value="Anmeldung" />
      </form>
    </div>
  </q-page>
</template>

<script>
/*import { db } from "~/plugins/firebase.js"; */
export default {
  data() {
    return {
      vorname: "",
      nachname: "",
      email: "",
    };
  },

  methods: {
    sendConfirmation() {
      /*var email = document.getElementById("email").value; (js funktion für 'normale HTML Seiten' ohne Quasar*/
      /*    alert(
        "eine Bestätigung wurde an " +
          this.email +
          " gesendet, wir freuen uns auf dich!"
      );
    },
    async saveData() {
      const data = {
        vorname: this.vorname,
        nachname: this.nachname,
        email: this.email,
      };
      await db.collection("erstiFahrtAnmeldungen").add(data);
      this.vorname = "";
      this.nachname = "";
      window.location.reload();
    },
  },*/
    },
  },
};

/*<<< Wir hatten Probleme beim Einbiden von der Website auf Firebase>>>*/
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
body {
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9;
}

.alerth2 {
  color: #333;
}

form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}
/*
input[type="email"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}

input[type="submit"]:hover {
  background-color: #45a049;
} */

/* Optional: Styling für die Bestätigungsnachricht */
.alert {
  margin-top: 20px;
  padding: 10px;
  background-color: #e9f5ea;
  border: 1px solid #acd5ab;
  border-radius: 4px;
  color: #4f8a10;
}
</style>
