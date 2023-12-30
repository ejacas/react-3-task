const MainImage = ({women}) => {

const handleClick = (e) => {
    e.target.parentElement.style.background = "red"
}

  return (
    <div className="image" onClick={handleClick}>
        <img src={women} alt="" />
        <p>Ipsum Feuzgiat</p>
    </div>
  )
}

export default MainImage