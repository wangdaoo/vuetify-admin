<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <v-flex text-xs-center>
                <p class="warn-content">
                    {{ $t('guide.description') }}
                    <a
                        href="https://github.com/kamranahmedse/driver.js"
                        target="_blank"
                    >driver.js.</a>
                </p>
                <v-btn color="success" @click.prevent.stop="guide">{{ $t('guide.button') }}</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import steps from './defineSteps';

export default {
    name: 'Guide',
    data: () => ({
        driver: null
    }),
    mounted() {
        this.driver = new Driver();
    },
    methods: {
        guide() {
            this.driver.defineSteps(steps);
            this.driver.start();
        }
    }
};
</script>
