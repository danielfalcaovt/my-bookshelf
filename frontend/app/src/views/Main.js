import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Main() {
  const { data } = useContext(DataContext);
  const filteredBooks =
    data && data.search?.length > 0
      ? data.books.filter((b) =>
          b.bookname.toLowerCase().includes(data.search.toLowerCase())
        )
      : [];

  return (
    <main>
      <section id="my-ratings">
        <div className="container">
          <div id="receiver">
            {(data?.search && data?.search.length) > 0
              ? filteredBooks &&
                filteredBooks
                  .sort((x, y) => y.rating - x.rating)
                  .map((item) => {
                    return (
                      <>
                        <div key={item.bookname}>
                          <h2 class="container-title">{item.bookname}</h2>
                          <div id="book-cover">
                            <img
                              src={`/assets/book-covers/${item.img}`}
                              alt="book cover"
                            />
                            <div id="book-paper-effect"></div>
                            <div
                              id="book-back-effect"
                              style={{
                                background:
                                  item.coverColor || "rgb(49, 41, 25)",
                              }}
                            ></div>
                          </div>
                          <p class="container-rating">{item.rating} / 10</p>
                          <p class="container-note">{item.note}</p>
                        </div>
                        <hr />
                      </>
                    );
                  })
              : data?.books &&
                data?.books
                  .sort((x, y) => y.rating - x.rating)
                  .map((item) => {
                    return (
                      <>
                        <div key={item.bookname}>
                          <h2 class="container-title">{item.bookname}</h2>
                          <div id="book-cover">
                            <img
                              src={`/assets/book-covers/${item.img}`}
                              alt="book cover"
                            />
                            <div id="book-paper-effect"></div>
                            <div id="book-back-effect" style={{background: item.coverColor || 'rgb(49, 41, 25)'}}></div>
                          </div>
                          <p class="container-rating">{item.rating} / 10</p>
                          <p class="container-note">{item.note}</p>
                        </div>
                        <hr />
                      </>
                    );
                  })}
          </div>
        </div>
      </section>
    </main>
  );
}
