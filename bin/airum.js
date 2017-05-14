#!/usr/bin/env node

const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
const log = require('winston');

const Airum = require('./../src/index');

const app = new Airum();