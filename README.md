# KD BOT For Discord

Yet another simple but awesome discord bot written by Discord.js to keep K/D stats

## Setup

Before get started, make sure that [yarn](https://classic.yarnpkg.com/en/docs/install) package manager is installed on your machine.

1. Clone the repo

   ```
   git clone https://github.com/EmreUygur/simple-discord-kd-bot.git
   cd simple-discord-kd-bot
   ```

2. Install all dependencies

   ```
   yarn install
   ```

3. Create .env file

   ```
   cp .env.example .env
   # DO NOT FORGET MODIFY .env FILE WITH YOUR INFORMATIONS
   ```

## Commands

- Run in development

  Runs the bot locally in development enviroment

  ```
  yarn dev
  ```

- Run in production

  ```
  yarn start
  ```

## Enviroment Variables

The environment variables can be found and modified in the .env file.

> DO NOT FORGET TO MODIFY THEM ACCORDING TO YOUR INFORMATIONS

- TOKEN

  BOT token which is provided by discord. This can be obtained by by going to developer portal > clicking the bot > clicking the bot section on left > clicking the copy button under Build-A-Bot

- OWNER

  Discord id of user. Can be obtained by right click on yourself and choosing "Copy ID" option at discord application.

  > If you don't see "Copy ID" option, then you have to enable "Developer Mode" on Settings>Appearance

- PREFIX

  The character(s) that you want to use before writing bot command.
