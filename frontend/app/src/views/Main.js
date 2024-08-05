import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Main() {
  const {data, setData} = useContext(DataContext);
  const filteredBooks = (data && data.search?.length > 0 )
  ? data.books.filter(b => (b.bookname.toLowerCase()).includes(data.search.toLowerCase()))
  : []

  return (
    <main>
      <section id="my-ratings">
        <div className="container">
          <div id="receiver">
            {
              (data?.search && data?.search.length) > 0
              ? 
              (filteredBooks && filteredBooks.map((item) => {
                return (
                  <>
                    <div key={item.bookname}>
                      <h2 class="container-title">{item.bookname}</h2>
                      <img
                        src={
                          "https://covers.openlibrary.org/b/isbn/" +
                          item.isbn +
                          "-M.jpg" 
                        }
                        alt="book cover"
                      />
                      <p class="container-rating">{item.rating}/ 10</p>
                      <p class="container-note">{item.note}</p>
                    </div>
                    <hr />
                  </>
                )
              }))
              :
            (data?.books && data?.books.map((item) => {
                return (
                  <>
                    <div key={item.bookname}>
                      <h2 class="container-title">{item.bookname}</h2>
                      <img
                        src={
                          "https://covers.openlibrary.org/b/isbn/" +
                          item.isbn +
                          "-M.jpg" 
                        }
                        alt="book cover"
                      />
                      <p class="container-rating">{item.rating}/ 10</p>
                      <p class="container-note">{item.note}</p>
                    </div>
                    <hr />
                  </>
                )
              }))
              }
          </div>
        </div>
      </section>
    </main>
  )
}
