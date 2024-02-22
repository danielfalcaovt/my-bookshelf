export default function Main(props) {
    return(
        <main>
        <section id="my-ratings">
            <div className="container">
                <div id="receiver">
                {props.iso ? <>
                    <div>
                            <h2 class="container-title">
                                {props.iso.bookname}
                            </h2>
                            <img src={"https://covers.openlibrary.org/b/isbn/"+ props.iso.isbn + "-M.jpg"} alt="book cover" />
                            <p class="container-rating">
                                {props.iso.rating}
                                / 10
                            </p>
                            <p class="container-note">
                                {props.iso.note}
                            </p>
                        </div>
                           <hr />
                    </>
                 : props.data && props.data.data.map((item)=>{
                return(
                    <>
                        <div>
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
                })}
                </div>
            </div>
        </section>
    </main>
    )
}