import React from "react";

export default function InfoBox() {
  return (
    <React.Fragment>
      {/* <!-- Modal --> */}
      <div
        className="alert alert-secondary alert-dismissible fade show mb-0"
        role="alert"
      >
        The impacts of COVID-19 and related market volatility have led to
        increased client inquiries. We created a Top FAQs page that answers your
        most pressing questions, making it easy for you to stay up-to-date and
        quickly service your needs online.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </React.Fragment>
  );
}
