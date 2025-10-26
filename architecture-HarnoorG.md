# Architecture Documentation - Harnoor Gill

## useTickets() Hook

**What does it do?**
This hook manages all the ticket data and gives us easy functions to work with tickets (like fetching, creating, and deleting them).

**Why I used it this way?**
I kept the hook simple, it only handles showing data on the screen and managing errors. All the validation and database stuff happens in other files, not here. This makes it easier to understand and fix bugs.

**Where I used it?**
I used this hook in my StatusList component. It helps me:

- Show how many tickets are open, pending, or closed
- Let users clear all tickets with one button
- Display error messages if something goes wrong

## ticketFormService

**What does it do?**
This service checks if ticket data is valid before saving it. Like making sure the ticket isn't empty.

**Why I used it this way?**
The service handles all the rules and validation. It doesn't deal with showing stuff on screen or saving to a database it just checks if everything is correct.

**Where I used it?**
The useTickets() hook calls this service whenever we need to create or validate tickets.

## ticketFormRepo

**What does it do?**
This is where we actually get and save ticket data. It talks to our test data file.

**Why I used it this way?**
The repository only deals with reading and writing data. No validation, no display logic, just pure data operations.

**Where I used it?**
The service layer calls this repository to actually fetch or save tickets after validation passes.

## How It All Works Together

My StatusList component works like this:

1. StatusList asks the hook for ticket data
2. Hook asks the service to get tickets
3. Service asks the repository for the actual data
4. Data comes back: Repository - Service - Hook - StatusList

This keeps everything organized and easy to change later.
