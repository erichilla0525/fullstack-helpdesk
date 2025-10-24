#What does this hook/service/repository do?

1.The useFAQ custom React hook manages all FAQ-related actions on the frontend.
It handles creating, reading, updating, and deleting FAQs by connecting to the service layer.
It also manages local states such as the search term and filtered FAQ list, so the UI updates 
automatically when data changes.

2.The service layer acts as a bridge between the frontend and the data source.
It sends and receives data from the repository and also validates the FAQ data before saving or 
updating it.In short, it makes sure only clean and valid information is passed to the backend.

3.The repository manages how the app interacts with the data itself.
It performs CRUD operations (Create, Read, Update, Delete) directly on the FAQ data source.
It hides the low-level data logic from the service, keeping the code cleaner and easier to change later.

##How did you decide what logic to include in that implementation, and how does that correctly separate 
solution concerns?

1.I designed the hook to focus only on frontend state management and user interaction.
This means it doesn't deal with data validation or API calls — that work belongs to the service layer.
By separating the logic this way, the hook stays simple, reusable, and easier to maintain.

2.I included only the logic related to data validation and API communication in this service.
This separation keeps the data rules separate from what the user sees on the screen.
It also helps prevent errors, because the service checks the data before sending it anywhere else.

3.I included only the logic that directly works with the FAQ data — no validation or UI logic.
This keeps the repository focused on data handling only, while the service and hook handle their own 
responsibilities.This follows the Separation of Concerns principle, making each part of the code easier 
to understand.

##Where is this implementation made use of in the project and how?

1.The hook is used inside the FAQ component pages, where users can view, search, or edit FAQs.
It connects the frontend UI with the service layer, helping the app stay responsive and organized.

2.The faqService is used inside the useFAQ hook and other parts of the app that deal with FAQ data.
When a user adds, edits, or deletes an FAQ, the hook calls the service, which handles validation and 
then communicates with the repository.

3.The repository is used by the faqService.ts file.When the service needs to get, create, update, or 
delete an FAQ, it calls the repository functions.This helps keep all database operations in one place, 
improving structure and maintainability.