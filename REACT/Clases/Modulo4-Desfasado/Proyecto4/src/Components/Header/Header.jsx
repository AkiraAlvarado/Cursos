import MainMenu from "./MainMenu";

function Header(){
   return (
      <header>
         <div>
            <img src="Logo" alt="" />
         </div>
         <nav>
            <MainMenu></MainMenu>
         </nav>
      </header>
   )
}

export default Header;