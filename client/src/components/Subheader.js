import VerseRangeForm from './VerseRangeForm';

function Subheader({ selection, showVerseRangeForm }) {
  return (
    <div className="subheader">
      <div className="container flex">
        <div className="subheadings">
          <h2>Select a:</h2>
          <h3>{selection}</h3>
        </div>
        {showVerseRangeForm && <VerseRangeForm />}
      </div>
    </div>
  );
}

export default Subheader;
