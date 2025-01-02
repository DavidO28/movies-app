<template>
  <div class="movie-card">
    <img
      src="../assets/moviess.png"
      alt="movie title"
      class="movie-image"
    />
    <div class="movie-info">
      <h3 class="movie-title">title</h3>
      <p class="movie-description">description</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .movie-card {
    max-width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  }

  .movie-card:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  .movie-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .movie-info {
    padding: 15px;
  }

  .movie-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .movie-description {
    font-size: 14px;
    color: #555;
  }
</style>
