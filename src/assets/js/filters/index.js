import Vue from 'vue'

import date from './date'

const filters = {
  date,
}

Object.keys(filters).forEach(filter => Vue.filter(filter, filters[filter]))
