# Architecture Documentation - Harnoor Gill

## useSystemStatus() Hook

**What does it do?**
This hook helps me show and manage system statuses (like "Help Desk System is Online"). It gives me the list of statuses and lets me add or remove them easily.

**Why did I make it this way?**
I only put the display stuff in the hook. Things like checking if the data is correct happen somewhere else. This way, if something breaks, I know exactly where to look.

**Where did I use it?**
I used it in my StatusList component. The hook gives me:

- A list of all system statuses to show on screen
- A way to add new statuses
- A way to delete statuses
- Error messages if something goes wrong

## systemStatusService

**What does it do?**
This checks if the data is correct before saving it. For example, it makes sure you can't create a status with an empty name.

**Why did I make it this way?**
I put all the checking and rules here. The hook just handles showing stuff, and the repository just saves stuff. Keeping them separate makes everything cleaner.

**Where did I use it?**
My hook talks to this service whenever someone wants to add or delete a status.

## systemStatusRepo

**What does it do?**
This is where I actually save and get the data. Right now it uses fake test data, but later we'll connect it to a real database.

**Why did I make it this way?**
I only put data saving/loading here. No checking if data is valid, no display code. Just getting and storing information.

**Where did I use it?**
The service talks to this repository when it needs to actually save or load data.

## Test Data

**What does it do?**
I made 10 fake system statuses to work with while building everything. Things like "Email Service: Active" and "Database: Connected".

**Why did I make it?**
I needed some data to test with before we build the real database. This lets me make sure everything works properly.

**Where did I use it?**
The repository uses this test data instead of a real database for now.

## How Everything Works Together

When someone uses my StatusList:

1. StatusList asks the hook for data
2. Hook asks the service to get/save data
3. Service checks if everything is okay
4. Service asks the repository to actually get/save the data
5. Data comes back the same way

I also use my teammate's ticket hook to show ticket numbers, so both hooks work together in my component.

Everything is separate and organized, which makes it way easier to find and fix bugs.
