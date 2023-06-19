# FTR Sourcing - Development Test Project (Masangkay)

This is a simple web application built with Laravel and ReactJS. The application allows users to create, update, delete, and display the list of to-do items and total count.

Table of Contents
  - [Tech Requirements](#tech-requirements)
  - [Installation](#installation)
  - [Features](#features)
  - [Directory Structure](#directory-structure)
  - [API List](#api-list)
  - [Tech Stack](#tech-stack)
  - [Author](#author)
  - [License](#license)

## Tech Requirements

To run this application locally, you need to have the following software installed:

- PHP (version 7.4 or higher)
- Composer
- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

Follow these steps to install and run the application:

1. Clone the repository:
```bash
git clone https://github.com/ugemasangkay/da-dev-masangkay
```

2. Navigate to the project directory:
```bash
cd da-dev-masangkay/
```

3. Install PHP dependencies:
```bash
composer install
```

4. Install JavaScript dependencies:
```bash
npm install
```

5. Create a copy of the .env.example file and rename it to .env. Update the necessary environment variables such as database credentials.

Env variable value used:
```bash
APP_NAME=DA-DEV-Masangkay
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

Note: Open the http://localhost/phpmyadmin/ and create a new database (Name: laravel), update the password if required
```

6. Generate an application key:
```bash
php artisan key:generate
```

7. Run the database migrations and seed the database:
```bash
php artisan migrate --seed
```

8. Compile the assets:
```bash
npm run dev
```

9. Start the local development server:
```bash
php artisan serve
```

10. Open your browser and visit http://localhost:8000 to access the application.

## Features
- View all of the items in the to-do list.
- Add an item to the list
- Remove an item from the list
- Mark an item from the list as complete

## Directory Structure

The important directories and files in this project are:

- `app/`: Contains Laravel application files, including models, controllers, and routes.
- `resources/`: Contains frontend assets, including React components, views, and styles.
- `database/migrations/`: Contains database migration files.
- `database/seeds/`: Contains database seeder files.
- `routes/`: Contains Laravel route definitions.
- `public/`: Contains the compiled assets and the main entry point `index.php`.
- `.env`: The environment configuration file. (Use `.env.example` for reference content)
- `README.md`: This file.

## API List

```
+----------+---------------------+-----------------------------+------------------------------------------------------------+
| Method   | URI                 | Name                        | Action                                                     |
+----------+---------------------+-----------------------------+------------------------------------------------------------+
| GET|HEAD | /                   | generated::Wx6RbbAcTv1ZTuqv | Closure                                                    |
| GET|HEAD | api                 | todos.index                 | App\Http\Controllers\TodoController@index                  |
| POST     | api/todos           | todos.store                 | App\Http\Controllers\TodoController@store                  |
| DELETE   | api/todos/{todo}    | todos.destroy               | App\Http\Controllers\TodoController@destroy                |
| PUT      | api/todos/{todo}    | todos.update                | App\Http\Controllers\TodoController@update                 |
+----------+---------------------+-----------------------------+------------------------------------------------------------+
```

## Tech Stack

- PHP 7.4.33
- Laravel 8.75
- React 18.2.0
- NPM 9.6.1
- Composer 2.5.7
- MySQL

## Author

> Eugene Masangkay (ugemasangkay@gmail.com)

## License

This application is open-source and is licensed under the [MIT License](https://opensource.org/licenses/MIT).