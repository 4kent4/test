import Button from "./Button"

const Header = ({title}) => {
  return (
    <header className="header-container">
        <div className="container-container">
            <h1>{title}</h1>
        </div>
        
        <div className="btn-container">
             <Button text='add' bgColor={'maroon'}/>
        </div>
        
    </header>
  )
}

export default Header