// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/todo/{id}" page={ViewTodoPage} name="viewTodo" />
      <Route path="/todos" page={TodoPage} name="todo" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
