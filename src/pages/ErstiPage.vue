<template>
  <div>
    <h2>List of Entries</h2>
    <p>Total Entries: {{ entries.length }}</p>
    <ul>
      <li v-for="(entry, index) in entries" :key="index">
        <span>{{ entry.email }}</span>
        <span>{{ entry.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: [
        { email: "example1@example.com", date: "2023-05-17" },
        { email: "example2@example.com", date: "2023-05-18" },
        { email: "example3@example.com", date: "2023-05-19" },
        // Add more entries as needed
      ],
    };
  },
};
</script>
