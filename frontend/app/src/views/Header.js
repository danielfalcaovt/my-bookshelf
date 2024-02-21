export default function Header(props) {
    return(
        <header>
            <nav>
                <a id="title" href="/">
                    <h1 draggable="true">BOOKSHELF</h1>
                </a>

                <form onSubmit={props.func}  method="post" autoComplete="off">
                    <input placeholder="Search..." type="text" name="search" id="search"/>
                </form>
                
                <a className="button" rel="noreferrer" target="_blank" href="https://github.com/danielfalcaovt">
                    <div id="ham--lineUp"></div>
                    <div id="ham--lineDown"></div>
                </a>  
            </nav>
        </header>
    );
};