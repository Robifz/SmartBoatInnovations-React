<template>
  <div class="place-card-container" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image" class="place-card-image" />
    <div class="place-card-container1">
      <span class="place-card-text">{{ city }}</span>
      <span class="place-card-text1">{{ description }}</span>
      <outline-button button1="Watch Video"></outline-button>
    </div>
  </div>
</template>

<script>
import OutlineButton from './outline-button'

export default {
  name: 'PlaceCard',
  props: {
    image: {
      type: String,
      default:
        'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    city: {
      type: String,
      default: 'City Name',
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
  },
  components: {
    OutlineButton,
  },
}
</script>

<style scoped>
.place-card-container {
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.place-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: var(--dl-radius-radius-radius8);
  border-top-right-radius: var(--dl-radius-radius-radius8);
}
.place-card-container1 {
  width: 383px;
  height: 197px;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
}
.place-card-text {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  padding-bottom: var(--dl-space-space-halfunit);
}
.place-card-text1 {
  font-size: 12px;
  max-width: 250px;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.place-card-root-class-name {
  width: auto;
}
.place-card-root-class-name1 {
  width: auto;
}
.place-card-root-class-name2 {
  width: auto;
}
.place-card-root-class-name3 {
  width: auto;
}
.place-card-root-class-name4 {
  width: auto;
}
.place-card-root-class-name5 {
  width: auto;
}
.place-card-root-class-name6 {
  width: auto;
}
.place-card-root-class-name7 {
  width: auto;
}
.place-card-root-class-name8 {
  width: auto;
}
.place-card-root-class-name9 {
  width: auto;
}
.place-card-root-class-name10 {
  width: auto;
}
.place-card-root-class-name11 {
  width: auto;
}
@media(max-width: 767px) {
  .place-card-container {
    width: 200px;
  }
  .place-card-root-class-name {
    width: 100%;
    height: auto;
  }
  .place-card-root-class-name1 {
    width: 100%;
  }
  .place-card-root-class-name2 {
    width: 100%;
  }
  .place-card-root-class-name3 {
    width: 100%;
  }
  .place-card-root-class-name4 {
    width: 100%;
  }
  .place-card-root-class-name5 {
    width: 100%;
  }
  .place-card-root-class-name6 {
    width: 100%;
    height: auto;
  }
  .place-card-root-class-name7 {
    width: 100%;
  }
  .place-card-root-class-name8 {
    width: 100%;
  }
  .place-card-root-class-name9 {
    width: 100%;
  }
  .place-card-root-class-name10 {
    width: 100%;
  }
  .place-card-root-class-name11 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .place-card-container {
    width: 300px;
  }
  .place-card-root-class-name {
    width: 100%;
  }
  .place-card-root-class-name1 {
    width: 100%;
  }
  .place-card-root-class-name2 {
    width: 100%;
  }
  .place-card-root-class-name3 {
    width: 100%;
  }
  .place-card-root-class-name4 {
    width: 100%;
  }
  .place-card-root-class-name5 {
    width: 100%;
  }
  .place-card-root-class-name6 {
    width: 100%;
  }
  .place-card-root-class-name7 {
    width: 100%;
  }
  .place-card-root-class-name8 {
    width: 100%;
  }
  .place-card-root-class-name9 {
    width: 100%;
  }
  .place-card-root-class-name10 {
    width: 100%;
  }
  .place-card-root-class-name11 {
    width: 100%;
  }
}
</style>
