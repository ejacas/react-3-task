import '../styles/Main.css'
import women from '../images/women.jpg'
import MainImage from './MainImage'

const Main = () => {
  const womenArray = [women, women, women, women, women, women, women, women, women, women, women]
  
  return (
    <>
    <main>
       <div className="container">
            <h1>Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ullam fugit dicta, voluptates odit voluptatum veritatis optio fugiat officia magni. Ullam aliquam dolores dolore animi, numquam quasi distinctio fugiat explicabo?</p>
            <div className="images">
              {womenArray.map((woman, index) => (
                <MainImage key={index} women={woman} />
              ))}
            </div>
       </div>
    </main>
    </>
  )
}

export default Main