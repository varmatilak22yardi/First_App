# To-Do List App in Angular 📝

This is a simple To-Do List app built with Angular, allowing users to add, edit, and delete tasks. The app leverages Angular's **two-way data binding** using the `[(ngModel)]` directive to provide a smooth and dynamic user experience. 🚀

## Features ✨
- **Add tasks** to your to-do list. ➕
- **Edit tasks** and update their details. ✏️
- **Delete tasks** from the list when completed or no longer needed. ❌
- **Two-way data binding** for real-time updates and seamless interaction. 🔄

## Two-Way Data Binding in Angular 🔗

In this app, **two-way binding** is used to link the input fields and the task list dynamically. Here's how it works:

- The `[(ngModel)]` directive is used to bind the input field to the task property. Any changes made to the input field are automatically reflected in the task model, and vice versa.
- This allows the user to add or edit tasks directly within the input field, with the UI automatically updating as the model changes.

Example of two-way binding:
```html
<input [(ngModel)]="newTask" placeholder="Enter task">
```
This ensures that when the user types in the input box, the `newTask` variable in the component is updated, and the UI reflects those changes immediately. ✨

## Setup and Installation ⚙️

### Prerequisites 📋
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher) 💻
- [Angular CLI](https://angular.io/cli) 📦

### Install the dependencies 📥
Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/todolist-app.git
cd todolist-app
npm install
```
## Run the application 🚀

To run the application locally, use the following command:

```bash
ng serve
```
