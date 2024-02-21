export default function Main(props) {
    return(
        <main>
        <section id="my-ratings">
            <div className="container">
                <div id="receiver">
                {props.data?props.data.data.map((item)=>{
                    return (
                    <>
                        <div
                        >
                            <h2 class="container-title">
                                {item.bookname}
                            </h2>
                            <img src={"https://covers.openlibrary.org/b/isbn/"+ item.isbn + "-M.jpg"} alt="book cover" />
                            <p class="container-rating">
                                {item.rating}
                                / 10
                            </p>
                            <p class="container-note">
                                {item.note}
                            </p>
                        </div>

                           <hr />
                    </>
                    )
                }):"Data not found."}
                </div>
            </div>
        </section>
    </main>
    )
}