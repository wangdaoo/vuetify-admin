<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex sm12>
        <h3>Simple</h3>
      </v-flex>
      <v-flex lg4 sm12>
        <v-card color="purple" dark>
          <v-card-title class="pb-0">
            <h4>Basic card with `purple` background</h4>
          </v-card-title>
          <v-card-text>
            {{cardText}}
          </v-card-text>
          <v-card-actions>
            <v-btn flat small>Link</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex lg4 sm12>
        <v-card color="teal" dark>
          <v-card-title class="pb-0">
            <h4>Basic card with `teal` background</h4>
          </v-card-title>
          <v-card-text>
            {{cardText}}
          </v-card-text>
          <v-card-actions>
            <v-btn flat small>Link</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex lg4 sm12>
        <v-card>
          <v-card-title class="pb-0">
            <h4>Basic</h4>
          </v-card-title>
          <v-card-text>
            {{cardText}}
          </v-card-text>
          <v-card-actions>
            <v-btn flat small>Link</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm12>
        <h3>Image Card</h3>
      </v-flex>
      <v-flex lg4 sm12>
        <v-card>
          <v-img src="./static/bg/8.jpg" height="250">
            <h2 class="white--text pa-3">
              Card with image
            </h2>
          </v-img>
          <v-card-text>
            <div>
              {{cardText}}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn flat small>Link</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex lg4 sm12>
        <v-card>
          <v-img src="./static/nature/n3.jpeg" height="250">
            <h2 class="white--text pa-3">
              Card with image
            </h2>
          </v-img>
          <v-card-text>
            <v-avatar size="64px" class="right mt-56">
              <img src="/static/avatar/man_2.jpg" alt="">
            </v-avatar>
            <div>
             {{cardText}}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn flat small>Link</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex lg4 sm12>
        <v-card>
          <v-img src="./static/nature/n4.jpeg" height="250">
            <h2 class="white--text pa-3">
              Card with image
            </h2>
          </v-img>
          <v-card-text>
            <v-btn icon fab color="red" dark class="right mt-45">
              <v-icon>favorite</v-icon>
            </v-btn>
            <div>
              {{cardText}}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn flat small>Link</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm12>
        <h3>Carousel Cards</h3>
      </v-flex>
      <v-flex lg4 sm12>
        <v-carousel hide-controls hide-delimiters class="fill-height" height="179">
          <v-carousel-item>
            <v-card color="indigo" dark>
              <v-card-title class="pb-0">
                <h3>Basic card with `purple` background</h3>
              </v-card-title>
              <v-card-text>
                {{cardText}}
              </v-card-text>
              <v-card-actions>
                <v-btn flat small>Link</v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card color="teal" dark>
              <v-card-title class="pb-0">
                <h3>Basic card with `purple` background</h3>
              </v-card-title>
              <v-card-text>
                {{cardText}}
              </v-card-text>
              <v-card-actions>
                <v-btn flat small>Link</v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card color="purple" dark>
              <v-card-title class="pb-0">
                <h3>Basic card with `purple` background</h3>
              </v-card-title>
              <v-card-text>
                {{cardText}}
              </v-card-text>
              <v-card-actions>
                <v-btn flat small>Link</v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'Cards',
    data: () => ({
        show: true,
        cardText: 'Hey there, I am a very simple card. I am good at containing small bits of '
      + 'information. I am quite convenient because I require little markup to use effectively.'
    })
};
</script>
