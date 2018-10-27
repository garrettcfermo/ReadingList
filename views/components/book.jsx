const React = require('react')
const Fragment = React.Fragment

const Book = () =>
  <Fragment>
    <div className="card mb-3">
      <div className="card-header">
        Ready Player One
              <a href="#" className="btn btn-outline-danger btn-sm float-right">Delete</a>
        <a href="#" className="btn btn-outline-secondary btn-sm float-right">Edit</a>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Author: Garrett Fermo</li>
        <li className="list-group-item">Pages: 385</li>
        <li className="list-group-item">Current Page: 115</li>
      </ul>
    </div>
  </Fragment>

module.exports = Book