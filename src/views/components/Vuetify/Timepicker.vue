<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg6 sm12>
        <app-widget title="Basic Usage">
          <div slot="widget-content" class="text-xs-center">
            <v-time-picker color="primary lighten-1" v-model="picker"></v-time-picker>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg6 sm12 class="hidden-sm-and-down">
        <app-widget title="Full Width">
          <div slot="widget-content">
            <v-time-picker
              landscape
              full-width
              color="green lighten-1"
              v-model="picker"
            ></v-time-picker>
          </div>
        </app-widget>
      </v-flex>
      <v-flex lg6 sm12>
        <app-widget title="In dialog and menu" class="mt-3">
          <div slot="widget-content">
            <v-container>
              <v-layout row wrap>
                <v-flex xs11 sm5>
                  <v-menu
                    ref="menu"
                    lazy
                    :close-on-content-click="false"
                    v-model="menu"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    min-width="290px"
                    :return-value.sync="date"
                  >
                    <v-text-field
                      slot="activator"
                      label="Picker in menu"
                      v-model="date"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-time-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-time-picker>
                  </v-menu>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs11 sm5>
                  <v-dialog
                    ref="dialog"
                    persistent
                    v-model="modal"
                    lazy
                    full-width
                    width="290px"
                    :return-value.sync="date"
                  >
                    <v-text-field
                      slot="activator"
                      label="Picker in dialog"
                      v-model="date"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-time-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-time-picker>
                  </v-dialog>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
    name: 'Timepicker',
    components: {
        AppWidget
    },
    data: () => ({
        picker: null,
        picker2: null,
        arrayEvents: null,
        date1: null,
        date2: null,
        date: null,
        menu: false,
        modal: false
    })
};
</script>
