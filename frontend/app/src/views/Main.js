import { useEffect, useState } from "react";

export default function Main(props) {
  const [data, setData] = useState();

  function handleData(bookData) {
    if (bookData && bookData.length === 1) {
      console.log(1);
      setData(bookData[0]);
    }else if (bookData && bookData.length > 1){
      console.log(2);
      bookData.map((book) => {
        console.log(bookData);
        console.log(book);
        return setData((oldValue)=>{
          return [
            ...oldValue,
            book
          ];
        });
      });
    }else{
      setData("Error fetching data.")
    };
  };

  console.log(data);

  useEffect(()=>{
    handleData(props.data);
  },[props.data]);

  return (
    <main>
      <section id="my-ratings">
        <div className="container">
          <div id="receiver">
            {data && data.map((item) => {
              console.log(data)
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
                );
              })};
          </div>
        </div>
      </section>
    </main>
  );
}
