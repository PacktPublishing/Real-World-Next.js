'use strict';

const { readdirSync, lstatSync } = require('fs');

const chapterDirs = readdirSync(__dirname)
  .filter((dir) => lstatSync(dir).isDirectory())
  .filter((dir) => /[0-9]{2}-(\w|-)+/i.test(dir))
  .map((dir) => ({ name: dir }));

module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'typo', name: 'typo:     Fixes a typo' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    { value: 'WIP', name: 'WIP:      Work in progress' },
    { value: 'revert', name: 'revert:   Revert to a commit' },
  ],
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  scopes: [...chapterDirs, { name: 'components' }, { name: 'api' }, { name: '*' }],
  allowCustomScopes: true,
  subjectLimit: 100,
};
