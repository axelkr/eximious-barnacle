# v3.5.0
- display individual pages for projects and views. Enable user to navigate to them.
- improve initial load by lazy-loading views
- extract common components per domain model to enable more reuse

# v3.4.1
- fix: display minimal axes

# v3.4.0
- Display cumulative flow diagram for every project

# v3.3.0
- integrate breaking changes from domain model

# v3.2.1
- small fixes

# v3.2.0
- user can enter/select topic

# v3.1.1
- update angular, integrate more updates to domain model

# v3.1.0
- integrate updates to domain model

# v3.0.4
- enable moving kanban card to trash state

# v3.0.3
- switch to explicitly defined trash state

# v3.0.2
- larger icons for applications

# v3.0.1
- project defaults can only be added if they haven't been already

# v3.0.0
- state models are now per project and no longer for the whole board

# v2.8.6
- handle breaking change from one library

# v2.8.5
- fix: call AppInit correctly.

# v2.8.4
- fix: handles case if new card is temporarilly not attached to a state
- fix: switch to firefox, as its available under the same name in Windows and Linux
- remove coverage reports as I don't believe in them adding quality

# v2.8.3
- fix breaking changes by prime-barnacle

# v2.8.1
- update to version of prime-barnacle, which is more tolerant against server not available for requests

# v2.8.0
- connect more robustly to backend with prime-barnacle

# v2.7.0
- update to next Angular minor version
- icons for menu entries instead of plain text

# v2.6.0
- setup D3
- process server side events

# v2.5.0
- enable rename of Kanban Card

# v2.4.0
- enable renaming of a project

# v2.3.0
- project setup is a separate high-level menu item as it is not an essential interaction
- reduced clutter. Common layout to indicate links.

# v2.2.1
- simplified layout

# v2.2.0
- title of webpage can be configured
- projects and individual states received a layout update.

# v2.1.1
- enable separate configuration of backend port.

# v2.1.0
- understandable UI for creating project, kanban card
- modify endpoint in deployed version by providing configuration

# v2.0.1
- fix: provide latest state

# v2.0.0
- provide overview about which states have how many cards in progress
- user can traverse from one state to adjacent ones

# v1.3.0
- enable moving card around

# v1.2.1
- display kanban cards per state and per project
- enable adding kanban card to initial state 

# v1.2.0
- display project's states

# v1.1.2
- fix: contains stuff

# v1.1.1
- fix: didn't contain correct version

# v1.1.0
- use font Rubik, applicable to the goal.
- switched to new model for Kanban cards

# v1.0.2
- reduce package size