<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg4 sm12>
        <app-widget title="Basic Usage">
          <div slot="widget-content">
            <div class="text-xs-center">
              <v-badge left>
                <span slot="badge">6</span>
                <v-icon large color="grey lighten-1">shopping_cart</v-icon>
              </v-badge>
              <v-badge color="red">
                <span slot="badge">!</span>
                <v-icon large color="grey">mail</v-icon>
              </v-badge>
              <v-label>Label</v-label>
            </div>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg4 sm12>
        <app-widget title="Inline Badge">
          <div slot="widget-content">
            <div class="text-xs-center">
            <v-badge left>
              <span slot="badge">2</span>
              <span>Examples</span>
            </v-badge>

            <v-badge color="green">
              <v-icon slot="badge" dark small>list</v-icon>
              <span>Lists</span>
            </v-badge>
            </div>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg4 sm12>
        <app-widget title="Icon Badge">
          <div slot="widget-content">
            <div class="text-xs-center">
              <v-badge left color="purple">
                <v-icon slot="badge" dark small>layers</v-icon>
                <span>
                  MDI icon
                </span>
              </v-badge>

              <v-badge color="orange">
                <v-icon slot="badge" dark small>fa fa-apple</v-icon>
                <span>
                  Font Awesome icon
                </span>
              </v-badge>
            </div>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
    name: 'Badge',
    components: {
        AppWidget
    },
    data: () => ({})
};
</script>
