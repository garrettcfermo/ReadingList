const React = require('react')
const Fragment = React.Fragment

const Form = () =>
  <Fragment>
    <form>
      <div className="form-group">
        <label htmlFor="bookName">Book Name</label>
        <input type="text" className="form-control" id="bookName" placeholder="Ready Player One" />
      </div>
      <div className="form-group">
        <label htmlFor="bookAuthor">Book Author</label>
        <input type="text" className="form-control" id="bookAuthor" placeholder="Ernest Cline" />
      </div>
      <div className="form-group">
        <label htmlFor="bookPages">Book Pages</label>
        <input type="text" className="form-control" id="bookPages" placeholder="385" />
      </div>
      <div className="form-group">
        <label htmlFor="bookCurPage">Current Page Number</label>
        <input type="text" className="form-control" id="bookCurPage" placeholder="105" />
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="bookIsRead" />
        <label className="form-check-label" htmlFor="bookIsRead"> Read this Book Before</label>
      </div>
      <hr className="my-2" />
    </form>
    <a className="btn btn-outline-success btn-block" href="/list" role="button"><i className="fas fa-book-open"></i> Add Book</a>
    <a className="btn btn-outline-secondary btn-block" href="/" role="button"><i className="fas fa-home"></i> Back Home</a>
  </Fragment>

module.exports = Form