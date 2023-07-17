<template>
  <!-- Statische Bildergallerie -->
  <div>
    <h2 style="text-align: center">Eindrücke der FH Kiel</h2>
    <div v-for="image in images" :key="image" class="gallery-images">
      <q-img :src="getImageURL(image)" :key="image" />
    </div>
    <div class="footer">
      <h3>Hast du noch mehr?</h3>
      <h5>bereichert unsere Fachschaftsgalerie mit euren eigenen Bildern!</h5>
      <q-btn
        class="q-mt-xl"
        color="indigo-9"
        text-color="white"
        to="/Upload"
        label="Hier Hochladen"
        no-caps
        size="lg"
      />
    </div>
  </div>
</template>

<script>
import { getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase';

export default {
  data() {
    return {
      images: [
        // Die genutzten Bilder wurden heruntergeladen von Unsplash: https://unsplash.com/de/s/fotos/University
        'Gallery Photos/Campus.jpg',
        'Gallery Photos/Gebäude.jpg',
        'Gallery Photos/Bib.jpg',
        'Gallery Photos/Hörsaal.jpg',
        'Gallery Photos/Großer Hörsaal.jpg',
        'Gallery Photos/Arbeitsraum.jpg',
        'Gallery Photos/Vorlesung.jpg',
        // Hier können händisch mehr Bilder hinzugefügt werden
      ],
    };
  },
  methods: {
    async getImageURL(imagePath) {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(imagePath);
      const downloadURL = await getDownloadURL(imageRef);
      return downloadURL;
    },
  },
};
</script>

<style scoped>
.gallery-images {
  padding-left: 25%;
  max-width: 75%;
  max-height: 75%;
  margin-top: 5x;
  margin-bottom: 5px;
}

.footer {
  text-align: center;
  padding-bottom: 20%;
}
</style>
