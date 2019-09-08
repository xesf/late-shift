# late-shift
![Late Shift](lateshift_logo.png)

Late Shift Reimplementation for the Web.

The aim of this project is to provide a full reimplementation for the Web of the Late Shift interactive movie created by CtrlMovie.


## Purpose
- Re-implementation of the Late Shift PC version;

- Create a new web-based authoring tool capable of replicating the game engine; (see [agrippa](https://github.com/xesf/agrippa) git repo)

- Focus on taking advantage of the modern web development languages and frameworks like Javascript and React;

- Use as a sandbox to try new features of those frameworks during the process;

- Have fun implementing it!!

## Enhancements

* Adaptive streaming (bitrate streaming quality)
* Play Full Story Sequence like a TV Show episode
* Number of full complete stories played worldwide
* Total hours worldwide played
* Player's choice statistics while playing

## Assets

You will need to own a copy of the game in order to test this implementation.
I am using the Steam version: https://store.steampowered.com/app/584980/Late_Shift/

Create a data folder in the root directory of this project.
Copy the folders Videos and Subtitles from the steam library installation folder.

Note: the adaptive streaming conversion scripts will be added at a later stage.

## Usage

This project uses node, yarn and lerna CLI to manage multiple applications and packages in a mono repository.

Install:
* nodejs: https://nodejs.org/en/
* yarn: https://yarnpkg.com/en/

Run this commands in the root folder:

> yarn install
> yarn start
