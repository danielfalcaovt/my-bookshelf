import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

export default function Main() {
  const {data, setData} = useContext(DataContext);

  return (
    <main>
      <section id="my-ratings">
        <div className="container">
          <div id="receiver">
            {data && data.map((item) => {
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
              })}
          </div>
        </div>
      </section>
    </main>
  )
}
