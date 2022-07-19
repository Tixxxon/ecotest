import { ref, computed } from 'vue';

export function useImageCarousel(images: string[]) {
  const imageIndex = ref(0);

  const nextImage = function () {
    imageIndex.value++;
    if (imageIndex.value === images.length) {
      imageIndex.value = 0;
    }
  };

  const prevImage = function () {
    imageIndex.value--;
    if (imageIndex.value < 0) {
      imageIndex.value = images.length - 1;
    }
  };

  const imageSrc = computed(() => {
    return `./${process.env.BASE_URL}/images/${images[imageIndex.value]}`;
  });

  return {
    nextImage,
    prevImage,
    imageSrc,
  };
}
