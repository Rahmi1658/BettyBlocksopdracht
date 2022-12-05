const Navbar = () => {
    return (  
        <nav className='navbar'>
            <h1>Bettyblocks site</h1>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='/create' style={{
                    color: "white",
                    backgroundColor: '#3586f1',
                    borderRadius: '8px'
                }}>Niewe melding</a>
            </div>
        </nav>
    );
}
 
export default Navbar;