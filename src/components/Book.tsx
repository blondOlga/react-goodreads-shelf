import React, { CSSProperties, FunctionComponent, useState } from "react";
import { Book as BookType } from "../types";
import Placeholder from "./Placeholder";

const bookStyle: CSSProperties = {
  textAlign: "left"
};

const imageStyle: CSSProperties = {
  width: "100%"
};

const Book: FunctionComponent<{ book: BookType }> = ({ book }) => {
  const [state, setState] = useState({ error: false });
  const onError = () => setState({ error: true });

  if (!book) {
    return null;
  }

  return (
    <div style={bookStyle} title={book.title}>
      <a href={book.link} target="_blank" rel="nofollow noreferrer">
        {state.error ? (
          <div data-testid="placeholder">
            <Placeholder />
          </div>
        ) : (
          <img alt={book.title} style={imageStyle} src={book.imageUrl} onError={onError} />
        )}
      </a>
    </div>
  );
};

export default Book;
