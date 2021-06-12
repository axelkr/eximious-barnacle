# 3.16.0
- user can select which projects to focus on.

# 3.15.1
- adapt unit-test to new interface.

# 3.15.0
- user can select which states to focus on.

# 3.14.0
- application starts with previously selected topic
- renaming of project and kanban card looks less odd now
- latest and greatest dependencies

# 3.13.0
- inline two-top-level menus for navigation into one
- label navigation elements for accessibility

# 3.12.1
- latest and greatest 

# 3.12.0
- contexts can now be selected in other views as well
- a state view orders cards by how long they've been in this specific state. Hence, cards at the top haven't been moved in a whole.

# 3.11.0
- reduce visual clutter.
- hint visually that certain parts can be clicked, e.g. name of kanban card and project can be clicked to edit them.

# 3.10.0
- states display colors in project view as well. This enables the user to connect the state model with the CFD diagram

# 3.9.2
- latest and greatest 

# 3.9.1
- tasks can now be nested
- tasks are no longer shown after being marked as done
- user can rename tasks

# 3.9.0
- kanban cards can now have individual tasks

# 3.8.2
- fix: works in initial setup again

# 3.8.1
- cleanup internally

# 3.8.0
- contexts: define them, filter by context, add them per kanban card

# 3.7.3
- fix: use correct id to find state model (II)
- fix: tests 

# 3.7.2
- fix: use correct id to find state model

# 3.7.1
- navigate within a kanban card
- update to latest

# 3.7.0
- navigate more fluently between kanban cards, states, projects along the hierarchy

# 3.6.0
- update to latest angular
- user can now toggle between display CFD for final states

# 3.5.0
- display individual pages for projects and views. Enable user to navigate to them.
- improve initial load by lazy-loading views
- extract common components per domain model to enable more reuse

# 3.4.1
- fix: display minimal axes

# 3.4.0
- Display cumulative flow diagram for every project

# 3.3.0
- integrate breaking changes from domain model

# 3.2.1
- small fixes

# 3.2.0
- user can enter/select topic

# 3.1.1
- update angular, integrate more updates to domain model

# 3.1.0
- integrate updates to domain model

# 3.0.4
- enable moving kanban card to trash state

# 3.0.3
- switch to explicitly defined trash state

# 3.0.2
- larger icons for applications

# 3.0.1
- project defaults can only be added if they haven't been already

# 3.0.0
- state models are now per project and no longer for the whole board

# 2.8.6
- handle breaking change from one library

# 2.8.5
- fix: call AppInit correctly.

# 2.8.4
- fix: handles case if new card is temporarilly not attached to a state
- fix: switch to firefox, as its available under the same name in Windows and Linux
- remove coverage reports as I don't believe in them adding quality

# 2.8.3
- fix breaking changes by prime-barnacle

# 2.8.1
- update to version of prime-barnacle, which is more tolerant against server not available for requests

# 2.8.0
- connect more robustly to backend with prime-barnacle

# 2.7.0
- update to next Angular minor version
- icons for menu entries instead of plain text

# 2.6.0
- setup D3
- process server side events

# 2.5.0
- enable rename of Kanban Card

# 2.4.0
- enable renaming of a project

# 2.3.0
- project setup is a separate high-level menu item as it is not an essential interaction
- reduced clutter. Common layout to indicate links.

# 2.2.1
- simplified layout

# 2.2.0
- title of webpage can be configured
- projects and individual states received a layout update.

# 2.1.1
- enable separate configuration of backend port.

# 2.1.0
- understandable UI for creating project, kanban card
- modify endpoint in deployed version by providing configuration

# 2.0.1
- fix: provide latest state

# 2.0.0
- provide overview about which states have how many cards in progress
- user can traverse from one state to adjacent ones

# 1.3.0
- enable moving card around

# 1.2.1
- display kanban cards per state and per project
- enable adding kanban card to initial state 

# 1.2.0
- display project's states

# 1.1.2
- fix: contains stuff

# 1.1.1
- fix: didn't contain correct version

# 1.1.0
- use font Rubik, applicable to the goal.
- switched to new model for Kanban cards

# 1.0.2
- reduce package size