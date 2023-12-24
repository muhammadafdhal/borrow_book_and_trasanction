# Book Borrowing and Transaction Application

Welcome to the Book Borrowing and Transaction Application! This application allows users to borrow and return books, as well as view transaction history.

## Description

This application is built using the Internet Computer Protocol (ICP). Leveraging the concept of Canister contracts on ICP, this application enables users to perform several key functions:

- **Book Borrowing**: Users can borrow books by using book IDs.
- **Book Return**: Users can return books that have been borrowed.
- **View Book Inventory**: Users can see the list of available books.
- **View Transactions**: Users can check the history of borrowing and returning books.

## Usage Steps

### Prerequisites

To run this application, make sure you have:

- Access to the Internet Computer Protocol (ICP).
- Node.js and DFX (or DFINITY SDK) installed on your local environment.

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/muhammadafdhal/borrow_book_and_trasanction
    ```

2. **Navigate to the Directory**

    ```bash
    cd your_app_folder
    ```

3. **Run the Application**

    Start the application using the following command:

    ```bash
    dfx start
    ```

### Usage

After running the application, you can access its main functions through a user interface or by using the code implemented within this application.

#### Example Usage via Code

To use the application functions within your code, import these functions from the implemented Canister contract.

For instance:

```javascript
import { borrowBook, returnBook, viewBookInventory, viewTransactions } from './canister_file_name';
// Utilize these functions as needed for your application